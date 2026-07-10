"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <section id="kontak" className="contact">
            <div className="contact-container glass-panel fade-in">
                <div className="contact-info">
                    <h2>{t('contact.headOffice')}</h2>
                    <p>{t('contact.description')}</p>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>{t('contact.addressLabel')}</h4>
                            <p dangerouslySetInnerHTML={{ __html: t('contact.address') }}></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>{t('contact.emailLabel')}</h4>
                            <p>info@rts.co.id</p>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    <a href="https://www.google.com/maps/search/?api=1&query=Atria+Sudirman+Jakarta" target="_blank" rel="noopener noreferrer" className="map-placeholder" style={{ display: 'block' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoFroZ-H7UH_gylOq1OfT8YZVfh8mgSKAWgxFDgs-r0bM-avgfxwcKVg&s=10" alt="Atria Sudirman Area" />
                        <div className="map-marker">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Atria Sudirman</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}