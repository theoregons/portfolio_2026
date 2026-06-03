import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0F]">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <PortfolioSection />
            <EducationSection />
            <ContactSection />
        </div>
    );
};

export default Index;