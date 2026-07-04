import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { i18n } from "@/i18n-config";

// ── Fonts ────────────────────────────────────────────────────
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    preload: true,
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

// ── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
    title: {
        default: "Overself",
        template: "%s | Overself",
    },
    description:
        "Guided meditation sessions rooted in contemplative philosophy — dissolve distraction and return to the ground of your own being.",
    keywords: ["meditation", "contemplative", "mindfulness", "awareness", "stillness"],
    authors: [{ name: "Overself" }],
    openGraph: {
        title: "Overself",
        description:
            "Guided meditation sessions rooted in contemplative philosophy.",
        url: "https://overselftransmission.com",
        siteName: "Overself",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Overself",
        description:
            "Guided meditation sessions rooted in contemplative philosophy.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

// ── Viewport (separate export prevents hydration mismatch) ────
export const viewport: Viewport = {
    themeColor: "#0a0a0a",
    width: "device-width",
    initialScale: 1,
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

// ── Root Layout ───────────────────────────────────────────────
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang} className={`${playfair.variable} ${inter.variable}`}>
            <body className="bg-background text-foreground font-sans antialiased">
                {/* Skip nav for accessibility / Lighthouse */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:text-sm"
                >
                    Skip to main content
                </a>
                <Header lang={lang} />
                <main id="main-content" className="pt-16">
                    {children}
                </main>
                <Footer lang={lang} />
            </body>
        </html>
    );
}
