"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function PillarsSection() {
    const { t } = useLanguage();
    return (
        <section id="pillars" className="pillars" style={{ padding: '4rem 10%', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <div className="section-title fade-in">
                <h2>{t('pillars.title')} <span className="highlight">{t('pillars.titleHighlight')}</span></h2>
            </div>
            
            <div className="pillars-container" style={{ position: 'relative', maxWidth: '1000px', margin: '3rem auto', textAlign: 'center' }}>
                <div className="core-value fade-in" style={{ 
                    display: 'inline-block',
                    padding: '1.5rem 3rem',
                    background: 'var(--accent-primary)',
                    color: 'var(--bg-color)',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    marginBottom: '3rem',
                    boxShadow: '0 0 20px var(--accent-glow)'
                }}>
                    {t('pillars.coreValue')}
                </div>

                <div className="pillars-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid var(--accent-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-sitemap" style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.orgTitle')}</h3>
                        </div>
                        <p>{t('pillars.orgDesc')}</p>
                    </div>

                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid #4ade80' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-chess-knight" style={{ fontSize: '2rem', color: '#4ade80', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.strategyTitle')}</h3>
                        </div>
                        <p>{t('pillars.strategyDesc')}</p>
                    </div>

                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid #f59e0b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-cogs" style={{ fontSize: '2rem', color: '#f59e0b', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.systemTitle')}</h3>
                        </div>
                        <p>{t('pillars.systemDesc')}</p>
                    </div>

                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid #a855f7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-project-diagram" style={{ fontSize: '2rem', color: '#a855f7', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.processTitle')}</h3>
                        </div>
                        <p>{t('pillars.processDesc')}</p>
                    </div>

                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid #ec4899' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-users" style={{ fontSize: '2rem', color: '#ec4899', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.peopleTitle')}</h3>
                        </div>
                        <p>{t('pillars.peopleDesc')}</p>
                    </div>

                    <div className="pillar-card glass-panel fade-in-up" style={{ padding: '2rem', textAlign: 'left', borderTop: '4px solid #3b82f6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <i className="fas fa-user-tie" style={{ fontSize: '2rem', color: '#3b82f6', marginRight: '1rem' }}></i>
                            <h3 style={{ margin: 0 }}>{t('pillars.leadershipTitle')}</h3>
                        </div>
                        <p>{t('pillars.leadershipDesc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
