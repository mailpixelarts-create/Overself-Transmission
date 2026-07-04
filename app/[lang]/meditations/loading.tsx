import SkeletonCard from "@/components/SkeletonCard";
import Container from "@/components/Container";

export default function MeditationsLoading() {
    return (
        <section className="py-24" aria-busy="true" aria-label="Loading meditations">
            <Container>
                {/* Header skeleton */}
                <div className="mb-16">
                    <div className="h-3 w-24 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-4" />
                    <div className="h-10 w-48 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-4" />
                    <div className="h-4 w-96 max-w-full bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                </div>
                {/* Card skeletons — same grid as real page (no CLS) */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Loading meditation sessions">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <li key={i}>
                            <SkeletonCard />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
