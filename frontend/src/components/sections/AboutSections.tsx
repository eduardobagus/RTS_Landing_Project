export default function AboutSection() {
    return (
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
    );
}