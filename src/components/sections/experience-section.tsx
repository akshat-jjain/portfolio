import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-14">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline"
        description="Verified details are shown directly; placeholders are explicitly marked for replacement."
      />
      <div className="space-y-4">
        {portfolioData.experiences.map((item) => (
          <article key={`${item.role}-${item.period}`} className="rounded-lg border border-border bg-panel p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-foreground-muted">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-foreground-muted">{item.company}</p>
            {item.needsVerification ? (
              <p className="mt-2 text-xs text-amber-300">Details pending confirmation before final public publishing.</p>
            ) : null}
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech} className="rounded border border-border px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
