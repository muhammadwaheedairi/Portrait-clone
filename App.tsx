import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommunitySection from './components/CommunitySection';
import NetworkDiagram from './components/NetworkDiagram';
import HostingFeature from './components/HostingFeature';
import StepsSection from './components/StepsSection';
import IntegrationsSection from './components/IntegrationsSection';
import ValueProps from './components/ValueProps';
import DecentralizedStorage from './components/DecentralizedStorage';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CommunitySection />
        <NetworkDiagram />
        <HostingFeature />
        <StepsSection />
        <IntegrationsSection />
        <ValueProps />
        <DecentralizedStorage />
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;