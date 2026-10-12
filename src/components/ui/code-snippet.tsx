export function CodeSnippet() {
  return (
    <pre
      aria-label="Sample backend endpoint implementation"
      className="code-panel overflow-hidden rounded-lg border border-border bg-panel p-4 text-xs leading-relaxed text-foreground-muted"
    >
      <code>
        {`POST /api/contact\n`}
        {`if (!isValid(payload)) return 400\n`}
        {`if (isRateLimited(ip)) return 429\n`}
        {`queueEmail({ name, email, message })\n`}
        {`return { ok: true }`}
      </code>
    </pre>
  );
}
