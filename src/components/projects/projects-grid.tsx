"use client";

import { useMemo, useState } from "react";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/projects/project-card";

type Category = "all" | Project["category"];

const categories: Category[] = ["all", "backend", "fullstack", "frontend"];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Category>("all");

  const filteredProjects = useMemo(() => {
    if (category === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === category);
  }, [category, projects]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={item === category}
            className={`rounded-md border px-3 py-1.5 text-xs uppercase tracking-wide transition ${
              item === category ? "border-accent bg-accent text-accent-foreground" : "border-border text-foreground-muted hover:text-foreground"
            }`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border p-6 text-sm text-foreground-muted">
          No projects available in this category yet.
        </div>
      )}
    </div>
  );
}
