import FoodieHeader from "@/components/FoodieHeader";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FoodieHeader />
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
    </div>
  );
};

export default Index;
