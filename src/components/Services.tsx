import {
  Utensils,
  Coffee,
  Building2,
  Truck,
  Users,
  Calendar,
  PartyPopper,
  GraduationCap,
} from "lucide-react";
import buffetSetup from "@/assets/buffet-setup.jpg";
import foodVariety from "@/assets/food-variety.jpg";
import kitchenPrep from "@/assets/kitchen-prep.jpg";
import eventCatering from "@/assets/event-catering.jpg";

const services = [
  {
    icon: Building2,
    title: "Cafeteria Management",
    description:
      "Complete end-to-end management of your office cafeteria with staffing, hygiene, inventory, and billing handled for you.",
    image: buffetSetup,
  },
  {
    icon: Utensils,
    title: "Daily Meals: Breakfast, Lunch & Dinner",
    description:
      "Fresh rotating menus across North Indian, South Indian, and Continental cuisines for everyday breakfast, lunch, snacks, and dinner.",
    image: foodVariety,
  },
  {
    icon: Coffee,
    title: "Snacks & Pantry Programs",
    description:
      "Tea/coffee counters, healthy snacks, and evening refreshment bars that keep teams energized through the day.",
    image: kitchenPrep,
  },
  {
    icon: PartyPopper,
    title: "Festivals & Corporate Events",
    description:
      "Theme menus and live counters for Holi, Diwali, Christmas, New Year, offsites, and townhalls.",
    image: eventCatering,
  },
  {
    icon: GraduationCap,
    title: "College & Tech Events",
    description:
      "End-to-end catering for college fests, GDSC meetups, hackathons, coding events, and campus drives.",
    image: buffetSetup,
  },
];

const features = [
  {
    icon: Users,
    title: "Daily Coverage",
    description: "All-day coverage: breakfast, lunch, snacks, dinner plus late nights on request.",
  },
  {
    icon: Truck,
    title: "Compliant & Reliable",
    description: "FSSAI certified operations with rigorous hygiene, audits, and backups.",
  },
  {
    icon: Calendar,
    title: "Flexible Contracts",
    description: "Monthly or annual contracts, per-plate pricing for events, and transparent SLAs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 animate-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Corporate Food Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with businesses to manage their entire food service operations—from cafeteria setup to daily meals, festive celebrations, and campus events.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
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
