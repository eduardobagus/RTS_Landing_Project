"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);
  const navLinksRef = useRef(null);
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(null);

  useEffect(() => {
    // Scroll animations via IntersectionObserver
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

    // Fetch latest news from backend
    fetch("http://localhost:5000/api/news/latest")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data berita");
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setNewsLoading(false);
      })
      .catch((err) => {
        setNewsError(err.message);
        setNewsLoading(false);
      });

    // Navbar scroll effect
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle("scrolled", window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Mobile menu toggle
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
          {/* Pastikan file rts_logo.png ada di dalam folder 'public' */}
          <img src="/rts_logo.png" alt="RTS Logo" className="logo-img" />
        </div>
        <ul className="nav-links" ref={navLinksRef}>
          <li><a href="#beranda">Home</a></li>
          <li><a href="#tentang">About</a></li>
          <li><a href="#layanan">Services</a></li>
          <li><a href="#aktivitas">Activities</a></li>
          <li><a href="#karir">Careers</a></li>
          <li><a href="#kontak">Contact</a></li>
        </ul>
        <div className="menu-toggle" ref={menuToggleRef}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      <header id="beranda" className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Leading Integration for Inclusive <span className="highlight">Innovation</span></h1>
          <p className="fade-in-up delay-1">To provide integrated solutions through exclusive payment partnerships, leveraging full telco infrastructure support, and delivering convergent, independent, and inclusive solutions for a connected world.</p>
          <div className="hero-buttons fade-in-up delay-2">
            <a href="#layanan" className="btn btn-primary">Explore Solutions</a>
            <a href="#kontak" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>

        {/* WIDGET BERITA DI KANAN */}
        <div className="hero-image fade-in-up delay-3">
          <div className="glass-card main-card" style={{ textAlign: "left", padding: "1.5rem", width: "100%", maxWidth: "400px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "#60a5fa", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
              <i className="fas fa-newspaper" style={{ marginRight: "8px" }}></i> Berita Terkini
            </h3>

            {newsLoading ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#9ca3af", justifyContent: "center", padding: "2rem 0" }}>
                <i className="fas fa-circle-notch fa-spin"></i>
                <p>Memuat berita...</p>
              </div>
            ) : newsError ? (
              <div style={{ color: "#f87171", textAlign: "center", padding: "2rem 0" }}>
                <i className="fas fa-exclamation-triangle"></i>
                <p style={{ marginTop: "8px" }}>{newsError}</p>
              </div>
            ) : news.length === 0 ? (
              <p style={{ color: "#9ca3af", textAlign: "center", padding: "2rem 0" }}>Belum ada berita terbaru.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {news.map((item, index) => (
                  <div
                    key={item.id}
                    style={{ borderBottom: index === news.length - 1 ? "none" : "1px solid rgba(255,255,255,0.1)", paddingBottom: index === news.length - 1 ? "0" : "1rem" }}
                  >
                    <h4 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.25rem", color: "#ffffff" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#9ca3af", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {item.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section id="tentang" className="about">
        <div className="section-title fade-in">
          <h2>About <span className="highlight">RTS</span></h2>
          <p>Building Indonesia's Digital Ecosystem</p>
        </div>
        <div className="about-grid">
          <div className="about-image glass-panel slide-in-left">
            <img src="https://amt-it.com/wp-content/uploads/2020/01/influencive-1024x504-1024x504.jpg" alt="About RTS" />
            <div className="overlay-text">
              <h3>Sustainable Innovation</h3>
            </div>
          </div>
          <div className="about-text slide-in-right">
            <p><strong>PT Rajawali Telekomunikasi Selular (RTS) </strong> is a reputable national company with a strong track record since its establishment in 2009. With expertise in managing multiple companies across diverse sectors including Mobile Retail, Telecommunication Distribution, Telecommunication Infrastructure, Payment and Biller Purchase, and Digital Payment Ecosystem, RTS offers comprehensive solutions for your business needs.</p>
            <p>As your trusted business partner, RTS specializes in digital payments, offering a wide range of telecommunication and information technology products to cater to your customers' demands. Moreover, we empower our partners by equipping them with strategic plans tailored to their respective sectors, enabling them to thrive in their business endeavors.</p>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Trusted National Company</li>
              <li><i className="fas fa-check-circle"></i> Big Scale Infrastructure</li>
              <li><i className="fas fa-check-circle"></i> Integrated Payment Ecosystem</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="layanan" className="services">
        <div className="section-title fade-in">
          <h2>Pillar <span className="highlight">Our Business</span></h2>
          <p>Comprehensive solutions for the needs of the digital era.</p>
        </div>
        <div className="services-container">
          <div className="service-card glass-card hover-up">
            <div className="icon-wrapper">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Technology</h3>
            <p>Provision of IT solutions, software development, and computing infrastructure to support national and enterprise-level business operations.</p>
          </div>
          <div className="service-card glass-card hover-up delay-1">
            <div className="icon-wrapper">
              <i className="fas fa-tower-cell"></i>
            </div>
            <h3>Telecommunications</h3>
            <p>Wide, reliable, and high-speed telecommunications network infrastructure to ensure connectivity across the entire nation.</p>
          </div>
          <div className="service-card glass-card hover-up delay-2">
            <div className="icon-wrapper">
              <i className="fas fa-wallet"></i>
            </div>
            <h3>Digital Payment</h3>
            <p>Integrated digital transaction ecosystem and payment gateway that makes business activities easier for the community in a secure and efficient manner.</p>
          </div>
        </div>
      </section>

      {/* BERITA BAWAH DIHAPUS - DIGANTIKAN OLEH WIDGET DI HERO SECTION ATAS */}

      <section id="aktivitas" className="activity">
        <div className="section-title fade-in">
          <h2><span className="highlight">Our</span> Activities</h2>
          <p>Steps and real contributions for the nation</p>
        </div>
        <div className="activity-container glass-panel fade-in-up">
          <div className="activity-content">
            <h3>Sinergy and Innovation in every Step</h3>
            <p>We are not only building technology infrastructure, but also actively contributing to activities that empower Indonesia's digital ecosystem. Through various programs and initiatives, we promote collaboration, competency development, and sustainable solutions.</p>
            <a href="#kontak" className="btn btn-secondary">Explore Gallery</a>
          </div>
          <div className="activity-banner">
            <img src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772665/Activity_a2cff4effb.png" alt="Aktivitas PT RTS" />
          </div>
        </div>
      </section>

      <section id="karir" className="career">
        <div className="section-title fade-in">
          <h2>Join with <span className="highlight">Us</span></h2>
          <p>Becomes part of the future innovation</p>
        </div>
        <div className="career-container glass-panel fade-in-up">
          <div className="career-banner">
            <img src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772654/Career_5d4b49ac87.png" alt="Karir PT RTS" />
          </div>
          <div className="career-content">
            <h3>Grow and Develop with RTS</h3>
            <p>We are always looking for the best talents to join our mission of connecting and empowering every corner of the nation. Find career opportunities that match your passion and make a real impact in Indonesia.</p>
            <a href="#kontak" className="btn btn-primary">View Open Positions</a>
          </div>
        </div>
      </section>

      <section id="kontak" className="contact">
        <div className="contact-container glass-panel fade-in">
          <div className="contact-info">
            <h2>Head Office</h2>
            <p>Visit or contact us to discuss how we can support your digital transformation.</p>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Alamat</h4>
                <p>Atria Sudirman<br />Jakarta Pusat, Indonesia</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@rts.co.id</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Telepon</h4>
                <p>+62 21 1234 5678</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoFroZ-H7UH_gylOq1OfT8YZVfh8mgSKAWgxFDgs-r0bM-avgfxwcKVg&s=10" alt="Atria Sudirman Area" />
              <div className="map-marker">
                <i className="fas fa-map-marker-alt"></i>
                <span>Atria Sudirman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/rts_logo.png" alt="RTS Logo" className="footer-logo" />
            <p>PT Rajawali Telekomunikasi Selular. Connecting potential, empowering the nation through cutting-edge technology.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#beranda">Home</a></li>
              <li><a href="#tentang">About Us</a></li>
              <li><a href="#layanan">Services</a></li>
              <li><a href="#aktivitas">Activities</a></li>
              <li><a href="#karir">Careers</a></li>
              <li><a href="#kontak">Contact Us</a></li>
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