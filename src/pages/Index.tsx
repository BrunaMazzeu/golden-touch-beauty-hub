
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Team from '@/components/Team';
import OurSpace from '@/components/OurSpace';
import Location from '@/components/Location';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-premium-beige">
      <Hero />
      <About />
      <Mission />
      <Services />
      <Team />
      <OurSpace />
      <Location />
      <CallToAction />
    </div>
  );
};

export default Index;
