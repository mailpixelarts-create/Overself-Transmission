import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
    title: "Workbook",
};

export default async function WorkbookPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <section className="py-24" aria-labelledby="workbook-heading">
            <Container className="max-w-3xl">
                {/* Header */}
                <FadeIn>
                    <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                        {dict.workbook?.badge}
                    </p>
                    <h1
                        id="workbook-heading"
                        className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight"
                    >
                        {dict.workbook?.title}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="text-muted font-sans text-base md:text-lg leading-relaxed mb-4">
                        {dict.workbook?.p1}
                    </p>
                    <p className="text-muted font-sans text-base leading-relaxed mb-12">
                        {dict.workbook?.p2}
                    </p>
                </FadeIn>

                {/* Feature list */}
                <FadeIn delay={0.15}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14" aria-label="Workbook features">
                        {dict.workbook?.features?.map((feature: string) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3 text-sm text-muted font-sans leading-relaxed"
                            >
                                <span className="mt-1 flex-shrink-0 w-4 h-4 text-accent" aria-hidden="true">
                                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                                        <path d="M3 8l3.5 3.5L13 4.5" />
                                    </svg>
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </FadeIn>

                {/* Download CTA */}
                <FadeIn delay={0.2}>
                    <div className="border border-border bg-surface p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-serif text-lg text-foreground mb-1">
                                {dict.workbook?.cta?.title}
                            </p>
                            <p className="text-xs text-muted font-sans">{dict.workbook?.cta?.subtitle}</p>
                        </div>
                        <a
                            href="/workbook/workbook.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300 whitespace-nowrap"
                            aria-label={dict.workbook?.cta?.label}
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path d="M7 2v7m0 0l-3-3m3 3l3-3M2 11h10" />
                            </svg>
                            {dict.workbook?.cta?.button}
                        </a>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
