import React from 'react';
import { UrgencyPill } from './components/UrgencyPill';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferDetailsSection } from './components/OfferDetailsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <UrgencyPill />
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferDetailsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;