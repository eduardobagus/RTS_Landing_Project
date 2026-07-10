"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnershipSection() {
    const { t } = useLanguage();

    const telecomList = t('partnership.telecomList') || [];
    const fintechList = t('partnership.fintechList') || [];
    const bankList = t('partnership.bankList') || [];
    const ecommerceList = t('partnership.ecommerceList') || [];

    return (
        <section id="partnership" className="partnership" style={{ padding: '4rem 10%', backgroundColor: 'var(--bg-color)' }}>
            <div className="section-title fade-in">
                <h2>{t('partnership.title')} <span className="highlight">{t('partnership.titleHighlight')}</span></h2>
            </div>
            
            <div className="partnership-container fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                
                <div className="partner-category glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <i className="fas fa-signal" style={{ marginRight: '0.5rem' }}></i> 
                        {t('partnership.telecom')}
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {Array.isArray(telecomList) ? telecomList.map((item, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>{item}</li>
                        )) : null}
                    </ul>
                </div>

                <div className="partner-category glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ color: '#4ade80', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <i className="fas fa-wallet" style={{ marginRight: '0.5rem' }}></i> 
                        {t('partnership.fintech')}
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {Array.isArray(fintechList) ? fintechList.map((item, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>{item}</li>
                        )) : null}
                    </ul>
                </div>

                <div className="partner-category glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <i className="fas fa-university" style={{ marginRight: '0.5rem' }}></i> 
                        {t('partnership.bank')}
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {Array.isArray(bankList) ? bankList.map((item, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>{item}</li>
                        )) : null}
                    </ul>
                </div>

                <div className="partner-category glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ color: '#ec4899', marginBottom: '1.5rem', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '0.5rem' }}></i> 
                        {t('partnership.ecommerce')}
                    </h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {Array.isArray(ecommerceList) ? ecommerceList.map((item, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>{item}</li>
                        )) : null}
                    </ul>
                </div>

            </div>
        </section>
    );
}
