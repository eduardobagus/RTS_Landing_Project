export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <img src="/rts_logo.png" alt="RTS Logo" className="footer-logo" />
                    <p>RTS specializes in digital payments, offering a wide range of telecommunication and information technology products to cater to your customers demands</p>
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
    );
}