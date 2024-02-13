import React, { createContext, ReactNode, useState } from "react";
import en from "../translation/en/en";
import pt from "../translation/pt/pt";

type TextsValue = string | object | [];
interface LanguageContextProps {
  language: string;
  toggleLanguage: (language: string) => void;
  texts: Record<string, TextsValue>;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const texts = language === "en" ? en : pt;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
