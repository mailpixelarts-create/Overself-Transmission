import Container from "@/components/Container";
import SkeletonCard from "@/components/SkeletonCard";

export default function MeditationSlugLoading() {
    return (
        <article className="py-24" aria-busy="true" aria-label="Loading meditation">
            <Container className="max-w-3xl">
                {/* Breadcrumb skeleton */}
                <div className="h-4 w-32 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-12" />
                {/* Title skeleton */}
                <div className="h-3 w-20 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-2" />
                <div className="h-12 w-3/4 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-4" />
                <div className="h-4 w-full bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-2" />
                <div className="h-4 w-5/6 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-10" />
                <div className="border-t border-border my-10" />
                {/* Player skeleton */}
                <div className="border border-border bg-surface p-6">
                    <div className="h-16 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer flex-shrink-0" />
                        <div className="flex-1">
                            <div className="h-px w-full bg-border mb-2" />
                            <div className="flex justify-between">
                                <div className="h-3 w-8 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                                <div className="h-3 w-8 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </article>
    );
}
