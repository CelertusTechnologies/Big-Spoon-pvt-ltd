import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://germanysoon.com/api/big-spoon/request-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            employees: formData.employees,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      toast({
        title: "Quote request submitted",
        description: "Thank you! We will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description:
          "We couldn't submit your request. Please try again in a moment.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
              Let's Discuss Your Catering Needs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              Ready to fuel your team with delicious food? Contact us for a free consultation and customized quote tailored specifically to your company.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 border border-border">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    601/3, Khandsa Road, Near Simran TVS Showroom,<br />
                    Opp. Sector-10A, Market Gurugram, Haryana-122001
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Email</h4>
                  <a href="mailto:biggspoon.india@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    biggspoon.india@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 border border-border">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Phone</h4>
                  <div className="flex flex-col text-muted-foreground">
                    <a href="tel:+919773549599" className="hover:text-primary transition-colors text-lg font-medium">
                      +91 97735 49599
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0 border border-border">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Service Hours</h4>
                  <p className="text-muted-foreground text-lg">
                    24 × 7 Operational
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-elevated"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                Request a Quote
              </h3>
              <p className="text-muted-foreground">Fill out the form below and our sales team will reach out.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    required
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="employees" className="block text-sm font-semibold text-foreground mb-2">
                    Number of Employees
                  </label>
                  <Input
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    placeholder="e.g., 50-100"
                    className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  required
                  className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your Requirements
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your catering needs..."
                  rows={4}
                  className="resize-none bg-secondary/50 border-transparent focus:bg-white transition-colors"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" variant="default" size="xl" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-glow">
                  Send Inquiry
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
