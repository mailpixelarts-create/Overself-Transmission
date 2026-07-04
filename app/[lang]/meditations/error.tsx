"use client";

import Link from "next/link";
import Container from "@/components/Container";

export default function MeditationsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <section className="py-24" aria-labelledby="error-heading">
            <Container>
                <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                    Something went wrong
                </p>
                <h2
                    id="error-heading"
                    className="font-serif text-3xl text-foreground mb-4"
                >
                    Could not load meditations
                </h2>
                <p className="text-muted font-sans text-base leading-relaxed max-w-md mb-8">
                    {error.message || "An unexpected error occurred. Please try again."}
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                        Go Home
                    </Link>
                </div>
            </Container>
        </section>
    );
}
