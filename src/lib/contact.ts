import { sanitizeInput } from "@/lib/utils";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

export function validateContactPayload(input: Partial<ContactPayload>) {
  const name = sanitizeInput(input.name ?? "");
  const email = sanitizeInput(input.email ?? "").toLowerCase();
  const message = sanitizeInput(input.message ?? "");
  const company = sanitizeInput(input.company ?? "");

  const errors: Record<string, string> = {};

  if (company) {
    errors.company = "Spam protection triggered.";
  }

  if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (message.length < 20 || message.length > 2000) {
    errors.message = "Message must be between 20 and 2000 characters.";
  }

  return {
    data: {
      name,
      email,
      message,
      company,
    },
    errors,
    valid: Object.keys(errors).length === 0,
  };
}
