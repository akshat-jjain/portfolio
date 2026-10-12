export function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function sanitizeInput(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export function isExternalLink(url: string) {
  return /^https?:\/\//.test(url);
}
