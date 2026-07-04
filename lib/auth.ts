// ============================================================
// /lib/auth.ts — Authentication Placeholder
// Future: integrate NextAuth.js for session management
// and protect premium meditation content behind auth guards.
// ============================================================

// ------------------------------------------------------------
// FUTURE: Install and configure NextAuth
// npm install next-auth
//
// 1. Create /app/api/auth/[...nextauth]/route.ts
// 2. Define authOptions with your provider (Google, Email, etc.)
// 3. Wrap your root layout with <SessionProvider>
// 4. Use getServerSession(authOptions) in Server Components
// 5. Use useSession() in Client Components
// ------------------------------------------------------------

import type { Meditation } from "./types";

// ------------------------------------------------------------
// Placeholder: future session shape
// ------------------------------------------------------------
export interface UserSession {
    id: string;
    email: string;
    name?: string;
    tier: "free" | "premium"; // maps to Meditation.tier
}

// ------------------------------------------------------------
// Placeholder: check if a meditation is accessible
// REPLACE: call getServerSession() and compare tier
// ------------------------------------------------------------
export function canAccessMeditation(
    _meditation: Meditation,
    _session: UserSession | null
): boolean {
    // TODO: return meditation.tier === "free" || session?.tier === "premium";
    return true; // all content public for now
}

// ------------------------------------------------------------
// Placeholder: redirect unauthenticated users
// REPLACE: use in (protected)/layout.tsx
// ------------------------------------------------------------
export async function requireSession(): Promise<UserSession> {
    // TODO: const session = await getServerSession(authOptions);
    // TODO: if (!session) redirect("/login");
    // TODO: return session.user as UserSession;
    throw new Error("requireSession: not implemented yet");
}

// ------------------------------------------------------------
// Future: middleware.ts at project root will handle
// route-level protection using NextAuth's withAuth helper.
// This is the recommended pattern for Next.js App Router.
// See: https://next-auth.js.org/configuration/nextjs#middleware
// ------------------------------------------------------------
