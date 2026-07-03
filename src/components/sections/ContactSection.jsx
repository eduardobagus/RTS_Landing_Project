export default function ContactSection() {
    return (
        <section id="kontak" className="contact">
            <div className="contact-container glass-panel fade-in">
                <div className="contact-info">
                    <h2>Head Office</h2>
                    <p>Visit or contact us to discuss how we can support your digital transformation.</p>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Address</h4>
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