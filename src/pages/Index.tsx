import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import JoinSection from "@/components/JoinSection";
import ReferralSection from "@/components/ReferralSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrackRecordSection />
        <JoinSection />
        <ReferralSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
