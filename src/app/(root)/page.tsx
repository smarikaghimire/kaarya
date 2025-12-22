// src/app/page.tsx
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import PopularServices from '@/components/landing/popular-services';
import TopRatedProviders from '@/components/landing/top-rated-providers';
import SafetySection from '@/components/landing/safety-section';
import Testimonials from '@/components/landing/testimonials';
import CTASection from '@/components/landing/cta-section';


export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PopularServices />
      <TopRatedProviders />
      <SafetySection />
      <Testimonials />
      <CTASection />
     
    </>
  );
}