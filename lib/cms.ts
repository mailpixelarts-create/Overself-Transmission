// ============================================================
// /lib/cms.ts — CMS Adapter Interface
// Replace the LocalAdapter with SanityAdapter or ContentfulAdapter
// when ready for production CMS integration.
// ============================================================

import type { Meditation } from "./types";

// ------------------------------------------------------------
// Adapter interface — implement this for any CMS
// ------------------------------------------------------------
export interface CMSAdapter {
    getMeditations(): Promise<Meditation[]>;
    getMeditationBySlug(slug: string): Promise<Meditation | null>;
}

// ------------------------------------------------------------
// Local adapter — reads from /lib/meditations.ts
// REPLACE: swap this import for a Sanity or Contentful adapter
// ------------------------------------------------------------
import { meditations } from "./meditations";

export const LocalAdapter: CMSAdapter = {
    async getMeditations() {
        // REPLACE: return await sanityClient.fetch(groqQuery)
        return meditations;
    },

    async getMeditationBySlug(slug: string) {
        // REPLACE: return await sanityClient.fetch(groqQueryBySlug, { slug })
        return meditations.find((m) => m.slug === slug) ?? null;
    },
};

// ------------------------------------------------------------
// Sanity adapter stub (uncomment when ready)
// ------------------------------------------------------------
// import { createClient } from "@sanity/client";
// export const SanityAdapter: CMSAdapter = {
//   async getMeditations() {
//     const client = createClient({ projectId: "...", dataset: "production", apiVersion: "2024-01-01", useCdn: true });
//     return client.fetch(`*[_type == "meditation"]`);
//   },
//   async getMeditationBySlug(slug) {
//     const client = createClient({ ... });
//     return client.fetch(`*[_type == "meditation" && slug.current == $slug][0]`, { slug });
//   },
// };

// ------------------------------------------------------------
// Active adapter — change this one line to switch CMS
// ------------------------------------------------------------
export const cms: CMSAdapter = LocalAdapter;
