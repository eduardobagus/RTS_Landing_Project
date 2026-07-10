"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

import MilestoneSection from "@/components/sections/MilestoneSection";
import PillarsSection from "@/components/sections/PillarsSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
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
            <MilestoneSection />
            <PillarsSection />
            <PartnershipSection />

            <ActivitySection />
            <CareerSection />
            <ContactSection />

            <Footer />
        </main>
    );
}