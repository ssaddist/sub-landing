import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGES, STRINGS } from './strings.js';

const STORAGE_KEY = 'tally-lang';
const LanguageContext = createContext(null);

function initialLanguage() {
  const isKnown = (code) => LANGUAGES.some((l) => l.code === code);
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isKnown(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isKnown(saved)) return saved;
  } catch { /* storage blocked: fall through */ }
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  return isKnown(browser) ? browser : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    const t = STRINGS[lang];
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDesc);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const value = useMemo(() => {
    const info = LANGUAGES.find((l) => l.code === lang);
    // shotsLang: which language the app screenshots are in.
    return { lang, setLang, t: STRINGS[lang], shotsLang: info.shots };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
