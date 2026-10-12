import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-start justify-center gap-4 px-4 sm:px-6">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-foreground-muted">The requested page does not exist.</p>
      <Link href="/" className="underline-offset-4 hover:underline">
        Return to portfolio
      </Link>
    </main>
  );
}
