// @ts-nocheck
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        if (username === "rtslogin" && password === "RAJAWALIATRIA") {
            localStorage.setItem("rts_admin_logged_in", "true");
            router.push("/admin");
        } else {
            setError("Username atau password salah!");
        }
    };

    const inputStyle = {
        width: "100%",
        padding: "0.9rem 1rem",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.15)",
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "#fff",
        fontSize: "1rem",
        outline: "none",
        boxSizing: "border-box",
        marginBottom: "1.2rem",
        transition: "border-color 0.3s"
    };

    const labelStyle = {
        display: "block",
        marginBottom: "0.5rem",
        color: "#cbd5e1",
        fontSize: "0.9rem",
        fontWeight: "500"
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #0c1929 100%)",
            fontFamily: "'Inter', sans-serif",
            padding: "1rem"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "420px",
                padding: "2rem",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}>

                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <img src="/rts_logo_white.png" alt="RTS Logo" className="logo-img" style={{ height: "45px", margin: "0 auto 1.5rem" }} />
                    <h1 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#fff", marginBottom: "0.5rem" }}>Admin Login</h1>
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Masukkan kredensial Anda untuk masuk ke panel admin.</p>
                </div>

                {error && (
                    <div style={{ padding: "0.8rem", marginBottom: "1.5rem", borderRadius: "8px", backgroundColor: "rgba(239,68,68,0.15)", border: "1px solid #ef4444", color: "#f87171", fontSize: "0.9rem", textAlign: "center" }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div>
                        <label style={labelStyle}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={inputStyle}
                            placeholder="Masukkan username"
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                            placeholder="Masukkan password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ width: "100%", padding: "1rem", marginTop: "0.5rem", background: "linear-gradient(135deg, #1d4ed8, #38b6ff)", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "1rem", boxShadow: "0 4px 15px rgba(56, 182, 255, 0.3)", transition: "transform 0.2s" }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        Masuk Dashboard
                    </button>
                </form>

                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <button onClick={() => router.push("/")} style={{ background: "none", border: "none", color: "#64748b", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline" }}>
                        &larr; Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
}
