import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import FeatureGrid from '@/components/FeatureGrid';
import ShowcaseSection from '@/components/ShowcaseSection';
import CraftingMatrix from '@/components/CraftingMatrix';
import CommandsSection from '@/components/CommandsSection';
import InstallationSteps from '@/components/InstallationSteps';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <FeatureGrid />
      <ShowcaseSection />
      <CraftingMatrix />
      <CommandsSection />
      <InstallationSteps />
      <CTASection />
    </>
  );
}