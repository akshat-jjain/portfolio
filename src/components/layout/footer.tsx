import { portfolioData } from "@/data/portfolio";

const currentYear = new Date().getUTCFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer links">
          {portfolioData.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
