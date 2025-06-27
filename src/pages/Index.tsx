import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBrands from "@/components/FeaturedBrands";
import PopularModels from "@/components/PopularModels";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedBrands />
      <PopularModels />
      <Footer />
    </div>
  );
};

export default Index;
