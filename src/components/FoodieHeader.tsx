import { Button } from "@/components/ui/button";
import { User, ShoppingCart } from "lucide-react";

const FoodieHeader = () => {
  return (
    <header className="w-full bg-background border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              FoodieExpress
            </h1>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingCart className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FoodieHeader;