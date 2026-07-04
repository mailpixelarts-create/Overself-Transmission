import type { Metadata } from "next";
import Container from "@/components/Container";
import MeditationCard from "@/components/MeditationCard";
import FadeIn from "@/components/FadeIn";
import { meditations } from "@/lib/meditations";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
    title: "Meditations",
};

// ISR: revalidate every hour so CMS updates propagate without a full rebuild
export const revalidate = 3600;

export default async function MeditationsPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <section className="py-24" aria-labelledby="meditations-heading">
            <Container>
                {/* Header */}
                <FadeIn>
                    <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                        {dict.meditations?.label}
                    </p>
                    <h1
                        id="meditations-heading"
                        className="font-serif text-4xl md:text-5xl text-foreground mb-4"
                    >
                        {dict.meditations?.title}
                    </h1>
                </FadeIn>

                {/* Introductory Content */}
                <div className="max-w-3xl mb-24 space-y-8 font-sans text-base md:text-lg leading-relaxed text-muted">
                    <FadeIn delay={0.1}>
                        <p className="text-foreground font-serif text-2xl italic mb-12">
                            {dict.meditations?.welcome?.title}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p>{dict.meditations?.welcome?.p1}</p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p>{dict.meditations?.welcome?.p2}</p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p>{dict.meditations?.welcome?.p3}</p>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <p>{dict.meditations?.welcome?.p4}</p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p>{dict.meditations?.welcome?.p5}</p>
                    </FadeIn>

                    <FadeIn delay={0.7}>
                        <p>{dict.meditations?.welcome?.p6}</p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <p>{dict.meditations?.welcome?.p7}</p>
                    </FadeIn>

                    <FadeIn delay={0.9}>
                        <p>{dict.meditations?.welcome?.p8}</p>
                    </FadeIn>

                    <FadeIn delay={1.0}>
                        <p>{dict.meditations?.welcome?.p9}</p>
                    </FadeIn>

                    <FadeIn delay={1.1}>
                        <div className="pt-8 space-y-1 font-serif text-xl text-accent italic">
                            {dict.meditations?.welcome?.closing?.map((line: string) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={1.2}>
                        <p className="text-foreground pt-12 uppercase tracking-[0.1em] text-sm">
                            {dict.meditations?.welcome?.begin}
                        </p>
                    </FadeIn>
                </div>

                {/* Meditation Space Section */}
                <div className="max-w-3xl mb-24 space-y-8 font-sans text-base md:text-lg leading-relaxed text-muted border-t border-border pt-24">
                    <FadeIn>
                        <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans font-bold">
                            {dict.meditations?.space?.label}
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                            {dict.meditations?.space?.title}
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p>{dict.meditations?.space?.p1}</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p>{dict.meditations?.space?.p2}</p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="py-4 border-l-2 border-accent/20 pl-6 italic text-foreground/80">
                            <p className="font-serif text-xl mb-4 text-foreground/90">"{dict.meditations?.space?.p3}"</p>
                            <ul className="space-y-2 text-base font-sans not-italic text-muted">
                                {dict.meditations?.space?.p3_items?.map((item: string) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-foreground font-serif text-xl italic my-8">
                            {dict.meditations?.space?.p4}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <p>{dict.meditations?.space?.p5}</p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p>{dict.meditations?.space?.p6}</p>
                    </FadeIn>

                    <FadeIn delay={0.7}>
                        <div className="py-6">
                            <p className="text-foreground mb-4 uppercase tracking-widest text-xs font-bold">{dict.meditations?.space?.p7_label}</p>
                            <ul className="space-y-3">
                                {dict.meditations?.space?.p7_items?.map((item: string) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-accent rounded-full" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <p>{dict.meditations?.space?.p8}</p>
                    </FadeIn>

                    <FadeIn delay={0.9}>
                        <p>{dict.meditations?.space?.p9}</p>
                    </FadeIn>

                    <FadeIn delay={1.0}>
                        <blockquote className="border-l-2 border-accent/30 pl-8 my-12 italic text-foreground/80 font-serif text-xl leading-relaxed">
                            {dict.meditations?.space?.quote}<br />
                            <span className="text-accent">{dict.meditations?.space?.quote_accent}</span>
                        </blockquote>
                    </FadeIn>

                    <FadeIn delay={1.1}>
                        <p>{dict.meditations?.space?.p10}</p>
                    </FadeIn>
                </div>

                {/* Grid */}
                <ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    aria-label="Meditation sessions"
                >
                    {meditations.map((meditation, i) => (
                        <li key={meditation.id}>
                            <FadeIn delay={Math.min(i * 0.05, 0.4)}>
                                <MeditationCard meditation={meditation} lang={lang} dict={dict.meditations.sessions} />
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
