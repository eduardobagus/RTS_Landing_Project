"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "../translations/translations";

type LanguageContextType = {
    language: string;
    toggleLanguage: () => void;
    t: (key: string) => any;
    mounted: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const storedLang = localStorage.getItem("app_language");
        if (storedLang && (storedLang === "id" || storedLang === "en")) {
            setLanguage(storedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "id" : "en";
        setLanguage(newLang);
        localStorage.setItem("app_language", newLang);
    };

    const t = (key: string) => {
        const keys = key.split(".");
        let result: any = (translations as any)[language];
        for (const k of keys) {
            if (result[k] === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
            result = result[k];
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
