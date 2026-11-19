import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Hero from '../../components/Hero/Hero';
import MarqueeTicker from '../../components/MarqueeTicker/MarqueeTicker';
import AboutQuest from '../../components/AboutQuest/AboutQuest';
import OurCompanies from '../../components/OurCompanies/OurCompanies';
import ValueStrip from '../../components/ValueStrip/ValueStrip';
import WhyQuestPharma from '../../components/WhyQuestPharma/WhyQuestPharma';
import HomeContactSection from '../../components/HomeContactSection/HomeContactSection';

export default function Home() {
  return (
    <PageWrapper
      title="Quest Group"
      fullTitle="Quest Group | Quest Pharma & Quest ChemTech - APIs & Intermediates Manufacturer in India"
      description="Quest Group unites Quest Pharma and Quest ChemTech — premier manufacturers of Active Pharmaceutical Ingredients (APIs) and advanced Pharmaceutical Intermediates in India (Hyderabad, Telangana)."
    >
      {/* 1. Home (Hero & Ticker) */}
      <Hero />
      <MarqueeTicker />

      {/* 2. About Quest Group */}
      <AboutQuest />

      {/* 3. Our Companies: Quest Pharma & Quest ChemTech */}
      <OurCompanies />

      {/* 4. Capabilities (What We Deliver, Why Quest Group) */}
      <div id="capabilities">
        <ValueStrip />
        <WhyQuestPharma />
      </div>

      {/* 5. Contact */}
      <HomeContactSection />
    </PageWrapper>
  );
}
