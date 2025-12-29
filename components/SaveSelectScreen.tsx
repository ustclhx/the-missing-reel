import React, { useState, useEffect } from 'react';
import { SaveManager } from '../utils/SaveManager';

interface SaveSelectScreenProps {
    onNewGame: () => void;
    onContinue: () => void;
}

export const SaveSelectScreen: React.FC<SaveSelectScreenProps> = ({ onNewGame, onContinue }) => {
    const [isFading, setIsFading] = useState(false);
    const [hasSave, setHasSave] = useState(false);

    // Check for save data on mount
    useEffect(() => {
        setHasSave(SaveManager.hasSaveData());
    }, []);

    const handleNewGame = () => {
        SaveManager.clearSave();
        console.log('[SaveSelectScreen] Starting new game, save cleared');
        setIsFading(true);
        setTimeout(onNewGame, 1000);
    };

    const handleContinue = () => {
        console.log('[SaveSelectScreen] Continuing game');
        setIsFading(true);
        setTimeout(onContinue, 1000);
    };

    return (
        <div
            className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'} z-50`}
        >
            <div className="flex flex-col items-center gap-6">
                {/* Title hint */}
                <div className="text-[#8c8273] font-mono text-xs tracking-[0.3em] uppercase opacity-60 mb-4">
                    Select Option
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleNewGame}
                        className="px-12 py-4 bg-[#1a1816] border border-[#3d342b] text-[#d6cbb8] font-mono text-sm tracking-widest uppercase
                                 hover:bg-[#2a2624] hover:border-[#a89078] hover:text-[#ffecd1] 
                                 transition-all duration-300 cursor-pointer min-w-[200px]"
                    >
                        新游戏
                    </button>

                    {hasSave && (
                        <button
                            onClick={handleContinue}
                            className="px-12 py-4 bg-transparent border border-[#3d342b] text-[#8c8273] font-mono text-sm tracking-widest uppercase
                                     hover:bg-[#1a1816] hover:border-[#786650] hover:text-[#d6cbb8]
                                     transition-all duration-300 cursor-pointer min-w-[200px]"
                        >
                            继续游戏
                        </button>
                    )}
                </div>

                {/* Hint text */}
                {!hasSave && (
                    <div className="text-[#4a4036] font-mono text-[10px] tracking-wider opacity-40 mt-4">
                        No save data found
                    </div>
                )}
            </div>
        </div>
    );
};
