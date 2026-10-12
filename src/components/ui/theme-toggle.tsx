"use client";

import { useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center rounded-md border border-border px-3 text-xs font-medium text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Toggle theme"
      aria-pressed={theme === "light"}
    >
      {theme === "dark" ? "Light" : "Dark"} mode
    </button>
  );
}
