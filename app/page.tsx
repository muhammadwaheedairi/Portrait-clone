import Hero from "@/components/Hero";
import CommunitySection from "@/components/CommunitySection";
import NetworkDiagram from "@/components/NetworkDiagram";
import HostingFeature from "@/components/HostingFeature";
import StepsSection from "@/components/StepsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ValueProps from "@/components/ValueProps";
import DecentralizedStorage from "@/components/DecentralizedStorage";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
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
    </>
  );
}