"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsWidget() {
    const { t } = useLanguage();
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [newsError, setNewsError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/news/latest")
            .then((res) => {
                if (!res.ok) throw new Error("Gagal mengambil data berita");
                return res.json();
            })
            .then((data) => {
                setNews(data);
                setNewsLoading(false);
            })
            .catch((err) => {
                setNewsError(err.message);
                setNewsLoading(false);
            });
    }, []);

    return (
        <div className="glass-card main-card" style={{ textAlign: "left", padding: "1.5rem", width: "100%", maxWidth: "400px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "#38b6ff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                <i className="fas fa-newspaper" style={{ marginRight: "8px" }}></i> {t('news.title')}
            </h3>

            {newsLoading ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#9ca3af", justifyContent: "center", padding: "2rem 0" }}>
                    <i className="fas fa-circle-notch fa-spin"></i>
                    <p>{t('news.loading')}</p>
                </div>
            ) : newsError ? (
                <div style={{ color: "#f87171", textAlign: "center", padding: "2rem 0" }}>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p style={{ marginTop: "8px" }}>{newsError}</p>
                </div>
            ) : news.length === 0 ? (
                <p style={{ color: "#9ca3af", textAlign: "center", padding: "2rem 0" }}>{t('news.empty')}</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {news.map((item: any, index) => (
                        <div
                            key={item.id}
                            style={{ borderBottom: index === news.length - 1 ? "none" : "1px solid rgba(255,255,255,0.1)", paddingBottom: index === news.length - 1 ? "0" : "1rem" }}
                        >
                            <h4 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.25rem", color: "#ffffff" }}>
                                {item.title}
                            </h4>
                            <p style={{ fontSize: "0.85rem", color: "#9ca3af", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                {item.excerpt}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
