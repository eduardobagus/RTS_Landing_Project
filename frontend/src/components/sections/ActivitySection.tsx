"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ActivitySection() {
    const { t } = useLanguage();
    return (
        <section id="aktivitas" className="activity">
            <div className="section-title fade-in">
                <h2><span className="highlight">{t('activity.title')}</span> {t('activity.titleHighlight')}</h2>
                <p>{t('activity.subtitle')}</p>
            </div>
            <div className="activity-container glass-panel fade-in-up">
                <div className="activity-content">
                    <h3>{t('activity.heading')}</h3>
                    <p>{t('activity.description')}</p>
                    <Link href="/gallery" className="btn btn-secondary">{t('activity.exploreGallery')}</Link>
                </div>
                <div className="activity-banner">
                    <img src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772665/Activity_a2cff4effb.png" alt="Aktivitas PT RTS" />
                </div>
            </div>
        </section>
    );
}