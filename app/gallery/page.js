"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Gallery() {
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
                    <li><Link href="/#beranda">Home</Link></li>
                    <li><Link href="/#tentang">About</Link></li>
                    <li><Link href="/#layanan">Services</Link></li>
                    <li><Link href="/#aktivitas">Activities</Link></li>
                    <li><Link href="/#karir">Careers</Link></li>
                    <li><Link href="/#kontak">Contact</Link></li>
                </ul>
                <div className="menu-toggle" ref={menuToggleRef}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>

            <div className="gallery-header" style={{ paddingTop: '120px', paddingBottom: '40px', textAlign: 'center' }}>
                <div className="fade-in-up" style={{ backgroundColor: '#ffffff', display: 'inline-block', padding: '20px 40px', borderRadius: '15px', marginBottom: '30px' }}>
                    <img src="/bright_logo.png" alt="Bright Payment Point" style={{ maxWidth: '300px', height: 'auto' }} />
                </div>
                
                <div className="gallery-text-container glass-panel fade-in-up delay-1" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', padding: '40px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Rajawali Telekomunikasi Selular (RTS) bermitra dengan Pertamina Retail (PTPR) untuk mendukung transformasi digital non fuel retail PTPR. Melalui kemitraan ini, RTS mengembangkan layanan produk ATM/CRM, EDC, dan penjualan Biller PPOB yang inovatif dengan brand market <strong>"Bright Payment Point"</strong>. Produk-produk ini telah tersebar luas di seluruh SPBU COCO & DODO, serta ekosistem bisnis retail Pertamina Retail lainnya, termasuk Bright Store, Bright Cafe dan agen pangkalan LPG.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        RTS adalah perusahaan penyedia solusi digital financial service yang berpengalaman dan terpercaya. RTS memiliki tim yang berpengalaman dan berdedikasi untuk membantu bisnis dalam memilih dan menerapkan solusi digital financial service yang tepat. RTS juga menawarkan layanan pelanggan yang terbaik untuk membantu bisnis mendapatkan hasil maksimal.
                    </p>
                    <p>
                        Kemitraan strategis antara RTS dan PTPR menunjukkan bahwa RTS memiliki solusi digital financial service yang komprehensif dan dapat diandalkan. Melalui kemitraan ini, RTS dapat membantu PTPR untuk mencapai visinya sebagai pemimpin pasar dalam transformasi digital non fuel retail.
                    </p>
                </div>
            </div>

            <section className="gallery-content" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
                {/* ATM Section */}
                <div className="about-grid" style={{ marginBottom: '60px', alignItems: 'center' }}>
                    <div className="about-image slide-in-left" style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#a3b12a', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', height: '100%', minHeight: '350px' }}>
                        <img src="/bright_atm.png" alt="Bright ATM" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                    <div className="about-text slide-in-right glass-panel" style={{ padding: '40px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#60a5fa', borderBottom: '3px solid #1e3a8a', paddingBottom: '10px', display: 'inline-block' }}>Cash Recycle Machine BPP</h3>
                        <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#93c5fd' }}>ATM/CRM Bright: Kartu Debit, Transaksi Lebih Mudah!</p>
                        <p>Nikmati kenyamanan bertransaksi dengan ATM/CRM Bright, mesin ATM yang menerima kartu debit dari semua bank. Konsep multi acquiring dengan jejaring bright membuat transaksi semakin praktis. Sudah hadir di sebagian besar SPBU COCO dan DODO, serta di Bright Store dan Bright Cafe di seluruh Indonesia. Transaksi lebih mudah, di mana pun Anda berada!</p>
                    </div>
                </div>

                {/* EDC Section */}
                <div className="about-grid" style={{ alignItems: 'center' }}>
                    <div className="about-image slide-in-left" style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#e11d48', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', height: '100%', minHeight: '350px' }}>
                        <img src="/bright_edc.png" alt="Bright EDC" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', transform: 'scale(1.1) rotate(-5deg)' }} />
                    </div>
                    <div className="about-text slide-in-right glass-panel" style={{ padding: '40px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#60a5fa', borderBottom: '3px solid #1e3a8a', paddingBottom: '10px', display: 'inline-block' }}>EDC Bright</h3>
                        <p style={{ marginBottom: '20px' }}>EDC Bright Payment Point: Solusi Pembayaran Canggih! Nikmati kemudahan transaksi dengan EDC Bright BPP, menerima pembayaran dari berbagai bank dan jaringan kartu. Keunggulan inklusifnya meliputi:</p>
                        <ul className="features-list" style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>Fleksibilitas menerima transaksi dari berbagai bank dan jaringan kartu</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>Dapat digunakan baik dalam mode offline maupun online</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>Keamanan transaksi terjamin untuk melindungi bisnis Anda</span></li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fas fa-check-circle" style={{ color: '#3b82f6', marginTop: '4px' }}></i> <span>Instalasi dan aktivasi yang mudah, memudahkan penggunaan</span></li>
                        </ul>
                        <p>Sudah tersebar di lebih dari 1.400 lokasi Pertamina Retail (PTPR), termasuk SPBU COCO & DODO serta Brights Store/Cafe. Tingkatkan efisiensi bisnis Anda dengan EDC Bright!</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/rts_logo.png" alt="RTS Logo" className="footer-logo" />
                        <p>RTS specializes in digital payments, offering a wide range of telecommunication and information technology products to cater to your customers demands</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/#beranda">Home</Link></li>
                            <li><Link href="/#tentang">About Us</Link></li>
                            <li><Link href="/#layanan">Services</Link></li>
                            <li><Link href="/#aktivitas">Activities</Link></li>
                            <li><Link href="/#karir">Careers</Link></li>
                            <li><Link href="/#kontak">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/rajawali-telekomunikasi-selular/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/rtsconnect?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 PT Rajawali Telekomunikasi Selular. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}
