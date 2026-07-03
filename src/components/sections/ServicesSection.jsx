export default function ServicesSection() {
    return (
        <section id="layanan" className="services">
            <div className="section-title fade-in">
                <h2>Pillar <span className="highlight">Our Business</span></h2>
                <p>Comprehensive solutions for the needs of the digital era.</p>
            </div>
            <div className="services-container">
                <div className="service-card glass-card hover-up">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_atm.png" alt="Bright ATM" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Cash Recycle Machine</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>ATM/CRM Bright: Kartu Debit, Transaksi Lebih Mudah! Mesin ATM yang menerima kartu debit dari semua bank dengan jejaring bright yang praktis.</p>
                </div>

                <div className="service-card glass-card hover-up delay-1">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_edc.png" alt="Bright EDC" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>EDC Bright</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Solusi Pembayaran Canggih! Menerima pembayaran dari berbagai bank, bisa offline & online, dengan keamanan terjamin untuk efisiensi bisnis Anda.</p>
                </div>

                <div className="service-card glass-card hover-up delay-2">
                    <div style={{ height: '120px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src="/bright_ppob.png" alt="Bright PPOB" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Payment Point Online Bank</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Biller PPOB: Akses Mudah, Bayar Cepat! Pembelian pulsa, paket data, top up e-wallet, dan pembayaran tagihan rutin dengan cepat dan aman.</p>
                </div>
            </div>
        </section>
    );
}