export default function SkeletonCard() {
    return (
        <div
            className="border border-border bg-surface p-6 min-h-[280px] flex flex-col justify-between"
            role="status"
            aria-label="Loading meditation"
            aria-busy="true"
        >
            <div className="mb-6">
                {/* Title skeleton */}
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="h-6 w-2/3 rounded-none bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                    <div className="h-4 w-12 rounded-none bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                </div>
                {/* Description skeleton */}
                <div className="space-y-2">
                    <div className="h-3.5 w-full rounded-none bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                    <div className="h-3.5 w-5/6 rounded-none bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                    <div className="h-3.5 w-3/4 rounded-none bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                </div>
            </div>

            {/* Audio player skeleton — same fixed height as real player */}
            <div className="h-16 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer flex-shrink-0" />
                <div className="flex-1">
                    <div className="h-px w-full bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer mb-2" />
                    <div className="flex justify-between">
                        <div className="h-3 w-8 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                        <div className="h-3 w-8 bg-gradient-to-r from-border via-surface to-border bg-[length:1000px_100%] animate-shimmer" />
                    </div>
                </div>
            </div>
        </div>
    );
}
