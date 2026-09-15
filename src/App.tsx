import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { MarketplacePreview } from './sections/MarketplacePreview';
import { BuyerSection, SupplierSection } from './sections/AudienceSections';
import { HowItWorks } from './sections/HowItWorks';
import { VisionSection } from './sections/VisionSection';
import { MissionSection } from './sections/MissionSection';
import { SurveyCTA } from './sections/SurveyCTA';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <MarketplacePreview />
        <BuyerSection />
        <SupplierSection />
        <HowItWorks />
        <VisionSection />
        <MissionSection />
        <SurveyCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
