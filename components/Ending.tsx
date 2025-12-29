
import React, { useState, useRef } from 'react';

interface EndingProps {
    onComplete: () => void;
}

const SLIDES = [
    {
        content: (
            <>
                <p className="text-xl text-stone-200 leading-loose">亲爱的朋友，感谢你为‘苹果’付出的时光。</p>
                <p className="mt-8 text-stone-300">虽然眼下仍未寻得他的踪迹，但已经大致窥见了事件全貌。</p>
                <div className="w-16 h-[1px] bg-stone-700 mx-auto my-12"></div>
                <p className="text-lg text-stone-400 leading-relaxed italic">
                    我们的故事还未结束，仅是暂告段落。现在，请在博客中搜索 'dram elysium'，<br />
                    这是苹果截至最后一篇未被开启的博客内容，给陌生读者的小小礼物。
                </p>
            </>
        )
    }
];

export const Ending: React.FC<EndingProps> = ({ onComplete }) => {
    const [opacity, setOpacity] = useState(1);
    const isTransitioning = useRef(false);

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
                    [ 点击返回游戏 ]
                </button>
            </div>
        </div>
    );
};
