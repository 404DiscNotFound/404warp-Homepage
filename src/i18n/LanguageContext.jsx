import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('404warp-lang') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('404warp-lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'de' : 'en'));
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}