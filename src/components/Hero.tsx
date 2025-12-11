import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Building2 } from "lucide-react";
import officeCafeteria from "@/assets/office-cafeteria.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={officeCafeteria}
          alt="Corporate cafeteria buffet line with employees being served"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Corporate Cafeteria Partner in Gurugram</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Complete{" "}
            <span className="text-primary">Corporate Cafeteria</span>{" "}
            Solution
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Big Spoon manages end-to-end cafeteria operations for businesses. 
            From daily meals to snack counters, we keep your workforce well-fed and productive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#menu">View Menu</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">100+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Office Cafeterias</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">5000+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Employees Served Daily</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">10+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
