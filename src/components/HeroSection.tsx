import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8 border border-primary/20">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ clients worldwide</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent leading-tight">
            Transform Your
            <br />
            <span className="hero-gradient bg-clip-text text-transparent">Client Experience</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your client management with our powerful platform. 
            Build stronger relationships, increase productivity, and grow your business effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-primary transition-smooth px-8 py-6 text-lg font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-smooth" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 rating</span>
            </div>
            
            <div className="h-4 w-px bg-border hidden sm:block" />
            
            <div className="text-sm font-medium">
              <span className="text-primary font-bold">99.9%</span> uptime guarantee
            </div>
            
            <div className="h-4 w-px bg-border hidden sm:block" />
            
            <div className="text-sm font-medium">
              <span className="text-primary font-bold">24/7</span> customer support
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;