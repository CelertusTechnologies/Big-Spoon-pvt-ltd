import { Building2, Clock, Leaf, Shield, Users, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Turnkey Cafeteria Setup",
    description: "From equipment installation to staffing, we handle your entire cafeteria setup.",
  },
  {
    icon: Users,
    title: "Trained Service Staff",
    description: "Professional kitchen and service staff deployed at your premises.",
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    description: "Fully compliant with food safety regulations and hygiene standards.",
  },
  {
    icon: Clock,
    title: "Reliable Operations",
    description: "Consistent, punctual service every single day without fail.",
  },
  {
    icon: Leaf,
    title: "Quality Sourcing",
    description: "Fresh ingredients sourced daily from trusted suppliers.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective",
    description: "Transparent pricing models that fit your company's budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden animate-section">
      <div id="mission" className="absolute -top-20" aria-hidden="true" />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Bigg Spoon</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Your Trusted Cafeteria Partner
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            We take the hassle out of corporate food services so you can focus on running your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-secondary-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/10 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-secondary-foreground/70">Years in Operations</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-secondary-foreground/70">Office Cafeterias</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-secondary-foreground/70">Employees Fed Daily</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-secondary-foreground/70">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
