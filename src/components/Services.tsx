import { Utensils, Coffee, Calendar, Truck } from "lucide-react";
import lunchSpread from "@/assets/lunch-spread.jpg";
import snacksPlatter from "@/assets/snacks-platter.jpg";
import eventCatering from "@/assets/event-catering.jpg";

const services = [
  {
    icon: Utensils,
    title: "Daily Lunch Service",
    description: "Nutritious and delicious lunch delivered fresh to your office every day. Customizable menus to suit your team's preferences.",
    image: lunchSpread,
  },
  {
    icon: Coffee,
    title: "Snacks & Refreshments",
    description: "Keep your team energized with our selection of snacks, chai, coffee, and refreshments throughout the day.",
    image: snacksPlatter,
  },
  {
    icon: Calendar,
    title: "Event Catering",
    description: "Make your corporate events memorable with our professional catering services for meetings, conferences, and celebrations.",
    image: eventCatering,
  },
];

const features = [
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "We guarantee punctual delivery so your team never has to wait.",
  },
  {
    icon: Utensils,
    title: "Customizable Menus",
    description: "Tailor menus to dietary requirements and preferences.",
  },
  {
    icon: Calendar,
    title: "Flexible Plans",
    description: "Daily, weekly, or monthly plans to suit your needs.",
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
            Catering Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily office lunches to grand corporate events, we have the perfect catering solution for your business.
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
