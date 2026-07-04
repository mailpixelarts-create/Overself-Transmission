import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Meditation } from "@/lib/types";
import AudioPlayer from "./AudioPlayer";
import { Locale } from "@/i18n-config";

interface MeditationCardProps {
    meditation: Meditation;
    lang: Locale;
    dict?: any; // Dictionary mapping for session content
}

function MeditationCardComponent({ meditation, lang, dict }: MeditationCardProps) {
    const { slug, title, description, duration, audioSrc, tier, coverImage } = meditation;

    // Use dictionary values if available, otherwise fallback to static lib values
    const localizedTitle = dict?.[slug]?.title || title;
    const localizedDescription = dict?.[slug]?.description || description;

    return (
        <article className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40 overflow-hidden">
            {/* Image Section */}
            {coverImage && (
                <Link href={`/${lang}/meditations/${slug}`} className="relative aspect-[16/9] overflow-hidden block">
                    <Image
                        src={coverImage}
                        alt={localizedTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
                </Link>
            )}

            <div className="flex flex-col flex-1 justify-between p-6">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <Link
                            href={`/${lang}/meditations/${slug}`}
                            className="font-serif text-xl text-foreground hover:text-accent transition-colors duration-200 leading-snug"
                        >
                            {localizedTitle}
                        </Link>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span className="text-xs text-muted font-sans tabular-nums whitespace-nowrap">
                                {duration}
                            </span>
                            {tier === "premium" && (
                                <span className="text-[10px] text-accent border border-accent/40 px-1.5 py-0.5 font-sans tracking-wider uppercase">
                                    {lang === 'pt' ? 'Premium' : 'Premium'}
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-muted font-sans leading-relaxed line-clamp-3">
                        {localizedDescription}
                    </p>
                </div>

                {/* Audio player */}
                <AudioPlayer src={audioSrc} title={localizedTitle} />
            </div>
        </article>
    );
}

export default memo(MeditationCardComponent);
