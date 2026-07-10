"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
    const { t } = useLanguage();
    return (
        <section id="layanan" className="services">
            <div className="section-title fade-in">
                <h2>{t('services.title')} <span className="highlight">{t('services.titleHighlight')}</span></h2>
                <p>{t('services.subtitle')}</p>
            </div>
            <div className="services-container">
                <div className="service-card glass-card hover-up">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_atm.png" alt="Bright ATM" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{t('services.atmTitle')}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{t('services.atmDesc')}</p>
                </div>

                <div className="service-card glass-card hover-up delay-1">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_edc.png" alt="Bright EDC" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{t('services.edcTitle')}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{t('services.edcDesc')}</p>
                </div>

                <div className="service-card glass-card hover-up delay-2">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_ppob.png" alt="Bright PPOB" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{t('services.ppobTitle')}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{t('services.ppobDesc')}</p>
                </div>
            </div>
        </section>
    );
}