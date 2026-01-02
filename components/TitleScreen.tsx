import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/i18n';
import { getAssetPath } from '../utils/assetPath';

interface TitleScreenProps {
    onStart: () => void;
}

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-4 bg-stone-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-800">
            <button
                onClick={() => setLanguage(Language.Chinese)}
                className={`text-xs font-mono tracking-wider transition-all duration-300 ${language === Language.Chinese
                        ? 'text-stone-100 font-bold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                        : 'text-stone-600 hover:text-stone-400'
                    }`}
            >
                中文
            </button>
            <div className="w-[1px] h-3 bg-stone-700"></div>
            <button
                onClick={() => setLanguage(Language.English)}
                className={`text-xs font-mono tracking-wider transition-all duration-300 ${language === Language.English
                        ? 'text-stone-100 font-bold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                        : 'text-stone-600 hover:text-stone-400'
                    }`}
            >
                ENGLISH
            </button>
        </div>
    );
};

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
    const [isFading, setIsFading] = useState(false);

    const handleClick = () => {
        setIsFading(true);
        setTimeout(onStart, 1000); // Wait for fade out
    };

    return (
        <div
            onClick={handleClick}
            className={`fixed inset-0 bg-black flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'} z-50`}
        >
            {/* Center Title */}
            <div className="flex flex-col items-center gap-6">
                <div
                    className="text-stone-100 font-mono text-sm tracking-[0.5em] uppercase opacity-80 hover:opacity-100 transition-opacity duration-700 blur-[0.5px] animate-pulse"
                    style={{
                        textShadow: '2px 0 rgba(255,0,0,0.5), -2px 0 rgba(0,255,255,0.5), 0 0 4px rgba(255,255,255,0.2)'
                    }}
                >
                    Ghost in the Reel
                </div>
                {/* Logo */}
                <img
                    src={getAssetPath("/hunstler_logo.jpg")}
                    alt="Hunstler Klub Logo"
                    className="w-24 h-auto opacity-80 mix-blend-screen blur-[0.5px] animate-pulse"
                    style={{
                        filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))'
                    }}
                />

                {/* Language Selection */}
                <div
                    className="flex gap-6 mt-8"
                    onClick={(e) => e.stopPropagation()} // Prevent triggering start when clicking language
                >
                    <LanguageToggle />
                </div>

                <div className="text-stone-500 font-mono text-xs tracking-widest mt-4 animate-pulse">
                    [ CLICK TO ENTER ]
                </div>
            </div>

            {/* Corner Credit */}
            <div className="absolute bottom-8 right-8 text-stone-500 font-mono text-[10px] tracking-widest opacity-60">
                By Hunstler Klub
            </div>
        </div>
    );
};
