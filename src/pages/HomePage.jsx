import React from 'react';
import HeroSection from '../components/HeroSection';
import LogoWall from '../components/LogoWall';
import GrowthKillers from '../components/GrowthKillers';
import EngineeringProfit from '../components/EngineeringProfit';
import CaseStudiesSection from '../components/CaseStudiesSection';
import OnboardingFlow from '../components/OnboardingFlow';
import WallOfLove from '../components/WallOfLove';
import FreeToolsTabs from '../components/FreeToolsTabs';
import BlogCarousel from '../components/BlogCarousel';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LogoWall />
      <GrowthKillers />
      <EngineeringProfit />
      <CaseStudiesSection />
      <OnboardingFlow />
      <WallOfLove />
      <FreeToolsTabs />
      <BlogCarousel />
    </main>
  );
}
