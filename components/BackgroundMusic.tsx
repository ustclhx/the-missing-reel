
import React, { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
    currentTrack: string | null;
    isMuted?: boolean;
    onToggleMute?: () => void;
    isEndingMusicPlaying?: boolean;
    onStopEndingMusic?: () => void;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
    currentTrack,
    isMuted = true,
    onToggleMute,
    isEndingMusicPlaying = false,
    onStopEndingMusic
}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Use a promise queue to serialize audio operations and prevent "interrupted" errors
    const operationQueue = useRef<Promise<void>>(Promise.resolve());
    const currentSrcRef = useRef<string | null>(null);

    const MAX_VOLUME = 0.4;

    // Initialize Audio Element
    useEffect(() => {
        if (!audioRef.current) {
            const audio = new Audio();
            audio.loop = true;
            audio.volume = MAX_VOLUME;
            audioRef.current = audio;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
            }
        };
    }, []);

    // Handle Playback Logic with Queue
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Chain this operation to the end of the previous one
        operationQueue.current = operationQueue.current.then(async () => {
            try {
                // Case 1: No track needed
                if (!currentTrack) {
                    audio.pause();
                    currentSrcRef.current = null;
                    return;
                }

                // Case 2: Track changed
                if (currentSrcRef.current !== currentTrack) {
                    audio.src = currentTrack;
                    currentSrcRef.current = currentTrack;
                    audio.load(); // Prepare the new track
                }

                // Case 3: Play or Pause based on Mute state
                if (!isMuted) {
                    // Ensure volume is set
                    audio.volume = MAX_VOLUME;
                    // Try to play
                    await audio.play();
                } else {
                    audio.pause();
                }
            } catch (error) {
                // Browser policy errors or interruption errors are caught here
                // We ignore them to prevent app crashes, but log for debugging
                console.warn("BackgroundMusic operation failed:", error);
            }
        });

    }, [currentTrack, isMuted]);

    const handleClick = () => {
        // If ending music is playing, stop it
        if (isEndingMusicPlaying && onStopEndingMusic) {
            onStopEndingMusic();
        }
        // Toggle mute for other music
        onToggleMute?.();
    };

    return (
        <button
            onClick={handleClick}
            className={`
            fixed top-6 right-6 z-[100] group flex items-center justify-center
            w-10 h-10 rounded-full border transition-all duration-500 shadow-lg cursor-pointer
            ${isMuted
                    ? 'border-stone-700 bg-stone-900/80 text-stone-500 hover:border-stone-500 hover:text-stone-300'
                    : 'border-amber-700/50 bg-amber-900/30 text-amber-500 hover:border-amber-500 hover:bg-amber-900/50 shadow-amber-900/20'
                }
        `}
            title={isMuted ? "Turn Music On" : "Turn Music Off"}
        >
            {/* Visual Equalizer */}
            <div className={`flex items-end gap-[2px] h-4 ${isMuted ? 'opacity-40' : ''}`}>
                <div className={`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${isMuted ? 'h-1' : 'h-3 animate-[pulse_0.8s_ease-in-out_infinite]'}`}></div>
                <div className={`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${isMuted ? 'h-1' : 'h-5 animate-[pulse_1.2s_ease-in-out_infinite]'}`}></div>
                <div className={`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${isMuted ? 'h-1' : 'h-2 animate-[pulse_1.0s_ease-in-out_infinite]'}`}></div>
                <div className={`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${isMuted ? 'h-1' : 'h-4 animate-[pulse_0.6s_ease-in-out_infinite]'}`}></div>
            </div>

            {/* Slash for muted */}
            {isMuted && (
                <div className="absolute w-8 h-[1px] bg-stone-400 rotate-45 shadow-sm"></div>
            )}
        </button>
    );
};
