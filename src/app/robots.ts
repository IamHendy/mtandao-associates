import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// AI assistants and answer engines we explicitly welcome, so the site can be
// read and cited by ChatGPT, Claude and similar tools.
const AI_CRAWLERS = [
  // OpenAI / ChatGPT
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Other AI search assistants
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
