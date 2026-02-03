import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProcessSection from "@/components/home/ProcessSection";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Corporate Signage Solutions"
        description="Brand Space delivers premium corporate signage solutions including reception logos, wayfinding systems, safety signs, and digital displays for data centers and enterprises."
        keywords="corporate signage, reception logo, wayfinding signage, safety signs, data center signage, branding solutions"
        url="/"
      />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <StatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
