import type { Metadata } from "next";
import LocalFont from "next/font/local";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

const brittany = LocalFont({
    src: "../../../public/BrittanySignature.ttf",
    variable: "--font-brittany",
    display: "swap",
});

export const metadata: Metadata = {
    title: "About",
};

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <section className="py-24" aria-labelledby="about-heading">
            <Container className="max-w-3xl">
                <FadeIn>
                    <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                        {dict.about?.badge}
                    </p>
                    <h1
                        id="about-heading"
                        className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight"
                    >
                        {dict.about?.title}
                    </h1>
                </FadeIn>

                <div className="space-y-8 text-muted font-sans text-base md:text-lg leading-relaxed">
                    <FadeIn delay={0.1}>
                        <p>{dict.about?.p1}</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p>{dict.about?.p2}</p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p>{dict.about?.p3}</p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="border-l-2 border-accent/30 pl-8 my-12 italic text-foreground/80 font-serif text-xl whitespace-pre-line">
                            "{dict.about?.quote}"
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <p>{dict.about?.p4}</p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="mt-12 text-center">
                            <p className="font-serif italic text-foreground/70 text-lg mb-4">{dict.about?.signature?.closing}</p>
                            <p className={`text-3xl text-foreground tracking-wide ${brittany.variable}`} style={{ fontFamily: "var(--font-brittany)" }}>
                                {dict.about?.signature?.name}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}
