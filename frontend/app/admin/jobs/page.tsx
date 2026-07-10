// @ts-nocheck
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdminJobs() {
    const [formData, setFormData] = useState({
        job_title: "",
        department: "",
        employment_type: ""
    });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("http://localhost:5000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                throw new Error("Gagal menambahkan lowongan");
            }

            setStatus({ type: "success", message: "Lowongan berhasil ditambahkan!" });
            setFormData({ job_title: "", department: "", employment_type: "" });
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        width: "100%",
        padding: "0.8rem 1rem",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.2)",
        backgroundColor: "rgba(0,0,0,0.2)",
        color: "#fff",
        fontSize: "1rem",
        outline: "none",
        boxSizing: "border-box"
    };

    return (
        <main style={{ paddingTop: "100px", paddingBottom: "100px", minHeight: "100vh", backgroundColor: "#0f172a", color: "#fff" }}>
            <Navbar solidBackground={true} />

            <div style={{ width: "90%", maxWidth: "560px", margin: "4rem auto", boxSizing: "border-box" }} className="glass-panel">
                <h1 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", color: "#38b6ff", textAlign: "center" }}>Tambah Lowongan Baru</h1>

                {status && (
                    <div style={{
                        padding: "1rem",
                        marginBottom: "1.5rem",
                        borderRadius: "8px",
                        backgroundColor: status.type === "success" ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
                        border: `1px solid ${status.type === "success" ? "#22c55e" : "#ef4444"}`,
                        color: status.type === "success" ? "#4ade80" : "#f87171"
                    }}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "#cbd5e1" }}>Job Title</label>
                        <input
                            type="text"
                            name="job_title"
                            value={formData.job_title}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            placeholder="e.g. Frontend Developer"
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "#cbd5e1" }}>Department</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, backgroundColor: "#1e293b" }}
                        >
                            <option value="">Pilih Department</option>
                            <option value="Finance">Finance</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "#cbd5e1" }}>Employment Type</label>
                        <select
                            name="employment_type"
                            value={formData.employment_type}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, backgroundColor: "#1e293b" }}
                        >
                            <option value="">Pilih Employment Type</option>
                            <option value="Permanent">Permanent</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ marginTop: "0.5rem", width: "100%", padding: "1rem" }}
                    >
                        {loading ? "Menyimpan..." : "Simpan Lowongan"}
                    </button>
                </form>
                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Link href="/career" style={{ color: "#38b6ff", textDecoration: "underline" }}>Lihat Halaman Karir</Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
