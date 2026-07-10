"use client";
import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        const animatedEls = document.querySelectorAll(
            ".fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .hover-up"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        animatedEls.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}