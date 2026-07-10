"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <img src="/rts_logo_white.png" alt="RTS Logo" className="footer-logo" />
                    <p>{t('footer.brandDescription')}</p>
                </div>
                <div className="footer-links">
                    <h4>{t('footer.quickLinks')}</h4>
                    <ul>
                        <li><a href="#beranda">{t('footer.home')}</a></li>
                        <li><a href="#tentang">{t('footer.aboutUs')}</a></li>
                        <li><a href="#aktivitas">{t('footer.activities')}</a></li>
                        <li><a href="#karir">{t('footer.careers')}</a></li>
                        <li><a href="#kontak">{t('footer.contactUs')}</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>{t('footer.followUs')}</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/rajawali-telekomunikasi-selular/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/rtsconnect?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
}