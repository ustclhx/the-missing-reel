
import React, { useEffect, useState } from 'react';
import { getAssetPath } from '../utils/assetPath';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/i18n';

interface ThoughtBubbleProps {
    text: string;
    onClose?: () => void;
    isVisible: boolean;
}

export const ThoughtBubble: React.FC<ThoughtBubbleProps> = ({ text, onClose, isVisible }) => {
    const [shouldRender, setShouldRender] = useState(isVisible);
    const { language } = useLanguage();

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500); // Wait for fade out animation
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-10 left-10 z-[100] max-w-sm md:max-w-lg transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            onClick={onClose}
        >
            {/* Bubble Body */}
            <div className="relative bg-stone-900/90 border border-stone-600 px-6 py-10 rounded-xl shadow-2xl backdrop-blur-sm cursor-pointer hover:bg-stone-800/95 transition-colors group">
                {/* Character Label */}
                <div className="absolute -top-4 left-6 bg-stone-800 px-3 py-1 border border-stone-600 rounded text-xs text-stone-400 font-mono tracking-widest uppercase">
                    {t('thoughtBubbleLabel', language)}
                </div>

                {/* Text Content */}
                <p className="text-stone-300 font-serif text-lg md:text-xl leading-relaxed italic">
                    "{text}"
                </p>

                {/* Tail styling (CSS triangle) */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-stone-900 border-r border-b border-stone-600 transform rotate-45"></div>

                {/* Close Hint */}
                <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-stone-500 font-mono">
                    [CLICK TO DISMISS]
                </div>
            </div>
        </div>
    );
};
