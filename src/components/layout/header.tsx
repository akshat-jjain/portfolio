"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import { classNames } from "@/lib/utils";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          AKSHAT JAIN
        </a>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-border px-3 py-1 text-xs md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <ButtonLink href="#contact">Contact</ButtonLink>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={classNames(
          "border-t border-border bg-background px-4 pb-4 pt-3 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded px-1 py-1 text-sm text-foreground-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <ThemeToggle />
            <ButtonLink href="#contact">Contact</ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
