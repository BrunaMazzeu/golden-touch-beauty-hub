
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Team from '@/components/Team';
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
      <Location />
      <CallToAction />
    </div>
  );
};

export default Index;
