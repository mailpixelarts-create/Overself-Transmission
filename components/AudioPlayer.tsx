"use client";

import { useRef, useState, useEffect, useCallback, memo } from "react";

interface AudioPlayerProps {
    src: string; // accepts local path or future CMS streaming URL
    title?: string;
}

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

function AudioPlayerComponent({ src, title }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onTimeUpdate = () => setCurrentTime(audio.currentTime);
        const onLoadedMetadata = () => {
            setDuration(audio.duration);
            setIsLoaded(true);
        };
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
            audio.removeEventListener("ended", onEnded);
        };
    }, [src]);

    const togglePlayPause = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            await audio.play();
            setIsPlaying(true);
        }
    }, [isPlaying]);

    const handleSeek = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const audio = audioRef.current;
            if (!audio) return;
            const value = Number(e.target.value);
            audio.currentTime = (value / 100) * duration;
            setCurrentTime(audio.currentTime);
        },
        [duration]
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                togglePlayPause();
            }
        },
        [togglePlayPause]
    );

    return (
        /* Fixed height prevents CLS on mount */
        <div className="h-16 flex items-center gap-4 w-full" role="region" aria-label={title ? `Audio player: ${title}` : "Audio player"}>
            {/* Hidden native audio — CLS-safe, no browser UI */}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio ref={audioRef} src={src} preload="metadata" />

            {/* Play / Pause */}
            <button
                onClick={togglePlayPause}
                onKeyDown={handleKeyDown}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
                {isPlaying ? (
                    /* Pause icon */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                        <rect x="2" y="1" width="3.5" height="12" rx="1" />
                        <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
                    </svg>
                ) : (
                    /* Play icon */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                        <path d="M3 2.5l9 4.5-9 4.5V2.5z" />
                    </svg>
                )}
            </button>

            {/* Progress bar */}
            <div className="flex-1 flex flex-col gap-1.5">
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={0.1}
                    value={progress}
                    onChange={handleSeek}
                    disabled={!isLoaded}
                    aria-label="Playback position"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
                    className="w-full h-px bg-border appearance-none cursor-pointer accent-accent disabled:opacity-40 disabled:cursor-not-allowed [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:appearance-none"
                />
                <div className="flex justify-between text-xs text-muted font-sans tabular-nums">
                    <span>{formatTime(currentTime)}</span>
                    <span>{isLoaded ? formatTime(duration) : "––:––"}</span>
                </div>
            </div>
        </div>
    );
}

export default memo(AudioPlayerComponent);
