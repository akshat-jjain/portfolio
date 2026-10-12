import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact";

type RateLimitEntry = { count: number; expiresAt: number };

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestLog = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requestLog.get(ip);

  if (!current || current.expiresAt < now) {
    requestLog.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  requestLog.set(ip, { ...current, count: current.count + 1 });
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    );
  }

  const payload = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };

  const validation = validateContactPayload(payload);

  if (!validation.valid) {
    return NextResponse.json({ error: "Invalid form data.", fieldErrors: validation.errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Contact delivery is not configured yet. Please use direct email instead." },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: ["Bearer", apiKey].join(" "),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio contact from ${validation.data.name}`,
      reply_to: validation.data.email,
      text: validation.data.message,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thanks! Your message has been sent." });
}
