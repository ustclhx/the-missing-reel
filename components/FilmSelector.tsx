
import React, { useState, useEffect } from 'react';
import { FILM_ARCHIVE } from '../constants';
import { FilmReel } from '../types';

interface FilmSelectorProps {
    onBack: () => void;
    onSelectReel: (film: FilmReel) => void;
    unlockedReels: string[];
    onUnlockReel: (reelId: string) => void;
}

// --- Icons ---

const SketchIcon = ({ type, className }: { type: number, className?: string }) => {
    const commonProps = {
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        fill: "none",
        className: className
    };

    switch (type) {
        case 0: // Champagne (Flute)
            return (
                <svg viewBox="0 0 24 24" {...commonProps}>
                    <path d="M12 21v-6" />
                    <path d="M8 21h8" />
                    <path d="M12 15l-3.5-9h7l-3.5 9" />
                    <path d="M9 6h6" opacity="0.5" />
                </svg>
            );
        case 1: // Martini (Triangle)
            return (
                <svg viewBox="0 0 24 24" {...commonProps}>
                    <path d="M12 21v-9" />
                    <path d="M8 21h8" />
                    <path d="M3 5l9 7 9-7H3z" />
                    <path d="M6 5l6 5 6-5" opacity="0.3" />
                </svg>
            );
        case 2: // Old Fashioned (Tumbler)
            return (
                <svg viewBox="0 0 24 24" {...commonProps}>
                    <path d="M7 6l1.5 13h7l1.5-13H7z" />
                    <path d="M5 21h14" strokeWidth="1" strokeDasharray="1 2" />
                    <path d="M8 10h8" opacity="0.3" />
                    <path d="M9 15h6" opacity="0.3" />
                </svg>
            );
        case 3: // Wine (Round)
            return (
                <svg viewBox="0 0 24 24" {...commonProps}>
                    <path d="M12 21v-8" />
                    <path d="M8 21h8" />
                    <path d="M12 13c-2.5 0-4.5-1.5-4.5-4V5h9v4c0 2.5-2 4-4.5 4z" />
                    <path d="M8 5v2" opacity="0.3" />
                    <path d="M16 5v2" opacity="0.3" />
                </svg>
            );
        case 4: // Blank / Empty
            return null;
        default: return null;
    }
};

const CocktailShakerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 11h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
        <path d="M8 17h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" />
        <path d="M10 7V5h4v2" />
        <path d="M10 5a2 2 0 1 1 4 0" />
        <path d="M5 11h1" />
        <path d="M7 17l-1.5 4h13L17 17" />
    </svg>
);


