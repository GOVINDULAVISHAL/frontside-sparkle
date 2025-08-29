import { Star } from "lucide-react";

const FeaturedSection = () => {
  const featuredDishes = [
    {
      name: "Margherita Pizza",
      rating: 4.8,
      description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil on...",
      image: "/placeholder.svg"
    },
    {
      name: "Classic Cheeseburger", 
      rating: 4.6,
      description: "Juicy beef patty with cheddar",
      image: "/placeholder.svg"
    },
    {
      name: "Rainbow Buddha Bowl",
      rating: 4.9,
      description: "Quinoa, avocado, roasted",
      image: "/placeholder.svg"
    },
    {
      name: "Sushi Combo Deluxe",
      rating: 4.7,
      description: "8 pieces of premium nigiri with",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">Featured</span> Dishes
          </h2>
          <p className="text-lg text-muted-foreground">
            Hand-picked favorites that our customers love the most
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-medium transition-smooth group"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/20">
                <div className="absolute inset-0 bg-muted/20" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {dish.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{dish.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;