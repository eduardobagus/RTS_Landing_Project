"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MilestoneSection() {
    const { t } = useLanguage();
    return (
        <section id="milestone" className="milestone" style={{ padding: '4rem 10%', position: 'relative' }}>
            <div className="section-title fade-in">
                <h2>{t('milestone.title')} <span className="highlight">{t('milestone.titleHighlight')}</span></h2>
            </div>
            <div className="milestone-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
                <div className="milestone-item glass-panel fade-in-up" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-12px', top: '2.5rem', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', border: '4px solid var(--bg-color)' }}></div>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{t('milestone.year2025')}</h3>
                    <p style={{ fontSize: '1.1rem' }}>{t('milestone.desc2025')}</p>
                </div>
                <div className="milestone-item glass-panel fade-in-up" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-12px', top: '2.5rem', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', border: '4px solid var(--bg-color)' }}></div>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{t('milestone.year2024')}</h3>
                    <p style={{ fontSize: '1.1rem' }}>{t('milestone.desc2024')}</p>
                </div>
                <div className="milestone-item glass-panel fade-in-up" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-12px', top: '2.5rem', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', border: '4px solid var(--bg-color)' }}></div>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{t('milestone.year2023')}</h3>
                    <p style={{ fontSize: '1.1rem' }}>{t('milestone.desc2023')}</p>
                </div>
            </div>
        </section>
    );
}
