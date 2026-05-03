import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DailyChallengeSection from "@/components/DailyChallengeSection";
import ProtocolsSection from "@/components/ProtocolsSection";
import CommunitySection from "@/components/CommunitySection";
import DeveloperNote from "@/components/DeveloperNote";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />

      <main id="main-content" role="main">
        <HeroSection />
        <FeaturesSection />
        <DailyChallengeSection />
        <ProtocolsSection />
        <CommunitySection />
        <DeveloperNote />
      </main>

      <Footer />
    </>
  );
}
