"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar({ solidBackground = false }) {
    const navRef = useRef(null);
    const menuToggleRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                navRef.current.classList.toggle("scrolled", window.scrollY > 50);
            }
        };
        window.addEventListener("scroll", handleScroll);

        const toggle = menuToggleRef.current;
        const navLinks = navLinksRef.current;
        const handleToggle = () => navLinks?.classList.toggle("active");
        const handleLinkClick = () => navLinks?.classList.remove("active");

        toggle?.addEventListener("click", handleToggle);
        navLinks?.querySelectorAll("a").forEach((a) =>
            a.addEventListener("click", handleLinkClick)
        );

        return () => {
            window.removeEventListener("scroll", handleScroll);
            toggle?.removeEventListener("click", handleToggle);
        };
    }, []);

    return (
        <nav className={`navbar ${solidBackground ? "bg-[#173154]" : ""}`} ref={navRef}>
            <div className="logo">
                <img src="/rts_logo.png" alt="RTS Logo" className="logo-img" />
            </div>
            <ul className="nav-links" ref={navLinksRef}>
                <li><Link href="/#beranda">Home</Link></li>
                <li><Link href="/#tentang">About</Link></li>
                <li><Link href="/#layanan">Services</Link></li>
                <li><Link href="/#aktivitas">Activities</Link></li>
                <li><Link href="/career">Careers</Link></li>
                <li><Link href="/#kontak">Contact</Link></li>
            </ul>
            <div className="menu-toggle" ref={menuToggleRef}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
}