"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ActivitySection from "@/components/sections/ActivitySection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    useScrollAnimation();

    return (
        <main>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <Navbar />

            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ActivitySection />
            <CareerSection />
            <ContactSection />

            <Footer />
        </main>
    );
}