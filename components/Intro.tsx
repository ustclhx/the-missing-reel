
import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/i18n';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isTransitioning = useRef(false);
  const { language } = useLanguage();

  const SLIDES = [
    {
      content: (
        <>
          <p>{t('introSlide1Line1', language)}</p>
          <p className="mt-8">{t('introSlide1Line2', language)}</p>
        </>
      )
    },
    {
      content: (
        <>
          <p>{t('introSlide2Line1', language)}</p>
          <p className="mt-8">{t('introSlide2Line2', language)}</p>
          <p className="mt-8">{t('introSlide2Line3', language)}</p>
        </>
      )
    },
    {
      content: (
        <>
          <p className="text-stone-400 text-base mb-8 tracking-widest uppercase">{t('introSlide3Header', language)}</p>
          <ul className="space-y-4 text-stone-300 text-lg text-left inline-block list-none border-l-2 border-stone-800 pl-8 font-mono-film">
            <li>{t('introSlide3Item1', language)}</li>
            <li>{t('introSlide3Item2', language)}</li>
            <li>{t('introSlide3Item3', language)}</li>
          </ul>
        </>
      )
    },
    {
      content: (
        <>
          <p className="text-xl text-stone-200 mb-8 font-bold">{t('introSlide4Line1', language)}</p>
          <p className="text-base text-stone-400 leading-loose">
            {t('introSlide4Line2', language)}
          </p>
          <p className="mt-4 text-base text-stone-400 leading-loose">
            {t('introSlide4Line3', language)}
          </p>
          <p className="mt-4 text-base text-stone-400 leading-loose">
            {t('introSlide4Line4', language)}
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <p className="text-lg text-stone-300 leading-loose mb-8">
            {t('introSlide5Line1', language)}
          </p>
          <div className="w-16 h-[1px] bg-stone-700 mx-auto my-8"></div>
          <p className="text-xl text-stone-200 font-bold leading-relaxed">
            {t('introSlide5Line2', language)}
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
      if (currentSlide < SLIDES.length - 1) {
        setCurrentSlide(prev => prev + 1);
        setOpacity(1);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 500);
      } else {
        onComplete();
      }
    }, 500);
  };

  const slide = SLIDES[currentSlide];

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

      <div className="absolute top-12 text-[10px] text-stone-800 tracking-[0.3em]">
        SCENE {currentSlide + 1} / {SLIDES.length}
      </div>

      <div
        className="w-full max-w-2xl text-center z-10 transition-opacity duration-500 ease-in-out"
        style={{ opacity: opacity }}
      >
        <div className="text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center">
          {slide?.content}
        </div>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-pulse">
        <button className="text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors">
          {currentSlide === SLIDES.length - 1 ? t('introClickStart', language) : t('introClickContinue', language)}
        </button>
      </div>

      <div className="absolute bottom-6 right-8 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="text-stone-700 hover:text-stone-500 text-[10px] tracking-widest uppercase border border-stone-800/50 px-2 py-1 rounded-sm"
        >
          {t('introSkip', language)}
        </button>
      </div>
    </div>
  );
};
