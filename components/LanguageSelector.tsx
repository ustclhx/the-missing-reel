import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/i18n';

export const LanguageSelector: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-20 right-6 z-[100] w-10 h-10 
                 bg-stone-900/80 hover:bg-stone-800/90
                 border border-stone-700 hover:border-stone-500
                 text-stone-400 hover:text-stone-200
                 rounded-full
                 transition-all duration-300
                 shadow-lg backdrop-blur-sm
                 flex items-center justify-center
                 text-xs font-mono tracking-wider"
            aria-label="Toggle Language"
            title={`Switch to ${language === Language.Chinese ? 'English' : '中文'}`}
        >
            {language === Language.Chinese ? '中' : 'EN'}
        </button>
    );
};
