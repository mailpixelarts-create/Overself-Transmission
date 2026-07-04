import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import AudioPlayer from "@/components/AudioPlayer";
import FadeIn from "@/components/FadeIn";
import { meditations } from "@/lib/meditations";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

// Pre-render all meditation pages for all locales at build time
export async function generateStaticParams() {
    const params: { lang: string; slug: string }[] = [];

    i18n.locales.forEach((lang) => {
        meditations.forEach((m) => {
            params.push({ lang, slug: m.slug });
        });
    });

    return params;
}

// Per-page metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const meditation = meditations.find((m) => m.slug === slug);

    if (!meditation) return { title: "Not Found" };

    const meditationsSessions = (dict.meditations?.sessions || {}) as Record<string, any>;
    const localized = meditationsSessions[slug];

    return {
        title: localized?.title || meditation.title,
        description: localized?.description || meditation.description,
    };
}

// ISR: revalidate every hour
export const revalidate = 3600;

export default async function MeditationPage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug: paramsSlug } = await params;
    const dict = await getDictionary(lang);
    const meditation = meditations.find((m) => m.slug === paramsSlug);

    if (!meditation) notFound();

    const {
        slug,
        duration,
        audioSrc,
        tier,
        coverImage,
    } = meditation;

    const meditationsSessions = (dict.meditations?.sessions || {}) as Record<string, any>;
    const localized = meditationsSessions[slug];
    const title = localized?.title || meditation.title;
    const description = localized?.description || meditation.description;
    const longDescription = localized?.longDescription || (meditation as any).longDescription;
    const transcript = localized?.transcript || (meditation as any).transcript;

    return (
        <article className="py-24" aria-labelledby="meditation-title">
            <Container className="max-w-3xl">
                {/* Breadcrumb */}
                <FadeIn>
                    <nav aria-label="Breadcrumb" className="mb-12">
                        <Link
                            href={`/${lang}/meditations`}
                            className="text-muted text-sm font-sans hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
                        >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path d="M8 2L4 6l4 4" />
                            </svg>
                            {dict.meditations?.session?.back}
                        </Link>
                    </nav>
                </FadeIn>

                {/* Hero Image */}
                {coverImage && (
                    <FadeIn delay={0.05} className="mb-12">
                        <div className="relative aspect-[16/9] w-full overflow-hidden border border-border">
                            <Image
                                src={coverImage}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 768px"
                            />
                        </div>
                    </FadeIn>
                )}

                {/* Header */}
                <FadeIn delay={coverImage ? 0.1 : 0.05}>
                    <div className="mb-2 flex items-center gap-3">
                        <span className="text-muted text-xs font-sans tabular-nums">{duration}</span>
                        {tier === "premium" && (
                            <span className="text-[10px] text-accent border border-accent/40 px-1.5 py-0.5 font-sans tracking-wider uppercase">
                                {lang === 'pt' ? 'Premium' : 'Premium'}
                            </span>
                        )}
                    </div>
                    <h1
                        id="meditation-title"
                        className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight"
                    >
                        {title}
                    </h1>
                    <p className="text-muted font-sans text-base md:text-lg leading-relaxed mb-2">
                        {description}
                    </p>
                    {longDescription && (
                        <p className="text-muted/70 font-sans text-sm leading-relaxed">
                            {longDescription}
                        </p>
                    )}
                </FadeIn>

                {/* Divider */}
                <div className="border-t border-border my-10" />

                {/* Full Audio Player */}
                <FadeIn delay={0.2}>
                    <section aria-labelledby="player-heading">
                        <h2
                            id="player-heading"
                            className="text-xs text-muted font-sans tracking-[0.2em] uppercase mb-4"
                        >
                            {dict.meditations?.session?.listen}
                        </h2>
                        <div className="border border-border bg-surface p-6">
                            <AudioPlayer src={audioSrc} title={title} />
                        </div>
                    </section>
                </FadeIn>

                {/* Divider */}
                <div className="border-t border-border my-10" />

                {/* Transcript */}
                <FadeIn delay={0.25}>
                    <section aria-labelledby="transcript-heading">
                        <h2
                            id="transcript-heading"
                            className="text-xs text-muted font-sans tracking-[0.2em] uppercase mb-4"
                        >
                            {dict.meditations?.session?.transcript}
                        </h2>
                        {transcript ? (
                            <div className="font-sans text-sm text-muted leading-relaxed whitespace-pre-line">
                                {transcript}
                            </div>
                        ) : (
                            <div className="border border-dashed border-border p-8 text-center">
                                <p className="text-muted font-sans text-sm">
                                    {dict.meditations?.session?.transcriptComing}
                                </p>
                            </div>
                        )}
                    </section>
                </FadeIn>

                {/* Divider */}
                <div className="border-t border-border my-10" />

                {/* CTA */}
                <FadeIn delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={`/${lang}/meditations`}
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-300"
                        >
                            {dict.meditations?.session?.all}
                        </Link>
                        <Link
                            href={`/${lang}/about`}
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300"
                        >
                            {dict.meditations?.session?.about}
                        </Link>
                    </div>
                </FadeIn>
            </Container>
        </article>
    );
}
