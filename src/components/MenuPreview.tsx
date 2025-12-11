import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    category: "North Indian",
    items: ["Dal Makhani", "Paneer Butter Masala", "Jeera Rice", "Roti", "Mixed Veg Curry"],
  },
  {
    category: "South Indian",
    items: ["Sambar Rice", "Curd Rice", "Rasam", "Idli", "Dosa"],
  },
  {
    category: "Chinese",
    items: ["Fried Rice", "Manchurian", "Chow Mein", "Spring Rolls", "Chilli Paneer"],
  },
  {
    category: "Snacks",
    items: ["Samosa", "Pakora", "Sandwiches", "Cutlets", "Pav Bhaji"],
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            A Taste of What We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Our diverse menu features cuisines from across India, prepared fresh daily. Menus can be customized for your team.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuItems.map((menu, index) => (
            <div
              key={menu.category}
              className="p-6 rounded-2xl bg-card border border-border hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-2 rounded-full bg-gradient-to-r from-primary to-accent mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {menu.category}
              </h3>
              <ul className="space-y-2">
                {menu.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see our full menu with pricing? Get in touch with us!
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="#contact">
              Request Full Menu
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
