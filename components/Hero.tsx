import Link from "next/link";
import FadeIn from "./FadeIn";
import Container from "./Container";
import { Locale } from "@/i18n-config";

interface HeroProps {
    dict: {
        title: string;
        subtitle: string;
        cta1: string;
        cta2: string;
    };
    lang: Locale;
}

export default function Hero({ dict, lang }: HeroProps) {
    return (
        <section
            className="relative min-h-screen flex items-center border-b border-border"
            aria-label="Hero"
        >
            {/* Subtle radial gradient bg */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,185,154,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <Container className="py-32">
                <FadeIn delay={0}>
                    <p className="text-accent text-xs tracking-[0.25em] uppercase mb-6 font-sans">
                        Overself Transmission
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8 max-w-4xl whitespace-pre-line">
                        {dict.title.split(/(Silence|Silêncio)/i).map((part, i) =>
                            part.toLowerCase() === 'silence' || part.toLowerCase() === 'silêncio' ? (
                                <span key={i} className="italic text-accent">{part}</span>
                            ) : part
                        )}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="font-sans text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                        {dict.subtitle}
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={`/${lang}/meditations`}
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300 rounded-none"
                        >
                            {dict.cta1}
                        </Link>
                        <Link
                            href={`/${lang}/about`}
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-300 rounded-none"
                        >
                            {dict.cta2}
                        </Link>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
