import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData, projectBySlug } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <Link href="/" className="text-sm text-foreground-muted underline-offset-4 hover:underline">
        ← Back to portfolio
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.14em] text-accent">Case study</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
      <p className="mt-4 text-base text-foreground-muted">{project.summary}</p>

      <section className="mt-8 rounded-lg border border-border bg-panel p-5">
        <h2 className="text-xl font-semibold">Architecture decisions</h2>
        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted">
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-5 rounded-lg border border-border bg-panel p-5">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded border border-border px-2 py-1">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.pendingVerification?.length ? (
        <section className="mt-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-5">
          <h2 className="text-xl font-semibold">Pending verification</h2>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-amber-200">
            {project.pendingVerification.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
