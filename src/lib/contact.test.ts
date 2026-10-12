import { describe, expect, it } from "vitest";
import { validateContactPayload } from "@/lib/contact";

describe("validateContactPayload", () => {
  it("accepts valid payload", () => {
    const result = validateContactPayload({
      name: "Akshat",
      email: "akshat@example.com",
      message: "I would like to discuss a backend-focused role.",
      company: "",
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("rejects invalid payload", () => {
    const result = validateContactPayload({
      name: "A",
      email: "bad-email",
      message: "short",
      company: "bot-filled",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveProperty("name");
    expect(result.errors).toHaveProperty("email");
    expect(result.errors).toHaveProperty("message");
    expect(result.errors).toHaveProperty("company");
  });
});
