import { Utensils, Coffee, Building2, Truck, Users, Calendar } from "lucide-react";
import buffetSetup from "@/assets/buffet-setup.jpg";
import foodVariety from "@/assets/food-variety.jpg";
import kitchenPrep from "@/assets/kitchen-prep.jpg";

const services = [
  {
    icon: Building2,
    title: "Cafeteria Management",
    description: "Complete end-to-end management of your office cafeteria. We handle setup, staffing, and daily operations so you can focus on your business.",
    image: buffetSetup,
  },
  {
    icon: Utensils,
    title: "Daily Meal Programs",
    description: "Consistent, quality meals served fresh from our on-site kitchen. Rotating menus featuring North Indian, South Indian, and Continental options.",
    image: foodVariety,
  },
  {
    icon: Coffee,
    title: "Snack Counters & Pantry",
    description: "Keep your workforce energized with dedicated snack counters, tea/coffee stations, and pantry management services.",
    image: kitchenPrep,
  },
];

const features = [
  {
    icon: Users,
    title: "Scalable Operations",
    description: "From 50 to 5000+ employees, we scale seamlessly with your needs.",
  },
  {
    icon: Truck,
    title: "FSSAI Certified",
    description: "Fully compliant with food safety standards and hygiene protocols.",
  },
  {
    icon: Calendar,
    title: "Flexible Contracts",
    description: "Monthly or annual contracts with transparent pricing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Corporate Food Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with businesses to manage their entire food service operations—from cafeteria setup to daily meal preparation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
