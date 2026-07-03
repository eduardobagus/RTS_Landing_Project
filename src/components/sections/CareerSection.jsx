import Link from "next/link";

export default function CareerSection() {
    return (
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
                    <Link href="/career" className="btn btn-secondary">View Open Positions</Link>
                </div>
            </div>
        </section>
    );
}
