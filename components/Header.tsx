"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { Locale } from "@/i18n-config";

interface HeaderProps {
    lang: string;
}

export default function Header({ lang }: HeaderProps) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Dictionary labels for nav (could be passed as props, but keeping it simple for now)
    const labels: Record<string, any> = {
        en: {
            home: "Home",
            meditations: "Meditations",
            about: "About",
            workbook: "Workbook",
            contact: "Contact"
        },
        pt: {
            home: "Início",
            meditations: "Meditações",
            about: "Sobre",
            workbook: "Caderno",
            contact: "Contato"
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

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
            <Container className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                    href={`/${lang}`}
                    className="font-serif text-lg tracking-wide text-foreground hover:text-accent transition-colors duration-200"
                    aria-label="Overself — home"
                >
                    Overself
                </Link>

                {/* Desktop nav */}
                <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm tracking-wide transition-colors duration-200 ${pathname === href
                                ? "text-foreground"
                                : "text-muted hover:text-foreground"
                                }`}
                            aria-current={pathname === href ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <div className="flex items-center gap-3 ml-4 border-l border-border pl-6">
                        <Link
                            href={redirectedPathname('en')}
                            className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${lang === 'en' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
                        >
                            EN
                        </Link>
                        <span className="text-border text-[10px]">|</span>
                        <Link
                            href={redirectedPathname('pt')}
                            className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${lang === 'pt' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
                        >
                            PT
                        </Link>
                    </div>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span
                        className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                    />
                    <span
                        className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                    />
                </button>
            </Container>

            {/* Mobile menu */}
            {menuOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile navigation"
                    className="md:hidden border-t border-border bg-background"
                >
                    <Container className="py-6 flex flex-col gap-6">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-base tracking-wide transition-colors duration-200 ${pathname === href ? "text-foreground" : "text-muted hover:text-foreground"
                                    }`}
                                aria-current={pathname === href ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}

                        {/* Mobile Language Switcher */}
                        <div className="flex items-center gap-6 pt-6 border-t border-border">
                            <Link
                                href={redirectedPathname('en')}
                                onClick={() => setMenuOpen(false)}
                                className={`text-xs tracking-[0.2em] uppercase ${lang === 'en' ? 'text-accent' : 'text-muted'}`}
                            >
                                English
                            </Link>
                            <Link
                                href={redirectedPathname('pt')}
                                onClick={() => setMenuOpen(false)}
                                className={`text-xs tracking-[0.2em] uppercase ${lang === 'pt' ? 'text-accent' : 'text-muted'}`}
                            >
                                Português
                            </Link>
                        </div>
                    </Container>
                </nav>
            )}
        </header>
    );
}
