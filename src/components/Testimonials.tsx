import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facilities Head, IT Services Company",
    content: "Bigg Spoon has been managing our cafeteria for 4 years. Their team is professional, the food quality is consistent, and they handle everything from procurement to cleanup.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Admin Director, Manufacturing Unit",
    content: "We needed a reliable partner to feed 800+ workers daily. Bigg Spoon set up the entire operation and now runs it seamlessly. Zero complaints from our employees.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "HR Manager, Co-working Space",
    content: "The variety in their daily menu and the quality of their snack counter service keeps our members happy. They've become an integral part of our amenities.",
    rating: 5,
  },
];

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6 leading-tight">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light px-4">
            Hear from the facilities managers and HR teams who rely on us every day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative p-8 md:p-10 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg mb-8 leading-relaxed font-medium italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-6 mt-auto">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="font-display text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground text-primary/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
