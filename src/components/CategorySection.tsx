// Category Section Component

const CategorySection = () => {
  const categories = [
    {
      name: "Pizza",
      dishes: "45 dishes",
      image: "/placeholder.svg"
    },
    {
      name: "Burgers", 
      dishes: "32 dishes",
      image: "/placeholder.svg"
    },
    {
      name: "Healthy",
      dishes: "28 dishes", 
      image: "/placeholder.svg"
    },
    {
      name: "Sushi",
      dishes: "21 dishes",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background">
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
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-glow/60" />
              
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