import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import MarketingPackagesSection from "@/components/sections/MarketingPackagesSection";
import DoworkGrowthSection from "@/components/sections/DoworkGrowthSection";
import PopularServicesSection from "@/components/sections/PopularServicesSection";
import WhyDoworkSection from "@/components/sections/WhyDoworkSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import DoworkTeamSection from "@/components/sections/DoworkTeamSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <main className="dowork-site">
      <Header />

      <Hero />

      <MarketingPackagesSection />

      <DoworkGrowthSection />

      <PopularServicesSection />

      <WhyDoworkSection />

      <ConsultationSection />

      <DoworkTeamSection />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}