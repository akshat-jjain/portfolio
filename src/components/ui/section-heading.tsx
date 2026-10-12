type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-2xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm text-foreground-muted sm:text-base">{description}</p> : null}
    </header>
  );
}
