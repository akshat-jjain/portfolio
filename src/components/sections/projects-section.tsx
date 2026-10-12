import { portfolioData } from "@/data/portfolio";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-14">
      <SectionHeading
        eyebrow="Selected projects"
        title="Architecture and implementation examples"
        description="Links and outcomes are only shown where verified data is available."
      />
      <ProjectsGrid projects={portfolioData.projects} />
    </section>
  );
}
