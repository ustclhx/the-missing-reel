
import { Language } from './utils/i18n';
import * as constants_zh from './constants_zh';
import * as constants_en from './constants_en';

// Function to get constants based on language
export function getConstants(language: Language) {
  return language === Language.English ? constants_en : constants_zh;
}

// Legacy exports for backwards compatibility - these will use current localStorage value
// Note: These are evaluated at import time, so language changes require page reload
function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return Language.Chinese;
  const saved = localStorage.getItem('the-missing-reel-language');
  return (saved as Language) || Language.Chinese;
}

const lang = getCurrentLanguage();
const constants = lang === Language.English ? constants_en : constants_zh;

export const INITIAL_ITEMS = constants.INITIAL_ITEMS;
export const AUDIO_LOGS = constants.AUDIO_LOGS;
export const BLOG_ENTRIES = constants.BLOG_ENTRIES;
export const FILM_ARCHIVE = constants.FILM_ARCHIVE;
export const MUSIC_TRACKS = constants.MUSIC_TRACKS;
