import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden food-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold text-lg">
              4.8 • 10,000+ satisfied customers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block">Delicious Food</span>
            <span className="text-yellow-300 block">Delivered Fast</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Order from your favorite restaurants and get fresh, hot meals delivered to
            your doorstep in 30 minutes or less.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={() => document.getElementById('browse-categories')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-xl font-semibold group transition-smooth"
          >
            Order Now
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;