import { portfolioData } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/button-link";
import { CodeSnippet } from "@/components/ui/code-snippet";

export function HeroSection() {
  return (
    <section id="home" className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Full Stack Developer • Backend-first</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Shipping reliable backend systems with polished product delivery.</h1>
        <p className="mt-5 max-w-2xl text-base text-foreground-muted sm:text-lg">{portfolioData.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#projects">View Projects</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Contact
          </ButtonLink>
          <ButtonLink href="/files/resume.pdf" variant="secondary" className="resume-link">
            Download Resume
          </ButtonLink>
        </div>
        <p className="mt-3 text-xs text-foreground-muted">
          If resume download fails, add <code>public/files/resume.pdf</code> as documented in README.
        </p>
      </div>
      <CodeSnippet />
    </section>
  );
}
