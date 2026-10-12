import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function PrinciplesSection() {
  return (
    <section className="border-t border-border py-14">
      <SectionHeading
        eyebrow="Engineering principles"
        title="How I approach delivery"
        description="Practical patterns for reliability, performance, testing, and maintainability."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.principles.map((principle) => (
          <article key={principle.title} className="rounded-lg border border-border bg-panel p-5">
            <h3 className="text-lg font-semibold">{principle.title}</h3>
            <p className="mt-2 text-sm text-foreground-muted">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
