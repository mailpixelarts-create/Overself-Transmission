import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
    return (
        <section
            className="py-40 flex items-center"
            aria-labelledby="not-found-heading"
        >
            <Container>
                <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4 font-sans">
                    404 — Page Not Found
                </p>
                <h1
                    id="not-found-heading"
                    className="font-serif text-5xl md:text-7xl text-foreground mb-6 leading-tight"
                >
                    Lost in the{" "}
                    <span className="text-accent italic">silence</span>?
                </h1>
                <p className="text-muted font-sans text-base md:text-lg leading-relaxed max-w-md mb-12">
                    The page you're looking for doesn't exist — or perhaps it was never
                    meant to be found. Return to where you began.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-background font-sans text-sm tracking-wider uppercase hover:bg-foreground transition-colors duration-300"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/meditations"
                        className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                        All Meditations
                    </Link>
                </div>
            </Container>
        </section>
    );
}
