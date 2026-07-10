"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerSection() {
    const { t } = useLanguage();
    return (
        <section id="karir" className="career">
            <div className="section-title fade-in">
                <h2>{t('career.title')} <span className="highlight">{t('career.titleHighlight')}</span></h2>
                <p>{t('career.subtitle')}</p>
            </div>
            <div className="career-container glass-panel fade-in-up">
                <div className="career-banner">
                    <img src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772654/Career_5d4b49ac87.png" alt="Karir PT RTS" />
                </div>
                <div className="career-content">
                    <h3>{t('career.heading')}</h3>
                    <p>{t('career.description')}</p>
                    <Link href="/career" className="btn btn-secondary">{t('career.viewPositions')}</Link>
                </div>
            </div>
        </section>
    );
}
