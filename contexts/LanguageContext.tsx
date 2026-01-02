import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../utils/i18n';
import * as constants_zh from '../constants_zh';
import * as constants_en from '../constants_en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    constants: typeof constants_zh; // Will be either zh or en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'the-missing-reel-language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Initialize from localStorage or default to Chinese
        if (typeof window === 'undefined') return Language.Chinese;
        const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        return (saved as Language) || Language.Chinese;
    });

    // Get constants based on current language
    const constants = language === Language.English ? constants_en : constants_zh;

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        // Reload page to ensure all static imports update with new language
        window.location.reload();
    };

    const toggleLanguage = () => {
        const newLang = language === Language.Chinese ? Language.English : Language.Chinese;
        setLanguage(newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, constants }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
