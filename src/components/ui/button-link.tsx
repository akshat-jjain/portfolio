import Link from "next/link";
import { classNames, isExternalLink } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  disabled = false,
}: ButtonLinkProps) {
  const classes = classNames(
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "border-accent bg-accent text-accent-foreground hover:opacity-90 focus-visible:ring-accent"
      : "border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-foreground",
    disabled && "pointer-events-none cursor-not-allowed opacity-60",
    className
  );

  if (isExternalLink(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-disabled={disabled}>
      {children}
    </Link>
  );
}
