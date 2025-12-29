import React, { useEffect } from 'react';

interface FilmLoopIntroProps {
    onComplete: () => void;
}

export const FilmLoopIntro: React.FC<FilmLoopIntroProps> = ({ onComplete }) => {
    const images = [
        '/assets/intro_film_1.jpg',
        '/assets/intro_film_2.jpg'
    ];

    useEffect(() => {
        // End intro after 3 seconds
        const completeTimeout = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(completeTimeout);
        };
    }, [onComplete]);

    return (
        <div className="absolute inset-0 bg-[#050505] z-40 flex items-center justify-center font-mono">
            {/* Unified styling with Intro component */}
            <div className="absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60 z-50"></div>
            {/* Container for the film strip - approx 1/4 screen size */}
            <div className="relative w-[340px] h-auto overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] scale-110 md:scale-100 transform rotate-1">

                {/* Film Strip Background */}
                <div className="bg-[#1a1a1a] border-x-[24px] border-[#0a0a0a] relative flex flex-col gap-[24px] py-8 box-border shadow-inner">

                    {/* Perforations Left */}
                    <div className="absolute left-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={`l-${i}`} className="w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"></div>
                        ))}
                    </div>

                    {/* Perforations Right */}
                    <div className="absolute right-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={`r-${i}`} className="w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"></div>
                        ))}
                    </div>

                    {/* Frame Numbers */}
                    <div className="absolute left-[-30px] top-[40px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest">EASTMAN</div>
                    <div className="absolute right-[-32px] top-[140px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold">14</div>
                    <div className="absolute left-[-30px] top-[260px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest">KODAK</div>
                    <div className="absolute right-[-36px] top-[360px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold">14A</div>

                    {/* Images */}
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full aspect-[4/3] overflow-hidden bg-black mx-auto shadow-[inset_0_0_20px_rgba(0,0,0,1)] ring-1 ring-white/10">
                            <img
                                src={src}
                                alt={`Film frame ${index}`}
                                className="w-full h-full object-cover sepia-[0.3] contrast-[1.15] brightness-[0.85] saturate-[0.8]"
                            />
                            {/* Inner Vignette per frame */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]"></div>
                        </div>
                    ))}
                </div>

                {/* 8mm Effects Overlay (Applying to the strip only) */}
                <div className="pointer-events-none absolute inset-0 z-10 w-full h-full mix-blend-overlay opacity-60">
                    {/* Fine Grain */}
                    <div className="absolute inset-0 opacity-50 animate-grain-fine"></div>

                    {/* Subtle Scratches */}
                    <div className="absolute inset-0 opacity-20 animate-scratch-subtle"></div>

                    {/* Dust Particles - Simulated with noise */}
                    <div className="absolute inset-0 opacity-10 animate-grain-coarse"></div>

                    {/* Color Grading Filter */}
                    <div className="absolute inset-0 bg-[#4a3b2a] mix-blend-color opacity-20"></div>
                    <div className="absolute inset-0 bg-[#001a1a] mix-blend-soft-light opacity-30"></div>
                </div>
            </div>
        </div>
    );
};
