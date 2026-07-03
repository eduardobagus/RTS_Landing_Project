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
            <div className="values-container" style={{ marginTop: '4rem' }}>
                <div className="section-title fade-in">
                    <h2>Our <span className="highlight">Values</span></h2>
                </div>
                <div className="values-grid">
                    <div className="value-card fade-in">
                        <div className="value-text">
                            <h4>Bold</h4>
                            <p>Embrace courage and innovation to lead the way and achieve extraordinary results</p>
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
                            <h4>Integrity</h4>
                            <p>Uphold honesty, transparency, and ethical practices in every decision and action</p>
                        </div>
                    </div>
                    <div className="value-card fade-in">
                        <div className="value-text">
                            <h4>Supportive</h4>
                            <p>Foster a collaborative and empathetic environment where everyone can thrive.</p>
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
                            <h4>Adaptive</h4>
                            <p>Embrace change and continuously evolve to stay relevant in a dynamic world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
