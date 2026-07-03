import Link from "next/link";

export default function ActivitySection() {
    return (
        <section id="aktivitas" className="activity">
            <div className="section-title fade-in">
                <h2><span className="highlight">Our</span> Activities</h2>
                <p>Steps and real contributions for the nation</p>
            </div>
            <div className="activity-container glass-panel fade-in-up">
                <div className="activity-content">
                    <h3>Sinergy and Innovation in every Step</h3>
                    <p>We are not only building technology infrastructure, but also actively contributing to activities that empower Indonesia's digital ecosystem. Through various programs and initiatives, we promote collaboration, competency development, and sustainable solutions.</p>
                    <Link href="/gallery" className="btn btn-secondary">Explore Gallery</Link>
                </div>
                <div className="activity-banner">
                    <img src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772665/Activity_a2cff4effb.png" alt="Aktivitas PT RTS" />
                </div>
            </div>
        </section>
    );
}