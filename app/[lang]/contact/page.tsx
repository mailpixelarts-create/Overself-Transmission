import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
    title: "Contact",
};

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <section className="py-24" aria-labelledby="contact-heading">
            <Container className="max-w-2xl">
                <FadeIn>
                    <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                        {dict.contact?.badge}
                    </p>
                    <h1
                        id="contact-heading"
                        className="font-serif text-4xl md:text-5xl text-foreground mb-6"
                    >
                        {dict.contact?.title}
                    </h1>
                    <p className="text-muted font-sans text-base leading-relaxed mb-14">
                        {dict.contact?.intro}
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <ContactForm dict={dict.contact?.form} />
                </FadeIn>
            </Container>
        </section>
    );
}
