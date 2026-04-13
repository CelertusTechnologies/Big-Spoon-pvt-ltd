import { motion } from "framer-motion";
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
    <section id="about" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div id="mission" className="absolute -top-20" aria-hidden="true" />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] drop-shadow-md">Why Bigg Spoon</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Your Trusted Cafeteria Partner
          </h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            We take the hassle out of corporate food services so you can focus on running your core business smoothly.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-display text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2"
              >
                10+
              </motion.div>
              <p className="text-white/80 font-medium tracking-wide">Years in Operations</p>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-display text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2"
              >
                100+
              </motion.div>
              <p className="text-white/80 font-medium tracking-wide">Office Cafeterias</p>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-display text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2"
              >
                2500+
              </motion.div>
              <p className="text-white/80 font-medium tracking-wide">Employees Fed Daily</p>
            </div>
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="font-display text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2"
              >
                98%
              </motion.div>
              <p className="text-white/80 font-medium tracking-wide">Client Retention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;;
