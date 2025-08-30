import { Star } from "lucide-react";
import pizzaImage from "@/assets/pizza-category.jpg";
import burgerImage from "@/assets/burger-category.jpg";
import pastaImage from "@/assets/pasta-featured.jpg";
import dessertImage from "@/assets/dessert-featured.jpg";

const FeaturedSection = () => {
  const featuredDishes = [
    {
      name: "Margherita Pizza",
      rating: 4.8,
      description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil on crispy dough",
      image: pizzaImage,
      price: "$18.99"
    },
    {
      name: "Classic Cheeseburger", 
      rating: 4.6,
      description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
      image: burgerImage,
      price: "$15.99"
    },
    {
      name: "Creamy Pasta Delight",
      rating: 4.9,
      description: "Rich and creamy pasta with fresh herbs and parmesan cheese",
      image: pastaImage,
      price: "$22.99"
    },
    {
      name: "Chocolate Berry Dessert",
      rating: 4.7,
      description: "Decadent chocolate dessert topped with fresh seasonal berries",
      image: dessertImage,
      price: "$12.99"
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
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
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
                <p className="text-muted-foreground text-sm mb-3">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-smooth">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;