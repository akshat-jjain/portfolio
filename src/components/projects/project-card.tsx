import Link from "next/link";
import { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-panel p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-foreground-muted">{project.summary}</p>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <p className="font-medium">Problem</p>
          <p className="text-foreground-muted">{project.problem}</p>
        </div>
        <div>
          <p className="font-medium">Approach</p>
          <p className="text-foreground-muted">{project.approach}</p>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li key={tech} className="rounded border border-border px-2 py-1 text-xs text-foreground-muted">
            {tech}
          </li>
        ))}
      </ul>

      {project.verifiedImpact.length > 0 ? (
        <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
          {project.verifiedImpact.map((impact) => (
            <li key={impact}>{impact}</li>
          ))}
        </ul>
      ) : null}

      {project.pendingVerification?.length ? (
        <div className="mt-4 rounded border border-amber-500/40 bg-amber-500/10 p-3 text-xs text-amber-200">
          {project.pendingVerification.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <Link className="underline-offset-4 hover:underline" href={`/projects/${project.slug}`}>
          Case study
        </Link>
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            Source
          </a>
        ) : null}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
