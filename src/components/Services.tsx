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

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6 leading-tight">
            Corporate Food Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light px-4">
            We partner with businesses to manage their entire food service operations—from cafeteria setup to daily meals, festive celebrations, and campus events.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft border border-border hover:shadow-elevated transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-5 left-5 z-20">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-5 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-border/50 hover:bg-white hover:shadow-soft transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
