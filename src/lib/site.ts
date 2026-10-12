const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Akshat Jain",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
