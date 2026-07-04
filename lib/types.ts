// ============================================================
// /lib/types.ts
// Central TypeScript types for Overself Transmission
// Future: these types will be generated from your CMS schema
// ============================================================

export interface Meditation {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    duration: string; // e.g. "18 min"
    audioSrc: string; // local path or future CMS streaming URL
    coverImage?: string; // local path or future CMS image URL
    transcript?: string; // future: rich text from CMS
    tier: "free" | "premium"; // future: controls access gating
    publishedAt?: string; // future: CMS publish date (ISO string)
    tags?: string[]; // future: CMS taxonomy
}

export interface SiteConfig {
    name: string;
    tagline: string;
    description: string;
    url: string;
}
