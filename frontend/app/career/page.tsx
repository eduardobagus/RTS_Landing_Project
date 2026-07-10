// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/context/LanguageContext";
import "./career.css";

export default function CareerPage() {
    useScrollAnimation();
    const { t } = useLanguage();


    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDepartment, setSelectedDepartment] = useState("");

    // Modal State
    const [selectedJob, setSelectedJob] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    
    // Form State
    const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', cvUrl: '' });
    const [applyStatus, setApplyStatus] = useState({ status: 'idle', message: '' }); // idle | loading | success | error

    const handleApplySubmit = (e) => {
        e.preventDefault();
        setApplyStatus({ status: 'loading', message: '' });
        
        // Simulate network request
        setTimeout(() => {
            setApplyStatus({ status: 'success', message: 'Lamaran Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.' });
            setApplyForm({ name: '', email: '', phone: '', cvUrl: '' });
        }, 1500);
    };

    const closeModals = () => {
        setIsDetailModalOpen(false);
        setIsApplyModalOpen(false);
        setApplyStatus({ status: 'idle', message: '' });
    };


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
                setJobs([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);


    const filteredJobs = selectedDepartment
        ? jobs.filter(job => job.department.toLowerCase() === selectedDepartment.toLowerCase())
        : jobs;

    return (
        <main style={{ paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>

            <div className="blob blob-1" style={{ top: '10%', left: '-5%' }}></div>
            <div className="blob blob-2" style={{ top: '40%', right: '-10%' }}></div>
            <div className="blob blob-1" style={{ top: '70%', left: '20%', opacity: 0.5 }}></div>

            <Navbar />


            <section style={{ padding: '8rem 5% 4rem', textAlign: 'center' }}>
                <div className="section-title fade-in" style={{ marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>{t('careerPage.heroTitle')} <span className="highlight">{t('careerPage.heroTitleHighlight')}</span></h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.3rem' }}>
                        {t('careerPage.heroSubtitle')}
                    </p>
                </div>
            </section>


            <section style={{ padding: '4rem 5%' }}>
                <div className="activity-container glass-panel fade-in-up">
                    <div className="activity-banner">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Innovation at RTS"
                        />
                    </div>
                    <div className="activity-content">
                        <h3>{t('careerPage.innovationTitle')} <span className="highlight">{t('careerPage.innovationHighlight')}</span></h3>
                        <p>{t('careerPage.innovationP1')}</p>
                        <p style={{ marginBottom: 0 }}>{t('careerPage.innovationP2')}</p>
                    </div>
                </div>
            </section>


            <section style={{ padding: '6rem 5%' }}>
                <div className="section-title fade-in">
                    <h2>{t('careerPage.benefitsTitle')} <span className="highlight">{t('careerPage.benefitsHighlight')}</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {t('careerPage.benefitsSubtitle')}
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
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{t('careerPage.eLearning')}</h3>
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
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{t('careerPage.flexibleHours')}</h3>
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
                            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{t('careerPage.continuousDev')}</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{ padding: '2rem 5% 6rem' }}>
                <div className="career-container glass-panel fade-in-up" style={{ flexDirection: 'row-reverse' }}>
                    <div className="career-banner" style={{ borderRight: 'none', borderLeft: '1px solid var(--glass-border)' }}>
                        <img
                            src="https://res.cloudinary.com/ddczilnyz/image/upload/v1718772654/Career_5d4b49ac87.png"
                            alt="Join RTS"
                        />
                    </div>
                    <div className="career-content">
                        <h3>{t('careerPage.joinTitle')} <span className="highlight">{t('careerPage.joinHighlight')}</span></h3>
                        <p>{t('careerPage.joinP1')}</p>
                        <p style={{ marginBottom: '2rem' }}>{t('careerPage.joinP2')}</p>
                        <a href="#jobs" className="btn btn-primary">{t('careerPage.discoverFuture')}</a>
                    </div>
                </div>
            </section>


            <section id="jobs" style={{ padding: '6rem 5% 8rem' }}>
                <div className="section-title fade-in">
                    <h2>{t('careerPage.exploreTitle')} <span className="highlight">{t('careerPage.exploreHighlight')}</span></h2>
                    <p>{t('careerPage.exploreSubtitle')}</p>
                </div>

                <div className="glass-panel fade-in-up" style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t('careerPage.currentOpenings')}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{t('careerPage.welcomeGateway')}</p>
                        </div>

                        <div className="career-filter">
                            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t('careerPage.filterLabel')}</label>
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
                                    <option value="" style={{ background: 'var(--bg-color)' }}>{t('careerPage.allDepartments')}</option>
                                    <option value="finance" style={{ background: 'var(--bg-color)' }}>{t('careerPage.finance')}</option>
                                    <option value="strategy" style={{ background: 'var(--bg-color)' }}>{t('careerPage.strategy')}</option>
                                    <option value="engineering" style={{ background: 'var(--bg-color)' }}>{t('careerPage.engineering')}</option>
                                    <option value="marketing" style={{ background: 'var(--bg-color)' }}>{t('careerPage.marketing')}</option>
                                </select>
                                <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-primary)', pointerEvents: 'none' }}></i>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive-wrapper" style={{ borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                        <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ background: 'rgba(56, 182, 255, 0.1)', borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t('careerPage.jobTitle')}</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t('careerPage.department')}</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t('careerPage.employmentType')}</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t('careerPage.postedOn')}</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold', width: '250px' }}>{t('careerPage.action')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                            {t('careerPage.loadingJobs')}
                                        </td>
                                    </tr>
                                ) : filteredJobs.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                            {t('careerPage.noJobs')}
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
                                                    <button 
                                                        onClick={() => { setSelectedJob(job); setIsApplyModalOpen(true); }}
                                                        className="btn btn-primary" 
                                                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
                                                    >
                                                        {t('careerPage.apply')}
                                                    </button>
                                                    <button 
                                                        onClick={() => { setSelectedJob(job); setIsDetailModalOpen(true); }}
                                                        className="btn btn-secondary" 
                                                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
                                                    >
                                                        {t('careerPage.detail')}
                                                    </button>
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

            {/* DETAIL MODAL */}
            {isDetailModalOpen && selectedJob && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
                    <div className="glass-panel" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: "16px", width: "100%", maxWidth: "600px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", position: "relative" }}>
                        <button onClick={closeModals} style={{ position: "absolute", top: "1rem", right: "1.5rem", background: "none", border: "none", color: "var(--text-secondary)", fontSize: "1.5rem", cursor: "pointer" }}>&times;</button>
                        
                        <div style={{ marginBottom: "2rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "1.5rem" }}>
                            <h2 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{selectedJob.job_title}</h2>
                            <div style={{ display: "flex", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                                <span><i className="fas fa-building" style={{ color: "var(--accent-primary)", marginRight: "0.5rem" }}></i> {selectedJob.department}</span>
                                <span><i className="fas fa-briefcase" style={{ color: "var(--accent-primary)", marginRight: "0.5rem" }}></i> {selectedJob.employment_type}</span>
                                <span><i className="fas fa-calendar-alt" style={{ color: "var(--accent-primary)", marginRight: "0.5rem" }}></i> {new Date(selectedJob.posted_on).toLocaleDateString('id-ID')}</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: "2.5rem", color: "var(--text-secondary)", lineHeight: "1.6", maxHeight: "50vh", overflowY: "auto", paddingRight: "0.5rem" }}>
                            <h4 style={{ color: "var(--text-primary)", marginBottom: "0.8rem", fontSize: "1.1rem" }}>Deskripsi Pekerjaan</h4>
                            {selectedJob.description ? (
                                <p style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>{selectedJob.description}</p>
                            ) : (
                                <p style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--text-secondary)" }}>Deskripsi belum tersedia.</p>
                            )}
                            
                            <h4 style={{ color: "var(--text-primary)", marginBottom: "0.8rem", fontSize: "1.1rem", marginTop: "1.5rem" }}>Persyaratan Kualifikasi</h4>
                            {selectedJob.requirements ? (
                                <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                                    {selectedJob.requirements.split('\n').filter(r => r.trim()).map((req, i) => (
                                        <li key={i} style={{ marginBottom: "0.4rem" }}>{req.replace(/^[-•]\s*/, '')}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>Persyaratan belum tersedia.</p>
                            )}
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                            <button onClick={closeModals} className="btn btn-secondary">Tutup</button>
                            <button 
                                onClick={() => { setIsDetailModalOpen(false); setIsApplyModalOpen(true); }} 
                                className="btn btn-primary"
                            >
                                Lamar Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* APPLY MODAL */}
            {isApplyModalOpen && selectedJob && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
                    <div className="glass-panel" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", borderRadius: "16px", width: "100%", maxWidth: "500px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", position: "relative" }}>
                        <button onClick={closeModals} style={{ position: "absolute", top: "1rem", right: "1.5rem", background: "none", border: "none", color: "var(--text-secondary)", fontSize: "1.5rem", cursor: "pointer" }}>&times;</button>
                        
                        <div style={{ marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Lamar Posisi</h2>
                            <p style={{ color: "var(--accent-primary)", fontWeight: "600" }}>{selectedJob.job_title} - {selectedJob.department}</p>
                        </div>

                        {applyStatus.status === 'success' ? (
                            <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                <div style={{ width: "60px", height: "60px", background: "rgba(34, 197, 94, 0.2)", color: "#22c55e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1.5rem" }}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>Berhasil!</h3>
                                <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>{applyStatus.message}</p>
                                <button onClick={closeModals} className="btn btn-primary" style={{ width: "100%" }}>Selesai</button>
                            </div>
                        ) : (
                            <form onSubmit={handleApplySubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Nama Lengkap *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        value={applyForm.name}
                                        onChange={(e) => setApplyForm({...applyForm, name: e.target.value})}
                                        style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(0,0,0,0.3)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Email *</label>
                                    <input 
                                        type="email" 
                                        required 
                                        value={applyForm.email}
                                        onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                                        style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(0,0,0,0.3)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Nomor WhatsApp *</label>
                                    <input 
                                        type="tel" 
                                        required 
                                        value={applyForm.phone}
                                        onChange={(e) => setApplyForm({...applyForm, phone: e.target.value})}
                                        style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(0,0,0,0.3)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Tautan Portofolio / CV / LinkedIn *</label>
                                    <input 
                                        type="url" 
                                        required 
                                        value={applyForm.cvUrl}
                                        onChange={(e) => setApplyForm({...applyForm, cvUrl: e.target.value})}
                                        placeholder="https://"
                                        style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(0,0,0,0.3)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }}
                                    />
                                </div>

                                <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                                    <button type="button" onClick={closeModals} className="btn btn-secondary" style={{ flex: 1 }}>Batal</button>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }} disabled={applyStatus.status === 'loading'}>
                                        {applyStatus.status === 'loading' ? <i className="fas fa-circle-notch fa-spin"></i> : "Kirim Lamaran"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}