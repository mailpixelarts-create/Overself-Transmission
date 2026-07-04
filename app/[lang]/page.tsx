import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import MeditationCard from "@/components/MeditationCard";
import Link from "next/link";
import { meditations } from "@/lib/meditations";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
    title: "Overself Transmission",
};

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const featured = meditations[0];

    return (
        <>
            {/* Hero */}
            <Hero dict={dict.home?.hero} lang={lang} />

            {/* Master Introduction Section */}
            <section aria-labelledby="master-intro-heading" className="py-28 border-b border-border">
                <Container>
                    <div className="max-w-3xl">
                        <FadeIn>
                            <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                                {dict.home?.masterIntro?.label}
                            </p>
                            <h2
                                id="master-intro-heading"
                                className="font-serif text-3xl md:text-5xl text-foreground mb-2 leading-tight"
                            >
                                {dict.home?.masterIntro?.title}
                            </h2>
                            <p className="font-sans text-lg text-accent italic mb-8">
                                {dict.home?.masterIntro?.subtitle}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <blockquote className="border-l-2 border-accent/30 pl-8 my-10 italic text-foreground/80 font-serif text-xl leading-relaxed whitespace-pre-line">
                                {dict.home?.masterIntro?.quote}
                            </blockquote>
                        </FadeIn>

                        <div className="space-y-6 text-muted font-sans text-base md:text-lg leading-relaxed">
                            <FadeIn delay={0.2}>
                                <p>{dict.home?.masterIntro?.p1}</p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p>{dict.home?.masterIntro?.p2}</p>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="py-4">
                                    <p className="text-foreground mb-4">{dict.home?.masterIntro?.doorwayLabel}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-none">
                                        {dict.home?.masterIntro?.doorways?.map((item: string) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <p>{dict.home?.masterIntro?.p3}</p>
                            </FadeIn>

                            <FadeIn delay={0.6}>
                                <p className="pt-4 font-serif text-xl text-foreground/90 italic" >
                                    {dict.home?.masterIntro?.summary}
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How to Practice / Maximum Benefit Section */}
            <section aria-labelledby="practice-heading" className="py-28 border-b border-border bg-surface/[0.02]">
                <Container>
                    <FadeIn>
                        <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                            {dict.home?.journey?.label}
                        </p>
                        <h2
                            id="practice-heading"
                            className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight"
                        >
                            {dict.home?.journey?.title}
                        </h2>
                        <p className="text-muted font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-16">
                            {dict.home?.journey?.intro}
                        </p>
                    </FadeIn>

                    {/* Three Phases Frames */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {/* Phase One */}
                        <FadeIn delay={0.1}>
                            <div className="p-8 bg-surface border border-border h-full hover:border-accent/40 transition-colors duration-300">
                                <h3 className="font-serif text-xl text-foreground mb-4">{dict.home?.journey?.phase1?.title}</h3>
                                <div className="space-y-4 text-sm md:text-base text-muted leading-relaxed font-sans">
                                    <p>{dict.home?.journey?.phase1?.p1}</p>
                                    <p>{dict.home?.journey?.phase1?.p2}</p>
                                    <p className="text-accent italic">"{dict.home?.journey?.phase1?.quote}"</p>
                                    <p>{dict.home?.journey?.phase1?.p3}</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Phase Two */}
                        <FadeIn delay={0.2}>
                            <div className="p-8 bg-surface border border-border h-full hover:border-accent/40 transition-colors duration-300">
                                <h3 className="font-serif text-xl text-foreground mb-4">{dict.home?.journey?.phase2?.title}</h3>
                                <div className="space-y-4 text-sm md:text-base text-muted leading-relaxed font-sans">
                                    <p>{dict.home?.journey?.phase2?.p1}</p>
                                    <p>{dict.home?.journey?.phase2?.p2}</p>
                                    <p>{dict.home?.journey?.phase2?.p3}</p>
                                    <p className="border-t border-border pt-4 text-foreground/80 font-serif italic text-sm">
                                        {dict.home?.journey?.phase2?.footer}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Phase Three */}
                        <FadeIn delay={0.3}>
                            <div className="p-8 bg-surface border border-border h-full hover:border-accent/40 transition-colors duration-300">
                                <h3 className="font-serif text-xl text-foreground mb-4">{dict.home?.journey?.phase3?.title}</h3>
                                <div className="space-y-4 text-sm md:text-base text-muted leading-relaxed font-sans">
                                    <p>{dict.home?.journey?.phase3?.p1}</p>
                                    <p>{dict.home?.journey?.phase3?.p2}</p>
                                    <p>{dict.home?.journey?.phase3?.p3}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Final Guidance */}
                    <div className="max-w-3xl border-t border-border pt-16">
                        <FadeIn>
                            <p className="text-foreground mb-8 uppercase tracking-widest text-xs font-bold">{dict.home?.journey?.principlesLabel}</p>
                            <ul className="space-y-4 mb-12">
                                {dict.home?.journey?.principles?.map((bullet: string) => (
                                    <li key={bullet} className="flex items-center gap-3 text-muted font-sans">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="space-y-6 text-muted font-sans text-base md:text-lg leading-relaxed">
                                <p>{dict.home?.journey?.guidance}</p>
                                <p className="text-foreground font-serif text-xl italic">
                                    "{dict.home?.journey?.guidanceQuote}"
                                </p>
                                <p>{dict.home?.journey?.guidanceSummary}</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="pt-12 font-serif text-lg md:text-xl text-accent italic space-y-1">
                                {dict.home?.journey?.footer?.map((line: string) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Featured Meditation */}
            <section aria-labelledby="featured-heading" className="py-28 border-b border-border">
                <Container>
                    <FadeIn>
                        <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                            {dict.home?.featured?.label}
                        </p>
                        <h2
                            id="featured-heading"
                            className="font-serif text-3xl text-foreground mb-10"
                        >
                            {dict.home?.featured?.title}
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="max-w-2xl">
                            <MeditationCard meditation={featured} lang={lang} dict={dict.meditations?.sessions} />
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* CTA Section */}
            <section aria-labelledby="cta-heading" className="py-28">
                <Container>
                    <FadeIn>
                        <div className="max-w-xl">
                            <h2
                                id="cta-heading"
                                className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug"
                            >
                                {dict.common?.cta?.ready}
                            </h2>
                            <p className="text-muted font-sans text-base md:text-lg leading-relaxed mb-10">
                                {dict.common?.cta?.explore}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/meditations`}
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300"
                                >
                                    {dict.common?.cta?.allMeditations}
                                </Link>
                                <Link
                                    href="/workbook/workbook.pdf"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-300"
                                >
                                    {dict.common?.cta?.downloadWorkbook}
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>
        </>
    );
}
