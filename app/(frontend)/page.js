import HeroSection from "../../components/frontend/HeroSection";
import ServicesSection from "../../components/frontend/ServicesSection";
import PackageSection from "../../components/frontend/PackageSection";
import ProjectsSection from "../../components/frontend/ProjectsSection";
import ClientsSection from "../../components/frontend/ClientsSection";
import TestimonialSection from "../../components/frontend/TestimonialSection";
import ContactSection from "../../components/frontend/ContactSection";
import FAQSection from "../../components/frontend/FAQSection";

export default function Home() {
    return (
      <div>
        <HeroSection />
        <ServicesSection />
        <PackageSection />
        <ProjectsSection />
        <ClientsSection />
        <TestimonialSection />
        <ContactSection />
        <FAQSection />
      </div>
    );
  }  