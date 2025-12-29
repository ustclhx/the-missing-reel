import React, { useState } from 'react';

import { getAssetPath } from '../utils/assetPath';

interface TitleScreenProps {
    onStart: () => void;
}

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
            </div>

            {/* Corner Credit */}
            <div className="absolute bottom-8 right-8 text-stone-500 font-mono text-[10px] tracking-widest opacity-60">
                By Hunstler Klub
            </div>
        </div>
    );
};
