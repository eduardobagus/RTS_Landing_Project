// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API = "http://localhost:5000";

export default function AdminDashboard() {
    const [tab, setTab] = useState("news");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // ─── NEWS STATE ───
    const [newsList, setNewsList] = useState([]);
    const [newsForm, setNewsForm] = useState({ title: "", excerpt: "" });
    const [newsLoading, setNewsLoading] = useState(false);
    const [newsStatus, setNewsStatus] = useState(null);

    // ─── JOBS STATE ───
    const [jobsList, setJobsList] = useState([]);
    const [jobsForm, setJobsForm] = useState({ job_title: "", department: "", employment_type: "", description: "", requirements: "" });
    const [jobsLoading, setJobsLoading] = useState(false);
    const [jobsStatus, setJobsStatus] = useState(null);

    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    // ─── DELETE MODAL STATE ───
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, type: "", id: null, title: "" });

    // ─── EDIT MODAL STATE ───
    const [editModal, setEditModal] = useState({ isOpen: false, type: "", item: null });
    const [editForm, setEditForm] = useState({});
    const [editLoading, setEditLoading] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("rts_admin_logged_in");
        if (!loggedIn) {
            router.push("/admin/login");
        } else {
            setIsAuthorized(true);
            fetchNews();
            fetchJobs();
        }
    }, [router]);

    if (!isAuthorized) return null;

    async function fetchNews() {
        const res = await fetch(`${API}/api/news`);
        const data = await res.json();
        setNewsList(data);
    }

    async function fetchJobs() {
        const res = await fetch(`${API}/api/jobs`);
        const data = await res.json();
        setJobsList(data);
    }

    async function handleAddNews(e) {
        e.preventDefault();
        setNewsLoading(true);
        setNewsStatus(null);
        try {
            const res = await fetch(`${API}/api/news`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newsForm),
            });
            if (!res.ok) throw new Error("Gagal menambahkan berita");
            setNewsStatus({ type: "success", message: "Berita berhasil ditambahkan!" });
            setNewsForm({ title: "", excerpt: "" });
            fetchNews();
        } catch (err) {
            setNewsStatus({ type: "error", message: err.message });
        } finally {
            setNewsLoading(false);
        }
    }

    function openDeleteNewsModal(item) {
        setDeleteModal({ isOpen: true, type: "news", id: item.id, title: item.title });
    }

    function openDeleteJobModal(item) {
        setDeleteModal({ isOpen: true, type: "job", id: item.id, title: item.job_title });
    }

    async function confirmDelete() {
        if (!deleteModal.id) return;
        if (deleteModal.type === "news") {
            await fetch(`${API}/api/news/${deleteModal.id}`, { method: "DELETE" });
            fetchNews();
        } else if (deleteModal.type === "job") {
            await fetch(`${API}/api/jobs/${deleteModal.id}`, { method: "DELETE" });
            fetchJobs();
        }
        setDeleteModal({ isOpen: false, type: "", id: null, title: "" });
    }

    function openEditNewsModal(item) {
        setEditForm({ title: item.title, excerpt: item.excerpt });
        setEditModal({ isOpen: true, type: "news", item });
    }

    function openEditJobModal(item) {
        setEditForm({
            job_title: item.job_title,
            department: item.department,
            employment_type: item.employment_type,
            description: item.description || "",
            requirements: item.requirements || ""
        });
        setEditModal({ isOpen: true, type: "job", item });
    }

    async function handleSaveEdit(e) {
        e.preventDefault();
        setEditLoading(true);
        try {
            if (editModal.type === "news") {
                await fetch(`${API}/api/news/${editModal.item.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(editForm),
                });
                fetchNews();
            } else if (editModal.type === "job") {
                await fetch(`${API}/api/jobs/${editModal.item.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(editForm),
                });
                fetchJobs();
            }
            setEditModal({ isOpen: false, type: "", item: null });
        } catch (err) {
            console.error(err);
        } finally {
            setEditLoading(false);
        }
    }

    async function handleAddJob(e) {
        e.preventDefault();
        setJobsLoading(true);
        setJobsStatus(null);
        try {
            const res = await fetch(`${API}/api/jobs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jobsForm),
            });
            if (!res.ok) throw new Error("Gagal menambahkan lowongan");
            setJobsStatus({ type: "success", message: "Lowongan berhasil ditambahkan!" });
            setJobsForm({ job_title: "", department: "", employment_type: "", description: "", requirements: "" });
            fetchJobs();
        } catch (err) {
            setJobsStatus({ type: "error", message: err.message });
        } finally {
            setJobsLoading(false);
        }
    }

    const inputStyle = {
        width: "100%",
        padding: "0.75rem 1rem",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.15)",
        backgroundColor: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: "0.95rem",
        outline: "none",
        boxSizing: "border-box",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "0.4rem",
        color: "#94a3b8",
        fontSize: "0.85rem",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
    };

    const navItems = [
        { key: "news", label: "Latest News", icon: "fa-newspaper" },
        { key: "jobs", label: "Lowongan Kerja", icon: "fa-briefcase" },
    ];

    return (
        <>
            <style>{`
                .admin-layout { display: flex; min-height: calc(100vh - 65px); }
                .admin-sidebar {
                    width: 220px;
                    flex-shrink: 0;
                    border-right: 1px solid rgba(255,255,255,0.08);
                    padding: 1.5rem 1rem;
                    background: rgba(0,0,0,0.2);
                }
                .admin-main { flex: 1; padding: 2rem; overflow-y: auto; min-width: 0; }
                .admin-header-actions { display: flex; gap: 1.5rem; align-items: center; }
                .admin-header-title { display: block; }
                .admin-menu-btn { display: none; background: none; border: 1px solid rgba(255,255,255,0.1); padding: 0.4rem 0.7rem; border-radius: 6px; color: #94a3b8; cursor: pointer; font-size: 1rem; }
                .admin-back-link { color: #64748b; font-size: 0.85rem; text-decoration: none; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap; }
                .admin-logout-btn { background: none; border: 1px solid rgba(239,68,68,0.3); padding: 0.4rem 0.8rem; border-radius: 6px; color: #f87171; cursor: pointer; font-size: 0.85rem; white-space: nowrap; }
                .jobs-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .news-item-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
                .jobs-item-row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
                .item-actions { display: flex; gap: 0.5rem; flex-shrink: 0; }
                .admin-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 199; }
                .edit-modal-inner { width: 100%; max-width: 560px; box-sizing: border-box; }

                @media (max-width: 768px) {
                    .admin-sidebar {
                        position: fixed;
                        top: 0;
                        left: -260px;
                        height: 100vh;
                        width: 240px;
                        z-index: 200;
                        transition: left 0.3s ease;
                        padding-top: 5rem;
                        border-right: 1px solid rgba(255,255,255,0.12);
                    }
                    .admin-sidebar.open { left: 0; }
                    .admin-overlay.open { display: block; }
                    .admin-main { padding: 1.25rem; }
                    .admin-header-actions { gap: 0.75rem; }
                    .admin-header-title { display: none; }
                    .admin-menu-btn { display: block; }
                    .admin-back-link span { display: none; }
                    .jobs-2col { grid-template-columns: 1fr; }
                    .news-item-row { flex-direction: column; align-items: flex-start; }
                    .jobs-item-row { flex-direction: column; align-items: flex-start; }
                    .item-actions { width: 100%; justify-content: flex-start; }
                    .edit-modal-inner { max-width: 100%; }
                }

                @media (max-width: 480px) {
                    .admin-main { padding: 1rem; }
                }
            `}</style>

            <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #0c1929 100%)", color: "#fff", fontFamily: "'Inter', sans-serif" }}>

                {/* Header */}
                <header style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 100 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <button className="admin-menu-btn" onClick={() => setSidebarOpen(true)}>
                            <i className="fas fa-bars"></i>
                        </button>
                        <img src="/rts_logo_white.png" alt="RTS" className="logo-img" style={{ height: "32px" }} />
                        <div className="admin-header-title">
                            <div style={{ fontSize: "1rem", fontWeight: "700", color: "#38b6ff" }}>Admin Panel</div>
                            <div style={{ fontSize: "0.7rem", color: "#64748b" }}>PT Rajawali Telekomunikasi Selular</div>
                        </div>
                    </div>
                    <div className="admin-header-actions">
                        <Link href="/" className="admin-back-link">
                            <i className="fas fa-arrow-left"></i>
                            <span>Kembali ke Situs</span>
                        </Link>
                        <button className="admin-logout-btn" onClick={() => {
                            localStorage.removeItem("rts_admin_logged_in");
                            router.push("/admin/login");
                        }}>
                            Logout
                        </button>
                    </div>
                </header>

                {/* Overlay for mobile sidebar */}
                <div className={`admin-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

                <div className="admin-layout">

                    {/* Sidebar */}
                    <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", paddingLeft: "0.75rem" }}>
                            <p style={{ fontSize: "0.7rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Kelola</p>
                            <button onClick={() => setSidebarOpen(false)} style={{ background: "none", border: "none", color: "#64748b", fontSize: "1.1rem", cursor: "pointer", display: "none" }} className="sidebar-close-btn">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        {navItems.map(item => (
                            <button
                                key={item.key}
                                onClick={() => { setTab(item.key); setSidebarOpen(false); }}
                                style={{
                                    width: "100%", textAlign: "left", padding: "0.7rem 0.75rem", borderRadius: "8px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem",
                                    fontWeight: tab === item.key ? "600" : "400",
                                    backgroundColor: tab === item.key ? "rgba(56,182,255,0.15)" : "transparent",
                                    color: tab === item.key ? "#38b6ff" : "#94a3b8",
                                    marginBottom: "0.25rem", transition: "all 0.2s"
                                }}
                            >
                                <i className={`fas ${item.icon}`} style={{ width: "16px" }}></i>
                                {item.label}
                            </button>
                        ))}
                    </aside>

                    {/* Main Content */}
                    <main className="admin-main">

                        {/* ───── NEWS TAB ───── */}
                        {tab === "news" && (
                            <div>
                                <h1 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.25rem" }}>Latest News</h1>
                                <p style={{ color: "#64748b", marginBottom: "1.5rem", fontSize: "0.9rem" }}>Berita yang muncul di widget homepage</p>

                                {/* Add Form */}
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#cbd5e1" }}>Tambah Berita Baru</h2>
                                    {newsStatus && (
                                        <div style={{ padding: "0.75rem 1rem", marginBottom: "1rem", borderRadius: "8px", backgroundColor: newsStatus.type === "success" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)", border: `1px solid ${newsStatus.type === "success" ? "#22c55e" : "#ef4444"}`, color: newsStatus.type === "success" ? "#4ade80" : "#f87171", fontSize: "0.9rem" }}>
                                            {newsStatus.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleAddNews} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>Judul Berita</label>
                                            <input style={inputStyle} type="text" value={newsForm.title} onChange={e => setNewsForm({ ...newsForm, title: e.target.value })} placeholder="Contoh: Kemitraan Strategis Terbaru RTS" required />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Excerpt (Ringkasan)</label>
                                            <textarea style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }} value={newsForm.excerpt} onChange={e => setNewsForm({ ...newsForm, excerpt: e.target.value })} placeholder="Tulis ringkasan singkat berita..." required />
                                        </div>
                                        <button type="submit" disabled={newsLoading} style={{ alignSelf: "flex-start", padding: "0.65rem 1.5rem", background: "linear-gradient(135deg, #1d4ed8, #38b6ff)", color: "#fff", border: "none", borderRadius: "8px", cursor: newsLoading ? "not-allowed" : "pointer", fontWeight: "600", fontSize: "0.9rem", opacity: newsLoading ? 0.7 : 1 }}>
                                            {newsLoading ? "Menyimpan..." : "Simpan Berita"}
                                        </button>
                                    </form>
                                </div>

                                {/* News List */}
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden" }}>
                                    <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                                        <h2 style={{ fontSize: "1rem", fontWeight: "600", color: "#cbd5e1" }}>Daftar Berita ({newsList.length})</h2>
                                    </div>
                                    {newsList.length === 0 ? (
                                        <div style={{ padding: "2.5rem", textAlign: "center", color: "#475569" }}>Belum ada berita. Tambahkan berita pertama!</div>
                                    ) : (
                                        newsList.map((item, i) => (
                                            <div key={item.id} style={{ padding: "1rem 1.25rem", borderBottom: i < newsList.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                                                <div className="news-item-row">
                                                    <div style={{ flex: 1, minWidth: 0 }}>
                                                        <p style={{ fontWeight: "600", marginBottom: "0.25rem", fontSize: "0.95rem", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</p>
                                                        <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.5 }}>{item.excerpt}</p>
                                                        <p style={{ color: "#334155", fontSize: "0.75rem", marginTop: "0.3rem" }}>{new Date(item.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                                                    </div>
                                                    <div className="item-actions">
                                                        <button onClick={() => openEditNewsModal(item)} style={{ padding: "0.4rem 0.9rem", background: "rgba(56,182,255,0.15)", border: "1px solid rgba(56,182,255,0.4)", color: "#38b6ff", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>
                                                            <i className="fas fa-pen"></i> Edit
                                                        </button>
                                                        <button onClick={() => openDeleteNewsModal(item)} style={{ padding: "0.4rem 0.9rem", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#f87171", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>
                                                            <i className="fas fa-trash"></i> Hapus
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ───── JOBS TAB ───── */}
                        {tab === "jobs" && (
                            <div>
                                <h1 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.25rem" }}>Lowongan Kerja</h1>
                                <p style={{ color: "#64748b", marginBottom: "1.5rem", fontSize: "0.9rem" }}>Kelola lowongan yang tampil di halaman Career</p>

                                {/* Add Form */}
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#cbd5e1" }}>Tambah Lowongan Baru</h2>
                                    {jobsStatus && (
                                        <div style={{ padding: "0.75rem 1rem", marginBottom: "1rem", borderRadius: "8px", backgroundColor: jobsStatus.type === "success" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)", border: `1px solid ${jobsStatus.type === "success" ? "#22c55e" : "#ef4444"}`, color: jobsStatus.type === "success" ? "#4ade80" : "#f87171", fontSize: "0.9rem" }}>
                                            {jobsStatus.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleAddJob} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>Job Title</label>
                                            <input style={inputStyle} type="text" value={jobsForm.job_title} onChange={e => setJobsForm({ ...jobsForm, job_title: e.target.value })} placeholder="Contoh: Frontend Developer" required />
                                        </div>
                                        <div className="jobs-2col">
                                            <div>
                                                <label style={labelStyle}>Department</label>
                                                <select style={{ ...inputStyle, backgroundColor: "#0f172a" }} value={jobsForm.department} onChange={e => setJobsForm({ ...jobsForm, department: e.target.value })} required>
                                                    <option value="">Pilih Department</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="Strategy">Strategy</option>
                                                    <option value="Engineering">Engineering</option>
                                                    <option value="Marketing">Marketing</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Employment Type</label>
                                                <select style={{ ...inputStyle, backgroundColor: "#0f172a" }} value={jobsForm.employment_type} onChange={e => setJobsForm({ ...jobsForm, employment_type: e.target.value })} required>
                                                    <option value="">Pilih Tipe</option>
                                                    <option value="Permanent">Permanent</option>
                                                    <option value="Contract">Contract</option>
                                                    <option value="Internship">Internship</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Deskripsi Pekerjaan</label>
                                            <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical", fontFamily: "inherit" }} value={jobsForm.description} onChange={e => setJobsForm({ ...jobsForm, description: e.target.value })} placeholder="Jelaskan tanggung jawab dan deskripsi posisi ini..." />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Persyaratan Kualifikasi</label>
                                            <textarea style={{ ...inputStyle, minHeight: "120px", resize: "vertical", fontFamily: "inherit" }} value={jobsForm.requirements} onChange={e => setJobsForm({ ...jobsForm, requirements: e.target.value })} placeholder={"Tulis setiap persyaratan di baris baru, misalnya:\n- Pendidikan S1 terkait\n- Pengalaman 2 tahun\n- Mahir menggunakan..."} />
                                        </div>
                                        <button type="submit" disabled={jobsLoading} style={{ alignSelf: "flex-start", padding: "0.65rem 1.5rem", background: "linear-gradient(135deg, #1d4ed8, #38b6ff)", color: "#fff", border: "none", borderRadius: "8px", cursor: jobsLoading ? "not-allowed" : "pointer", fontWeight: "600", fontSize: "0.9rem", opacity: jobsLoading ? 0.7 : 1 }}>
                                            {jobsLoading ? "Menyimpan..." : "Simpan Lowongan"}
                                        </button>
                                    </form>
                                </div>

                                {/* Jobs List */}
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden" }}>
                                    <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                                        <h2 style={{ fontSize: "1rem", fontWeight: "600", color: "#cbd5e1" }}>Daftar Lowongan ({jobsList.length})</h2>
                                    </div>
                                    {jobsList.length === 0 ? (
                                        <div style={{ padding: "2.5rem", textAlign: "center", color: "#475569" }}>Belum ada lowongan.</div>
                                    ) : (
                                        jobsList.map((job, i) => (
                                            <div key={job.id} style={{ padding: "1rem 1.25rem", borderBottom: i < jobsList.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                                                <div className="jobs-item-row">
                                                    <div style={{ minWidth: 0 }}>
                                                        <p style={{ fontWeight: "600", marginBottom: "0.35rem" }}>{job.job_title}</p>
                                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 0.5rem", alignItems: "center" }}>
                                                            <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{job.department}</span>
                                                            <span style={{ color: "#334155" }}>•</span>
                                                            <span style={{ fontSize: "0.8rem", padding: "0.15rem 0.6rem", background: "rgba(56,182,255,0.15)", color: "#38b6ff", borderRadius: "20px" }}>{job.employment_type}</span>
                                                            <span style={{ color: "#334155" }}>•</span>
                                                            <span style={{ fontSize: "0.75rem", color: "#475569" }}>{new Date(job.posted_on).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-actions">
                                                        <button onClick={() => openEditJobModal(job)} style={{ padding: "0.4rem 0.9rem", background: "rgba(56,182,255,0.15)", border: "1px solid rgba(56,182,255,0.4)", color: "#38b6ff", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>
                                                            <i className="fas fa-pen"></i> Edit
                                                        </button>
                                                        <button onClick={() => openDeleteJobModal(job)} style={{ padding: "0.4rem 0.9rem", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#f87171", borderRadius: "6px", cursor: "pointer", fontSize: "0.8rem" }}>
                                                            <i className="fas fa-trash"></i> Hapus
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </main>
                </div>

                {/* CUSTOM DELETE MODAL */}
                {deleteModal.isOpen && (
                    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
                        <div style={{ background: "rgba(15, 23, 42, 0.98)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "1.5rem", width: "100%", maxWidth: "400px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.5)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", color: "#f87171" }}>
                                <i className="fas fa-exclamation-triangle" style={{ fontSize: "1.4rem" }}></i>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>Konfirmasi Hapus</h3>
                            </div>
                            <p style={{ color: "#cbd5e1", marginBottom: "1.5rem", lineHeight: "1.5", fontSize: "0.95rem" }}>
                                Apakah Anda yakin ingin menghapus <strong>{deleteModal.title}</strong>? Tindakan ini tidak dapat dibatalkan.
                            </p>
                            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                                <button onClick={() => setDeleteModal({ isOpen: false, type: "", id: null, title: "" })} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", padding: "0.5rem 1rem", borderRadius: "6px", color: "#fff", cursor: "pointer" }}>
                                    Batal
                                </button>
                                <button onClick={confirmDelete} style={{ background: "#ef4444", border: "none", padding: "0.5rem 1rem", borderRadius: "6px", color: "#fff", cursor: "pointer", fontWeight: "600" }}>
                                    Ya, Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* EDIT MODAL */}
                {editModal.isOpen && (
                    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1100, padding: "1rem", overflowY: "auto" }}>
                        <div className="edit-modal-inner" style={{ background: "rgba(15,23,42,0.98)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)", position: "relative", margin: "auto" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#38b6ff" }}>
                                    <i className="fas fa-pen" style={{ fontSize: "1rem" }}></i>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>Edit {editModal.type === "news" ? "Berita" : "Lowongan"}</h3>
                                </div>
                                <button onClick={() => setEditModal({ isOpen: false, type: "", item: null })} style={{ background: "none", border: "none", color: "#64748b", fontSize: "1.4rem", cursor: "pointer", lineHeight: 1 }}>&times;</button>
                            </div>

                            <form onSubmit={handleSaveEdit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {editModal.type === "news" ? (
                                    <>
                                        <div>
                                            <label style={labelStyle}>Judul Berita</label>
                                            <input style={inputStyle} type="text" value={editForm.title || ""} onChange={e => setEditForm({ ...editForm, title: e.target.value })} required />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Excerpt (Ringkasan)</label>
                                            <textarea style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }} value={editForm.excerpt || ""} onChange={e => setEditForm({ ...editForm, excerpt: e.target.value })} required />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <label style={labelStyle}>Job Title</label>
                                            <input style={inputStyle} type="text" value={editForm.job_title || ""} onChange={e => setEditForm({ ...editForm, job_title: e.target.value })} required />
                                        </div>
                                        <div className="jobs-2col">
                                            <div>
                                                <label style={labelStyle}>Department</label>
                                                <select style={{ ...inputStyle, backgroundColor: "#0f172a" }} value={editForm.department || ""} onChange={e => setEditForm({ ...editForm, department: e.target.value })} required>
                                                    <option value="">Pilih Department</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="Strategy">Strategy</option>
                                                    <option value="Engineering">Engineering</option>
                                                    <option value="Marketing">Marketing</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Employment Type</label>
                                                <select style={{ ...inputStyle, backgroundColor: "#0f172a" }} value={editForm.employment_type || ""} onChange={e => setEditForm({ ...editForm, employment_type: e.target.value })} required>
                                                    <option value="">Pilih Tipe</option>
                                                    <option value="Permanent">Permanent</option>
                                                    <option value="Contract">Contract</option>
                                                    <option value="Internship">Internship</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Deskripsi Pekerjaan</label>
                                            <textarea style={{ ...inputStyle, minHeight: "90px", resize: "vertical", fontFamily: "inherit" }} value={editForm.description || ""} onChange={e => setEditForm({ ...editForm, description: e.target.value })} placeholder="Jelaskan tanggung jawab dan deskripsi posisi ini..." />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Persyaratan Kualifikasi</label>
                                            <textarea style={{ ...inputStyle, minHeight: "100px", resize: "vertical", fontFamily: "inherit" }} value={editForm.requirements || ""} onChange={e => setEditForm({ ...editForm, requirements: e.target.value })} placeholder="Tulis setiap persyaratan di baris baru..." />
                                        </div>
                                    </>
                                )}
                                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "0.25rem" }}>
                                    <button type="button" onClick={() => setEditModal({ isOpen: false, type: "", item: null })} style={{ padding: "0.6rem 1.25rem", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", color: "#fff", cursor: "pointer" }}>Batal</button>
                                    <button type="submit" disabled={editLoading} style={{ padding: "0.6rem 1.5rem", background: "linear-gradient(135deg, #1d4ed8, #38b6ff)", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", fontWeight: "600", opacity: editLoading ? 0.7 : 1 }}>
                                        {editLoading ? <><i className="fas fa-circle-notch fa-spin"></i> Menyimpan...</> : "Simpan Perubahan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