export const FilmSelector: React.FC<FilmSelectorProps> = ({
    onBack,
    onSelectReel,
    unlockedReels,
    onUnlockReel
}) => {
    const [reelId, setReelId] = useState(1);
    const [code, setCode] = useState<number[]>([1, 2, 3, 0]);
    const [message, setMessage] = useState('');
    const [isShaking, setIsShaking] = useState(false);
    const [spinningReelIndex, setSpinningReelIndex] = useState<number | null>(null);

    // Auto-fill logic
    useEffect(() => {
        setMessage('');
        const knownReel = FILM_ARCHIVE.find(r => r.reelNumber === reelId);
        if (knownReel && unlockedReels.includes(knownReel.id)) {
            setCode(knownReel.code);
        }
    }, [reelId, unlockedReels]);

    const cycleIcon = (index: number) => {
        // Determine direction for visual effect, for now just toggle next
        // setSpinningReelIndex(index);
        // setTimeout(() => setSpinningReelIndex(null), 150); // Removed loading time


        setMessage('');
        setCode(prev => {
            const newCode = [...prev];
            // Only allow Blank (Icon 4) for Hidden Reel 0
            const maxIcons = reelId === 0 ? 5 : 4;
            newCode[index] = (newCode[index] + 1) % maxIcons;
            return newCode;
        });
    };

    const changeReel = (delta: number) => {
        setMessage('');
        const nextReelId = Math.max(-3, Math.min(10, reelId + delta));
        setReelId(nextReelId);
    };

    const handleShuffleCheck = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
            checkReelLogic();
        }, 800); // Wait for shake to finish
    };

    const checkReelLogic = () => {
        const foundReel = FILM_ARCHIVE.find(r =>
            r.reelNumber === reelId &&
            JSON.stringify(r.code) === JSON.stringify(code)
        );

        if (foundReel) {
            onUnlockReel(foundReel.id);
            onSelectReel(foundReel);
        } else {
            if (code.every(v => v === 0)) {
                setMessage(`REEL #${String(reelId)}: 曝光过度，胶片全白。`);
            } else {
                setMessage('胶卷顺序错误，无法查看');
            }
        }
    };

    return (
        <div className="fixed inset-0 w-full h-full bg-[#101010] flex flex-col items-center justify-center overflow-hidden select-none font-sans text-stone-300 perspective-1000">

            {/* Atmosphere - Studio Dark with heavy grain */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]"></div>
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"></div>

            {/* Main Content Wrapper - Constrained to Viewport */}
            <div className="relative z-10 w-full h-full max-h-screen flex flex-col items-center justify-center p-4 gap-4">

                {/* THE KODAK VISION3 BOX - Aged & Textured */}
                {/* Reverted to SQUARE aspect ratio */}
                <div className="relative w-full max-w-[550px] h-auto max-h-[85vh] aspect-square shadow-2xl flex-shrink-0 group">

                    {/* Shadow/Grounding */}
                    <div className="absolute -bottom-8 left-4 right-4 h-10 bg-black/90 blur-xl rounded-[50%] transform scale-y-50"></div>

                    <div className="
                        relative w-full h-full
                        bg-[#E8AA25] /* Slightly darker/dirty Kodak Yellow */
                        shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)]
                        overflow-hidden
                        rounded-sm
                    ">
                        {/* GLOBAL GRUNGE TEXTURE OVERLAY */}
                        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none z-30"></div>
                        <div className="absolute inset-0 opacity-20 mix-blend-color-burn bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none z-30"></div>

                        {/* 1. BLACK HEADER BAND (Top ~22%) - Worn Black with Gray Tones */}
                        <div className="absolute top-0 left-0 w-full h-[22%] bg-gradient-to-b from-[#252525] to-[#1a1a1a] px-6 flex flex-col justify-center border-b border-white/10 shadow-md z-10 relative overflow-hidden">
                            {/* Mottled texture overlay - creates gray variations */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>

                            {/* Grain texture for aged film feel */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-dark.png')] opacity-40 mix-blend-soft-light pointer-events-none"></div>

                            {/* Scuff marks and wear - enhanced visibility */}
                            <div className="absolute top-0 right-10 w-32 h-32 bg-white/10 blur-xl rounded-full mix-blend-overlay"></div>
                            <div className="absolute bottom-2 left-20 w-24 h-24 bg-white/8 blur-lg rounded-full mix-blend-overlay"></div>

                            {/* Subtle light streak for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent mix-blend-overlay"></div>

                            <div className="flex flex-row items-baseline gap-2 relative z-10 opacity-95">
                                <span className="text-[#C82015] font-black text-3xl md:text-5xl tracking-tighter leading-none mix-blend-screen opacity-90 blur-[0.3px]">KODAK</span>
                                <span className="text-[#e5e5e5] font-bold text-3xl md:text-5xl tracking-tight leading-none mix-blend-screen opacity-90 blur-[0.3px]">VISION3</span>
                            </div>
                            <span className="text-[#888] text-[8px] md:text-xs font-light tracking-wide mt-0.5 uppercase mix-blend-screen opacity-80">
                                Color Negative Film
                            </span>
                        </div>

                        {/* 2. SIDE BARCODE (Left Strip) */}
                        <div className="absolute top-[22%] bottom-0 left-0 w-8 bg-[#e5e5e5] flex flex-col items-center justify-end pb-2 border-r border-[#d49a24] z-10 hidden md:flex">
                            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-20 mix-blend-multiply absolute inset-0"></div>
                            <div className="w-full h-16 bg-[repeating-linear-gradient(0deg,#111,#111_1px,transparent_1px,transparent_3px)] opacity-70 mb-4 mix-blend-multiply"></div>
                            <span className="text-[6px] text-stone-800 -rotate-90 origin-center whitespace-nowrap mt-4 font-mono font-bold opacity-80">
                                7203 052 014
                            </span>
                        </div>

                        {/* 3. MAIN YELLOW BODY CONTENT - Worn Look */}
                        <div className="absolute top-[22%] bottom-0 left-4 md:left-8 right-0 p-3 md:p-6 flex flex-col relative z-20 h-[78%] pb-16">

                            {/* Stains and Wear Marks - Aged/Distressed Look - ENHANCED VISIBILITY */}
                            {/* Coffee/dirt stains - much more visible */}
                            <div className="absolute right-[15%] top-[20%] w-40 h-40 bg-[#6b4e0d] rounded-full blur-3xl opacity-[0.25] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute left-[25%] bottom-[30%] w-32 h-32 bg-[#5a4108] rounded-full blur-2xl opacity-[0.30] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute right-[40%] top-[40%] w-24 h-24 bg-[#4d3606] rounded-full blur-xl opacity-[0.28] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute left-[10%] top-[60%] w-20 h-20 bg-[#7a5d0f] rounded-full blur-lg opacity-[0.35] mix-blend-multiply pointer-events-none z-0"></div>

                            {/* Edge wear and fading - stronger */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#8b6914]/40 to-transparent opacity-60 mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#6b4e0d]/35 to-transparent opacity-70 mix-blend-multiply pointer-events-none z-0"></div>

                            {/* Scuff marks - diagonal streaks - more prominent */}
                            <div className="absolute top-[10%] right-[20%] w-32 h-2 bg-[#5a4108] rotate-45 blur-sm opacity-[0.40] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute bottom-[25%] left-[30%] w-24 h-2 bg-[#4d3606] -rotate-12 blur-sm opacity-[0.38] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute top-[50%] left-[15%] w-28 h-1.5 bg-[#6b4e0d] rotate-[-30deg] blur-sm opacity-[0.35] mix-blend-multiply pointer-events-none z-0"></div>

                            {/* Additional dirt patches for realism */}
                            <div className="absolute right-[5%] bottom-[15%] w-16 h-16 bg-[#7a5d0f] rounded-full blur-md opacity-[0.32] mix-blend-multiply pointer-events-none z-0"></div>
                            <div className="absolute left-[50%] top-[10%] w-12 h-12 bg-[#5a4108] rounded-full blur-md opacity-[0.30] mix-blend-multiply pointer-events-none z-0"></div>

                            {/* BACK BUTTON INTEGRATION - Stamped Label */}
                            <button
                                onClick={onBack}
                                className="absolute top-0 right-0 border-[3px] border-[#da291c] p-1 rotate-3 hover:rotate-0 transition-transform cursor-pointer z-50 bg-yellow-500/10 hover:bg-yellow-500/20 shadow-md"
                            >
                                <div className="border-[2px] border-[#da291c] px-4 py-1 flex items-center justify-center">
                                    <span className="text-[#da291c] font-black text-[10px] md:text-sm tracking-widest uppercase">
                                        RETURN
                                    </span>
                                </div>
                            </button>


                            {/* Unlocked Indicator - Sticky Note Style */}
                            {FILM_ARCHIVE.find(r => r.reelNumber === reelId && unlockedReels.includes(r.id)) && (
                                <div className="absolute top-0 left-2 z-20 transform -rotate-6 transition-transform duration-300 origin-top-left">
                                    <div className="
                                        relative px-2 py-1
                                        bg-[#fefce8]
                                        shadow-[1px_2px_3px_rgba(0,0,0,0.15)]
                                        flex items-center justify-center
                                        border border-yellow-200/60
                                    ">
                                        <div className="absolute top-0 left-0 right-0 h-[6px] bg-black/[0.03] pointer-events-none mix-blend-multiply"></div>
                                        <span className="text-stone-800 font-hand font-bold text-[10px] tracking-widest uppercase relative z-10 opacity-90 leading-none">
                                            OPEN
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Main Text & INTEGRATED REEL SELECTOR */}
                            <div className="relative z-10 flex flex-col gap-0 mt-0 shrink-0">
                                <h1 className="text-[#1a1a1a] font-black text-2xl md:text-5xl tracking-tight leading-none drop-shadow-sm mix-blend-multiply opacity-90 blur-[0.4px]">
                                    Super 8
                                </h1>

                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-[#222] font-bold text-sm md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply">
                                        50D
                                    </span>

                                    {/* The New Integrated Reel Selector - Looks like batch stamp */}
                                    <div className="flex items-center gap-1 border-[1px] border-[#1a1a1a]/40 px-1 py-0.5 transform -rotate-1 bg-[#d49a24]/20 z-50 relative shadow-sm hover:scale-105 transition-transform">
                                        <span className="text-[8px] font-mono font-bold text-[#111] uppercase spacing-wide">BATCH</span>
                                        <button onClick={() => changeReel(-1)} className="text-[#000] hover:text-[#da291c] font-black text-xs px-1.5 cursor-pointer transition-colors">&lt;</button>
                                        <span className="text-lg font-mono font-bold text-[#000] min-w-[1.2rem] text-center relative">
                                            {String(reelId).padStart(2, '0')}
                                        </span>
                                        <button onClick={() => changeReel(1)} className="text-[#000] hover:text-[#da291c] font-black text-xs px-1.5 cursor-pointer transition-colors">&gt;</button>
                                    </div>
                                </div>
                                <span className="text-[#222] font-bold text-lg md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply">
                                    7203
                                </span>
                            </div>

                            {/* Interaction Area - Stamped Squares - RIGID CONTAINER */}
                            <div className="flex flex-shrink-0 items-center justify-start gap-2 md:gap-5 mt-2 relative z-50 pl-1 mix-blend-normal min-h-[80px] w-full">
                                {code.map((iconIndex, idx) => {
                                    const isUnlocked = FILM_ARCHIVE.find(r => r.reelNumber === reelId && unlockedReels.includes(r.id));
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => !isUnlocked && cycleIcon(idx)}
                                            disabled={!!isUnlocked}
                                            className={`
                                                group relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0 flex flex-col items-center justify-center 
                                                bg-[#E8AA25] border-2 border-stone-800
                                                ${!isUnlocked ? 'transition-all transform hover:-translate-y-1 cursor-pointer' : 'cursor-default opacity-90'}
                                            `}
                                        >
                                            {/* Paper texture on button */}
                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>

                                            <div className={`w-6 h-6 md:w-10 md:h-10 text-stone-900 transition-colors relative z-50 ${spinningReelIndex === idx ? 'opacity-0' : 'opacity-100'}`}>
                                                <SketchIcon type={iconIndex} />
                                            </div>

                                            {/* Lock indicator for unlocked reels */}
                                            {isUnlocked && (
                                                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1a1a1a]/50"></div>
                                            )}

                                            {spinningReelIndex === idx && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="animate-spin text-stone-900 font-bold">⟳</span>
                                                </div>
                                            )}

                                            <span className="absolute bottom-1 right-1 text-[8px] text-stone-500 font-mono z-10">
                                                0{idx + 1}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* ABSOLUTE FOOTER - Moved to main container scope to ensure visibility */}
                        </div>

                        {/* FINAL CONFIRM BUTTON & LOGO - Pinned to bottom of the box */}
                        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end z-50 pointer-events-auto mix-blend-normal">
                            {/* Kodak K Logo */}
                            <div className="w-10 h-10 text-[#C82015] opacity-90 mix-blend-multiply">
                                <svg viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M10 10 h15 v80 h-15 Z" />
                                    <path d="M35 10 h15 l35 35 l-35 35 h-15 l35 -35 Z" />
                                </svg>
                            </div>

                            <button
                                onClick={handleShuffleCheck}
                                disabled={isShaking}
                                className="
                                    relative overflow-hidden
                                    border-[3px] border-stone-900
                                    text-stone-900
                                    px-6 py-2
                                    text-sm font-black uppercase tracking-widest
                                    hover:bg-stone-900 hover:text-[#E8AA25]
                                    transition-colors
                                    flex items-center gap-2
                                "
                            >
                                <span className="relative z-10 drop-shadow-sm filter">{isShaking ? 'Running...' : 'INSPECT'}</span>
                                {/* Noise overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>
                            </button>
                        </div>
                    </div>

                    {/* Edge Wear / Highlights - Outside the yellow body, inside the main box */}
                    <div className="absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay"></div>

                </div>

                {/* Status Message */}
                <div className="h-10 flex items-center justify-center mt-6 px-4 text-center shrink-0">
                    {message && (
                        <div className="transform rotate-1 border-l-4 border-[#C82015] bg-[#222] px-4 py-2 shadow-2xl">
                            <span className="text-stone-300 text-xs font-mono font-bold tracking-tight">
                                {message}
                            </span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
