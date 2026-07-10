// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
    const { t } = useLanguage();
    const navRef = useRef(null);
    const menuToggleRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const animatedEls = document.querySelectorAll(
            ".fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .hover-up"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        animatedEls.forEach((el) => observer.observe(el));

        const handleScroll = () => {
            if (navRef.current) {
                navRef.current.classList.toggle("scrolled", window.scrollY > 50);
            }
        };
        window.addEventListener("scroll", handleScroll);

        const toggle = menuToggleRef.current;
        const navLinks = navLinksRef.current;
        const handleToggle = () => navLinks?.classList.toggle("active");
        const handleLinkClick = () => navLinks?.classList.remove("active");

        toggle?.addEventListener("click", handleToggle);
        navLinks?.querySelectorAll("a").forEach((a) =>
            a.addEventListener("click", handleLinkClick)
        );

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
            toggle?.removeEventListener("click", handleToggle);
        };
    }, []);

    return (
        <main>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <nav className="navbar" ref={navRef}>
                <div className="logo">
                    <Link href="/">
                        <img src="/rts_logo.png" alt="RTS Logo" className="logo-img" />
                    </Link>
                </div>
                <ul className="nav-links" ref={navLinksRef}>
                    <li><Link href="/#beranda">{t('navbar.home')}</Link></li>
                    <li><Link href="/#tentang">{t('navbar.about')}</Link></li>

                    <li><Link href="/#aktivitas">{t('navbar.activities')}</Link></li>
                    <li><Link href="/#karir">{t('navbar.careers')}</Link></li>
                    <li><Link href="/#kontak">{t('navbar.contact')}</Link></li>
                </ul>
                <div className="menu-toggle" ref={menuToggleRef}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>

            <div className="gallery-header" style={{ paddingTop: '120px', paddingBottom: '40px', textAlign: 'center' }}>
                <div className="fade-in-up" style={{ backgroundColor: '#ffffff', display: 'inline-block', padding: '20px 40px', borderRadius: '15px', marginBottom: '30px' }}>
                    <img src="/bright_logo.png" alt="Bright Payment Point" style={{ maxWidth: '300px', height: 'auto' }} />
                </div>
                
                <div className="gallery-text-container glass-panel fade-in-up delay-1" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: t('gallery.descP1') }}></p>
                    <p style={{ marginBottom: '20px' }}>{t('gallery.descP2')}</p>
                    <p>{t('gallery.descP3')}</p>
                </div>
            </div>

            <section className="gallery-content" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px' }}>

                <div className="about-grid" style={{ marginBottom: '60px', alignItems: 'center' }}>
                    <div className="about-image slide-in-left" style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#a3b12a', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', height: '100%', minHeight: '250px' }}>
                        <img src="/bright_atm.png" alt="Bright ATM" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="about-text slide-in-right glass-panel">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#60a5fa', borderBottom: '3px solid #1e3a8a', paddingBottom: '10px', display: 'inline-block' }}>{t('gallery.atmTitle')}</h3>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#93c5fd' }}>{t('gallery.atmSubtitle')}</p>
                        <p>{t('gallery.atmDesc')}</p>
                    </div>
                </div>


                <div className="about-grid" style={{ alignItems: 'center' }}>
                    <div className="about-image slide-in-left" style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', height: '100%', minHeight: '250px' }}>
                        <img src="/bright_edc.png" alt="Bright EDC" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', transform: 'scale(1.1) rotate(-5deg)' }} />
                    </div>
                    <div className="about-text slide-in-right glass-panel">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#60a5fa', borderBottom: '3px solid #1e3a8a', paddingBottom: '10px', display: 'inline-block' }}>{t('gallery.edcTitle')}</h3>
                        <p style={{ marginBottom: '20px' }}>{t('gallery.edcDesc')}</p>
                        <ul className="features-list" style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>{t('gallery.edcFeature1')}</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>{t('gallery.edcFeature2')}</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>{t('gallery.edcFeature3')}</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>{t('gallery.edcFeature4')}</span></li>
                        </ul>
                        <p>{t('gallery.edcFooter')}</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/rts_logo.png" alt="RTS Logo" className="footer-logo" />
                        <p>{t('footer.brandDescription')}</p>
                    </div>
                    <div className="footer-links">
                        <h4>{t('footer.quickLinks')}</h4>
                        <ul>
                            <li><Link href="/#beranda">{t('footer.home')}</Link></li>
                            <li><Link href="/#tentang">{t('footer.aboutUs')}</Link></li>

                            <li><Link href="/#aktivitas">{t('footer.activities')}</Link></li>
                            <li><Link href="/#karir">{t('footer.careers')}</Link></li>
                            <li><Link href="/#kontak">{t('footer.contactUs')}</Link></li>
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
        </main>
    );
}
