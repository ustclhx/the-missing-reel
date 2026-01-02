
import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/i18n';

interface EndingProps {
    onComplete: () => void;
}

export const Ending: React.FC<EndingProps> = ({ onComplete }) => {
    const [opacity, setOpacity] = useState(1);
    const isTransitioning = useRef(false);
    const { language } = useLanguage();

    const SLIDES = [
        {
            content: (
                <>
                    <p className="text-xl text-stone-200 leading-loose">{t('endingLine1', language)}</p>
                    <p className="mt-8 text-stone-300">{t('endingLine2', language)}</p>
                    <div className="w-16 h-[1px] bg-stone-700 mx-auto my-12"></div>
                    <p className="text-lg text-stone-400 leading-relaxed italic">
                        {t('endingLine3', language)}
                    </p>
                </>
            )
        }
    ];

    const handleNext = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setOpacity(0);
        setTimeout(() => {
            onComplete();
        }, 800);
    };

    const slide = SLIDES[0];

    return (
        <div
            className="flex-1 flex flex-col items-center justify-center bg-black p-4 md:p-12 relative overflow-hidden h-full cursor-pointer selection:bg-none font-serif-film"
            onClick={handleNext}
        >
            <div className="absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60"></div>

            {/* Side Sprocket Holes (Unified Style) */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`l-${i}`} className="w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"></div>
                ))}
            </div>
            <div className="absolute right-6 md:right-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`r-${i}`} className="w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"></div>
                ))}
            </div>

            <div className="absolute top-12 text-[10px] text-stone-800 tracking-[0.3em] uppercase">
                EPILOGUE
            </div>

            <div
                className="w-full max-w-2xl text-center z-10 transition-opacity duration-800 ease-in-out"
                style={{ opacity: opacity }}
            >
                <div className="text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center">
                    {slide?.content}
                </div>
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-pulse">
                <button className="text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors">
                    {t('endingClickReturn', language)}
                </button>
            </div>
        </div>
    );
};
