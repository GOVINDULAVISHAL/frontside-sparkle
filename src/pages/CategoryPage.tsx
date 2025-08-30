import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

// Import all dish images
import pizzaDish1 from "@/assets/pizza-dish-1.jpg";
import pizzaDish2 from "@/assets/pizza-dish-2.jpg";
import burgerDish1 from "@/assets/burger-dish-1.jpg";
import burgerDish2 from "@/assets/burger-dish-2.jpg";
import healthyDish1 from "@/assets/healthy-dish-1.jpg";
import healthyDish2 from "@/assets/healthy-dish-2.jpg";
import sushiDish1 from "@/assets/sushi-dish-1.jpg";
import sushiDish2 from "@/assets/sushi-dish-2.jpg";

const CategoryPage = () => {
  const { category } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const categoryData = {
    pizza: {
      title: "Pizza",
      description: "Authentic wood-fired pizzas with fresh ingredients",
      dishes: [
        {
          id: "pizza-1",
          name: "Pepperoni Pizza",
          price: 18.99,
          rating: 4.8,
          description: "Classic pepperoni with mozzarella cheese on crispy crust",
          image: pizzaDish1
        },
        {
          id: "pizza-2", 
          name: "Margherita Pizza",
          price: 16.99,
          rating: 4.9,
          description: "Fresh mozzarella, tomatoes, basil leaves, and olive oil",
          image: pizzaDish2
        }
      ]
    },
    burgers: {
      title: "Burgers",
      description: "Juicy gourmet burgers made with premium ingredients",
      dishes: [
        {
          id: "burger-1",
          name: "Classic Cheeseburger",
          price: 15.99,
          rating: 4.6,
          description: "Juicy beef patty with cheddar cheese, lettuce, and tomato",
          image: burgerDish1
        },
        {
          id: "burger-2",
          name: "Crispy Chicken Burger", 
          price: 17.99,
          rating: 4.7,
          description: "Crispy fried chicken with fresh vegetables and special sauce",
          image: burgerDish2
        }
      ]
    },
    healthy: {
      title: "Healthy",
      description: "Nutritious and delicious healthy meals for conscious eaters",
      dishes: [
        {
          id: "healthy-1",
          name: "Avocado Power Bowl",
          price: 14.99,
          rating: 4.8,
          description: "Fresh avocado with mixed greens and superfoods",
          image: healthyDish1
        },
        {
          id: "healthy-2",
          name: "Quinoa Buddha Bowl",
          price: 16.99,
          rating: 4.9,
          description: "Quinoa with roasted vegetables and tahini dressing",
          image: healthyDish2
        }
      ]
    },
    sushi: {
      title: "Sushi",
      description: "Fresh sushi rolls and sashimi prepared by expert chefs",
      dishes: [
        {
          id: "sushi-1",
          name: "Salmon Roll",
          price: 12.99,
          rating: 4.8,
          description: "Fresh salmon sushi rolls with rice and wasabi",
          image: sushiDish1
        },
        {
          id: "sushi-2",
          name: "Sushi Platter",
          price: 24.99,
          rating: 4.9,
          description: "Assorted sushi with tuna, salmon, and avocado rolls",
          image: sushiDish2
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (dish: any) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${dish.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">{currentCategory.title}</h1>
              <p className="text-muted-foreground">{currentCategory.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.dishes.map((dish) => (
            <div 
              key={dish.id}
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
                <p className="text-muted-foreground text-sm mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${dish.price}</span>
                  <Button 
                    onClick={() => handleAddToCart(dish)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;