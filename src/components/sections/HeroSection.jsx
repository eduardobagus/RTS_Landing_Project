import NewsWidget from "@/components/widgets/NewsWidget";

export default function HeroSection() {
    return (
        <header id="beranda" className="hero">
            <div className="hero-content">
                <h1 className="fade-in-up">Leading Integration for Inclusive <span className="highlight">Innovation</span></h1>
                <p className="fade-in-up delay-1">To provide integrated solutions through exclusive payment partnerships, leveraging full telco infrastructure support, and delivering convergent, independent, and inclusive solutions for a connected world.</p>
                <div className="hero-buttons fade-in-up delay-2">
                    <a href="#layanan" className="btn btn-primary">Explore Solutions</a>
                    <a href="#kontak" className="btn btn-secondary">Contact Us</a>
                </div>
            </div>

            <div className="hero-image fade-in-up delay-3">
                <NewsWidget />
            </div>
        </header>
    );
}