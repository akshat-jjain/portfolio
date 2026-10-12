import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProfilesSection() {
  return (
    <section className="border-t border-border py-14">
      <SectionHeading
        eyebrow="Coding profiles"
        title="GitHub and LeetCode"
        description="Profile links are provided directly without fabricated scraped statistics."
      />
      <div className="flex flex-wrap gap-3">
        {portfolioData.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-panel px-4 py-2 text-sm transition hover:bg-muted"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
