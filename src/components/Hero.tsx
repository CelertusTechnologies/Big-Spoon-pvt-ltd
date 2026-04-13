import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import buffetSetup from "@/assets/buffet-setup.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={buffetSetup}
          alt="Overhead view of corporate buffet counter with Indian dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 md:py-20 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm shadow-glow text-white px-5 py-2.5 rounded-full mb-8">
            <Building2 className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Trusted Corporate Cafeteria Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative drop-shadow-sm">
              Corporate Cafeteria
            </span>{" "}
            Solution
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeIn} className="text-lg md:text-2xl text-white/90 mb-10 font-sans font-light max-w-xl leading-relaxed">
            Bigg Spoon manages end-to-end cafeteria operations for businesses.
            From daily meals to snack counters, we keep your workforce well-fed and productive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn} className="flex flex-wrap gap-5 mb-14">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-white shadow-glow transition-all hover:scale-105 text-lg h-14 px-8 rounded-full" asChild>
              <a href="#contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Building2, value: "100+", label: "Office Cafeterias" },
              { icon: Users, value: "2500+", label: "Employees Served Daily" },
              { icon: Clock, value: "10+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center md:text-left bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-soft"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                  <span className="font-display text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-sm md:text-base text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
