"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./career.css";

export default function CareerPage() {
    useScrollAnimation();

    // State untuk menyimpan data, status loading, dan filter departemen
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDepartment, setSelectedDepartment] = useState("");

    // Mengambil data dari API saat halaman pertama kali di-load
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/jobs');
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Gagal mengambil data pekerjaan:", error);
                setJobs([]); // Kosongkan daftar jika error
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Logika untuk memfilter pekerjaan berdasarkan dropdown departemen
    const filteredJobs = selectedDepartment
        ? jobs.filter(job => job.department.toLowerCase() === selectedDepartment.toLowerCase())
        : jobs;

    return (
        <main style={{ paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Blobs */}
            <div className="blob blob-1" style={{ top: '10%', left: '-5%' }}></div>
            <div className="blob blob-2" style={{ top: '40%', right: '-10%' }}></div>
            <div className="blob blob-1" style={{ top: '70%', left: '20%', opacity: 0.5 }}></div>

            <Navbar />

            {/* Hero Section */}
            <section style={{ padding: '8rem 5% 4rem', textAlign: 'center' }}>
                <div className="section-title fade-in" style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Life at <span className="highlight">RTS</span></h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.3rem' }}>
                        Where your passion meets our innovation. Discover your potential in a team that builds the future.
                    </p>
                </div>
            </section>

            {/* Innovation Section */}
            <section style={{ padding: '4rem 5%' }}>
                <div className="activity-container glass-panel fade-in-up">
                    <div className="activity-banner">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Innovation at RTS"
                        />
                    </div>
                    <div className="activity-content">
                        <h3>Where Innovation Meets <span className="highlight">Passion</span></h3>
                        <p>
                            At RTS (Rajawali Telekomunikasi Selular), we're more than just a company; we're a community of forward-thinkers, problem solvers, and innovators who are passionate about technology and its potential to transform industries.
                        </p>
                        <p style={{ marginBottom: 0 }}>
                            Our journey is not just about creating cutting-edge solutions; it's about fostering a culture that empowers our team members to thrive, collaborate, and achieve their full potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section style={{ padding: '6rem 5%' }}>
                <div className="section-title fade-in">
                    <h2>The Competitive <span className="highlight">Benefits</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                        We keep things dynamics and flexible at RTS. We offer the opportunities to grow your career with broad access to learning and development as well as wellbeing.
                    </p>
                </div>

                <div className="news-container fade-in-up" style={{ marginTop: '3rem' }}>
                    <div className="news-card glass-panel" style={{ padding: 0, border: '1px solid var(--glass-border)' }}>
                        <div className="news-thumbnail" style={{ height: '220px' }}>
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Unlimited E-Learning" />
                        </div>
                        <div className="news-body" style={{ alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                            <div className="icon-wrapper" style={{ margin: '-4rem auto 1.5rem', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '2px solid var(--accent-primary)' }}>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Unlimited E-Learning</h3>
                        </div>
                    </div>

                    <div className="news-card glass-panel" style={{ padding: 0, border: '1px solid var(--glass-border)' }}>
                        <div className="news-thumbnail" style={{ height: '220px' }}>
                            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Flexible Office Hours" />
                        </div>
                        <div className="news-body" style={{ alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                            <div className="icon-wrapper" style={{ margin: '-4rem auto 1.5rem', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '2px solid var(--accent-primary)' }}>
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Flexible Office Hours</h3>
                        </div>
                    </div>

                    <div className="news-card glass-panel" style={{ padding: 0, border: '1px solid var(--glass-border)' }}>
                        <div className="news-thumbnail" style={{ height: '220px' }}>
                            <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Continuous Development" />
                        </div>
                        <div className="news-body" style={{ alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                            <div className="icon-wrapper" style={{ margin: '-4rem auto 1.5rem', position: 'relative', zIndex: 10, background: 'var(--bg-color)', border: '2px solid var(--accent-primary)' }}>
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Continuous Development</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section style={{ padding: '2rem 5% 6rem' }}>
                <div className="career-container glass-panel fade-in-up" style={{ flexDirection: 'row-reverse' }}>
                    <div className="career-banner" style={{ borderRight: 'none', borderLeft: '1px solid var(--glass-border)' }}>
                        <img
                            src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772654/Career_5d4b49ac87.png"
                            alt="Join RTS"
                        />
                    </div>
                    <div className="career-content">
                        <h3>Join Us: Be a Part of Something <span className="highlight">Bigger</span></h3>
                        <p>
                            Are you ready to be part of a team that values your unique talents and encourages your personal growth? Join us at RTS and be part of something bigger than yourself.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Explore our current job openings and embark on a journey where your career meets innovation and your passion finds purpose.
                        </p>
                        <a href="#jobs" className="btn btn-primary">Discover Your Future</a>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="jobs" style={{ padding: '6rem 5% 8rem' }}>
                <div className="section-title fade-in">
                    <h2>Explore <span className="highlight">Jobs</span></h2>
                    <p>Your Journey Begins Here</p>
                </div>

                <div className="glass-panel fade-in-up" style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>CURRENT OPENINGS</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Welcome to the gateway of opportunities at RTS.</p>
                        </div>

                        <div className="career-filter">
                            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Filter by Department</label>
                            <div style={{ position: 'relative' }}>
                                <select
                                    className="job-select glass-card"
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    style={{
                                        padding: '0.8rem 2.5rem 0.8rem 1.2rem',
                                        width: '100%',
                                        minWidth: '250px',
                                        outline: 'none',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        appearance: 'none',
                                        cursor: 'pointer',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <option value="" style={{ background: 'var(--bg-color)' }}>All Departments</option>
                                    <option value="finance" style={{ background: 'var(--bg-color)' }}>Finance</option>
                                    <option value="strategy" style={{ background: 'var(--bg-color)' }}>Strategy</option>
                                    <option value="engineering" style={{ background: 'var(--bg-color)' }}>Engineering</option>
                                    <option value="marketing" style={{ background: 'var(--bg-color)' }}>Marketing</option>
                                </select>
                                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-primary)', pointerEvents: 'none' }}></i>
                            </div>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                        <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ background: 'rgba(56, 182, 255, 0.1)', borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Job Title</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Department</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Employment Type</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Posted On</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold', width: '250px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                            Memuat data lowongan...
                                        </td>
                                    </tr>
                                ) : filteredJobs.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                            Tidak ada lowongan yang tersedia untuk departemen ini.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredJobs.map((job) => (
                                        <tr key={job.id} className="job-row" style={{ borderBottom: '1px solid var(--glass-border)', transition: 'background 0.3s' }}>
                                            <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>{job.job_title}</td>
                                            <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>{job.department}</td>
                                            <td style={{ padding: '1.5rem' }}>
                                                <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(56, 182, 255, 0.2)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>
                                                    {job.employment_type}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>
                                                {new Date(job.posted_on).toLocaleDateString('en-GB', {
                                                    day: 'numeric', month: 'long', year: 'numeric'
                                                })}
                                            </td>
                                            <td style={{ padding: '1.5rem' }}>
                                                <div style={{ display: 'flex', gap: '0.8rem' }}>
                                                    <button className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Apply</button>
                                                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Detail</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}