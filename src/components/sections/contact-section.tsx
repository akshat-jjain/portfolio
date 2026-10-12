"use client";

import { FormEvent, useState } from "react";
import { portfolioData } from "@/data/portfolio";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export function ContactSection() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setState({ status: "error", message: data.error || "Unable to submit form." });
        return;
      }

      setState({ status: "success", message: data.message || "Message sent successfully." });
      form.reset();
    } catch {
      setState({ status: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <section id="contact" className="border-t border-border py-14">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
      <p className="mt-3 max-w-2xl text-sm text-foreground-muted sm:text-base">
        Share your project, role, or collaboration details. I usually respond quickly when contact email delivery is configured.
      </p>
      {portfolioData.contact.email ? (
        <p className="mt-2 text-sm text-foreground-muted">
          Prefer email? Write to <a className="underline" href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
        </p>
      ) : (
        <p className="mt-2 text-sm text-foreground-muted">Set NEXT_PUBLIC_CONTACT_EMAIL to show direct email fallback.</p>
      )}

      <form className="mt-6 max-w-2xl space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            minLength={20}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="off" tabIndex={-1} />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-accent bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={state.status === "loading"}
        >
          {state.status === "loading" ? "Sending..." : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm text-foreground-muted">
          {state.message}
        </p>
      </form>
    </section>
  );
}
