
import React, { useState, useRef } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const SLIDES = [
  {
    content: (
      <>
        <p>“苹果”是我在摄影社最好的朋友。</p>
        <p className="mt-8">到今天，他已经不告而别一周了。</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>这几年，苹果总是昼伏夜出，行踪神秘。</p>
        <p className="mt-8">如今玩失踪，女友再也受不了，决定同他分手。</p>
        <p className="mt-8">离开前，她将苹果寄放的背包交给了我。</p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-stone-400 text-base mb-8 tracking-widest uppercase">我打开背包，里面躺着：</p>
        <ul className="space-y-4 text-stone-300 text-lg text-left inline-block list-none border-l-2 border-stone-800 pl-8 font-mono-film">
          <li>📹 一台老式 8mm 摄影机</li>
          <li>🎞️ 数不清的 8mm 胶卷，有些做了标记，有些是新的</li>
          <li>📼 一支小型录音机</li>
        </ul>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-xl text-stone-200 mb-8 font-bold">苹果有一个秘密，只有我知道。</p>
        <p className="text-base text-stone-400 leading-loose">
          这些年，他其实一直在酒吧兼职打工。
        </p>
        <p className="mt-4 text-base text-stone-400 leading-loose">
          他干得很有热情，在个人博客上写学习日记，
        </p>
        <p className="mt-4 text-base text-stone-400 leading-loose">
          但却从未把这件事告诉过生活中的其他朋友。
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-lg text-stone-300 leading-loose mb-8">
          所以自始至终，我也没能探明那家酒吧究竟在哪。
        </p>
        <div className="w-16 h-[1px] bg-stone-700 mx-auto my-8"></div>
        <p className="text-xl text-stone-200 font-bold leading-relaxed">
          如今，胶卷、录音机和博客，<br />就成了找到苹果的唯一线索。
        </p>
      </>
    )
  }
];

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isTransitioning = useRef(false);

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
          {currentSlide === SLIDES.length - 1 ? "[ 点击开始调查 ]" : "[ 点击继续 ]"}
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
          SKIP
        </button>
      </div>
    </div>
  );
};
