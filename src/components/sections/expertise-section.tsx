import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-t border-border py-14">
      <SectionHeading
        eyebrow="Technical expertise"
        title="Backend depth with full-stack execution"
        description="Depth indicators are represented by project usage and architecture notes, not fabricated percentages."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-border bg-panel p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
