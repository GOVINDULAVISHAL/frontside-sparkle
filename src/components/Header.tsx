import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              ClientHub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
              Features
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-primary transition-smooth">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-foreground/80">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-primary transition-smooth">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;