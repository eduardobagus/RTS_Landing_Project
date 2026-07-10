"use client";
import NewsWidget from "@/components/widgets/NewsWidget";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();
    return (
        <header id="beranda" className="hero">
            <div className="hero-content">
                <h1 className="fade-in-up">{t('hero.heading')} <span className="highlight">{t('hero.headingHighlight')}</span></h1>
                <p className="fade-in-up delay-1">{t('hero.description')}</p>
                <div className="hero-buttons fade-in-up delay-2">
                    <a href="#aktivitas" className="btn btn-primary">{t('hero.exploreSolutions')}</a>
                    <a href="#kontak" className="btn btn-secondary">{t('hero.contactUs')}</a>
                </div>
            </div>

            <div className="hero-image fade-in-up delay-3">
                <NewsWidget />
            </div>
        </header>
    );
}