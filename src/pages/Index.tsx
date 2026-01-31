import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductsGrid from "@/components/home/ProductsGrid";
import MaterialsSection from "@/components/home/MaterialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsGrid />
      <ProcessSection />
      <MaterialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
