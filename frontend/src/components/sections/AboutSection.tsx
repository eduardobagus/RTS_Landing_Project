"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
    const { t } = useLanguage();
    return (
        <section id="tentang" className="about">
            <div className="section-title fade-in">
                <h2>{t('about.title')} <span className="highlight">{t('about.titleHighlight')}</span></h2>
                <p>{t('about.subtitle')}</p>
            </div>
            <div className="about-grid">
                <div className="about-image glass-panel slide-in-left">
                    <img src="https://amt-it.com/wp-content/uploads/2020/01/influencive-1024x504-1024x504.jpg" alt="About RTS" />
                    <div className="overlay-text">
                        <h3>{t('about.overlayText')}</h3>
                    </div>
                </div>
                <div className="about-text slide-in-right">
                    <p dangerouslySetInnerHTML={{ __html: t('about.descriptionP1') }}></p>
                    <p>{t('about.descriptionP2')}</p>
                    <ul className="features-list">
                        <li><i className="fas fa-check-circle"></i> {t('about.feature1')}</li>
                        <li><i className="fas fa-check-circle"></i> {t('about.feature2')}</li>
                        <li><i className="fas fa-check-circle"></i> {t('about.feature3')}</li>
                    </ul>
                </div>
            </div>
            <div className="values-container" style={{ marginTop: '4rem' }}>
                <div className="section-title fade-in">
                    <h2>{t('about.valuesTitle')} <span className="highlight">{t('about.valuesTitleHighlight')}</span></h2>
                </div>
                <div className="values-grid">
                    <div className="value-card fade-in">
                        <div className="value-text">
                            <h4>{t('about.boldTitle')}</h4>
                            <p>{t('about.boldDesc')}</p>
                        </div>
                        <div className="value-image">
                            <img src="/images/value_b.png" alt="Bold" />
                        </div>
                    </div>
                    <div className="value-card fade-in">
                        <div className="value-image">
                            <img src="/images/value_i.png" alt="Integrity" />
                        </div>
                        <div className="value-text">
                            <h4>{t('about.integrityTitle')}</h4>
                            <p>{t('about.integrityDesc')}</p>
                        </div>
                    </div>
                    <div className="value-card fade-in">
                        <div className="value-text">
                            <h4>{t('about.supportiveTitle')}</h4>
                            <p>{t('about.supportiveDesc')}</p>
                        </div>
                        <div className="value-image">
                            <img src="/images/value_s.png" alt="Supportive" />
                        </div>
                    </div>
                    <div className="value-card fade-in">
                        <div className="value-image">
                            <img src="/images/value_a.png" alt="Adaptive" />
                        </div>
                        <div className="value-text">
                            <h4>{t('about.adaptiveTitle')}</h4>
                            <p>{t('about.adaptiveDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
