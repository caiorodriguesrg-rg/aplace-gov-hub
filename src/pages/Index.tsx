import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechnicalSection from "@/components/TechnicalSection";
import ImpactSection from "@/components/ImpactSection";
import LegalSection from "@/components/LegalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TechnicalSection />
        <ImpactSection />
        <LegalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
