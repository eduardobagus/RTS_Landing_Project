"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar({ solidBackground = false }: { solidBackground?: boolean }) {
    const navRef = useRef<HTMLElement>(null);
    const menuToggleRef = useRef<HTMLDivElement>(null);
    const navLinksRef = useRef<HTMLUListElement>(null);
    const { t, language, toggleLanguage, mounted } = useLanguage();
    const router = useRouter();
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        if (clickCount >= 5) {
            router.push("/admin/login");
            setClickCount(0);
        }
    }, [clickCount, router]);

    const handleLogoClick = () => {
        setClickCount(prev => prev + 1);
    };

    useEffect(() => {
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
        navLinks?.querySelectorAll("a").forEach((a: any) =>
            a.addEventListener("click", handleLinkClick)
        );

        return () => {
            window.removeEventListener("scroll", handleScroll);
            toggle?.removeEventListener("click", handleToggle);
        };
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                <img src="/rts_logo_white.png" alt="RTS Logo" className="logo-img" />
            </div>
            <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <ul className="nav-links" ref={navLinksRef}>
                    <li><Link href="/#beranda">{t('navbar.home')}</Link></li>
                    <li><Link href="/#tentang">{t('navbar.about')}</Link></li>

                    <li><Link href="/#aktivitas">{t('navbar.activities')}</Link></li>
                    <li><Link href="/#karir">{t('navbar.careers')}</Link></li>
                    <li><Link href="/#kontak">{t('navbar.contact')}</Link></li>
                </ul>

                <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', minWidth: '70px', justifyContent: 'center' }}>
                    {mounted ? (
                        <button
                            onClick={toggleLanguage}
                            className="lang-switch-btn"
                        >
                            <span className={language === 'id' ? 'active' : ''}>ID</span>
                            <span className="divider">|</span>
                            <span className={language === 'en' ? 'active' : ''}>EN</span>
                        </button>
                    ) : (
                        <div style={{ width: '70px' }}></div>
                    )}
                </div>

                <div className="menu-toggle" ref={menuToggleRef}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}