import Link from "next/link";
import Container from "./Container";

interface FooterProps {
    lang: string;
}

export default function Footer({ lang }: FooterProps) {
    const labels: Record<string, any> = {
        en: {
            home: "Home",
            meditations: "Meditations",
            about: "About",
            workbook: "Workbook",
            contact: "Contact",
            rights: "All rights reserved."
        },
        pt: {
            home: "Início",
            meditations: "Meditações",
            about: "Sobre",
            workbook: "Caderno",
            contact: "Contato",
            rights: "Todos os direitos reservados."
        }
    };

    const dict = labels[lang] || labels.en;

    const navLinks = [
        { href: `/${lang}`, label: dict.home },
        { href: `/${lang}/meditations`, label: dict.meditations },
        { href: `/${lang}/about`, label: dict.about },
        { href: `/${lang}/workbook`, label: dict.workbook },
        { href: `/${lang}/contact`, label: dict.contact },
    ];

    return (
        <footer className="border-t border-border mt-24 py-12 text-sm text-muted">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="font-serif tracking-wide text-foreground/60">
                    Overself Transmission
                </p>
                <nav aria-label="Footer navigation" className="flex gap-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="hover:text-foreground transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <p>Made with <span className="text-red-500">❤</span> © 2026 Norman James. All rights reserved.</p>
            </Container>
        </footer>
    );
}
