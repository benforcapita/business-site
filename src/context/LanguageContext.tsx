import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Determine initial language from URL query parameter
  useEffect(() => {
    const langParam = searchParams.get('lang');
    
    if (langParam === 'en' || langParam === 'he') {
      // If valid language parameter exists, use it
      i18n.changeLanguage(langParam);
    } else {
      // If no valid language parameter, set the default
      const defaultLang = i18n.language || 'en';
      if (defaultLang !== 'en' && defaultLang !== 'he') {
        i18n.changeLanguage('en');
      }
      
      // Update URL with language parameter if not present
      if (!langParam) {
        searchParams.set('lang', defaultLang);
        setSearchParams(searchParams);
      }
    }
  }, []);

  const changeLanguage = (language: string) => {
    if (language === 'en' || language === 'he') {
      i18n.changeLanguage(language);
      
      // Update only the language query parameter without changing the rest of the URL
      searchParams.set('lang', language);
      setSearchParams(searchParams);
    }
  };

  const isRTL = i18n.language === 'he';

  return (
    <LanguageContext.Provider value={{ currentLanguage: i18n.language || 'en', changeLanguage, isRTL }}>
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
