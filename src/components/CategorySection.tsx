// Category Section Component
import pizzaImage from "@/assets/pizza-category.jpg";
import burgerImage from "@/assets/burger-category.jpg";
import healthyImage from "@/assets/healthy-category.jpg";
import sushiImage from "@/assets/sushi-category.jpg";

const CategorySection = () => {
  const categories = [
    {
      name: "Pizza",
      dishes: "45 dishes",
      image: pizzaImage
    },
    {
      name: "Burgers", 
      dishes: "32 dishes",
      image: burgerImage
    },
    {
      name: "Healthy",
      dishes: "28 dishes", 
      image: healthyImage
    },
    {
      name: "Sushi",
      dishes: "21 dishes",
      image: sushiImage
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    alert(`${categoryName} category clicked! This would navigate to ${categoryName.toLowerCase()} menu.`);
  };

  return (
    <section id="browse-categories" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover your favorite dishes from top-rated restaurants in your area
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl h-80 transition-smooth hover:scale-105"
              onClick={() => handleCategoryClick(category.name)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-smooth" />
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80">{category.dishes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;