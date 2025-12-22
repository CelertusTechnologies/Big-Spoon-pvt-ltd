import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Number of Employees: ${formData.employees || 'Not specified'}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Requirements:\n${formData.message || 'No specific requirements mentioned.'}`
    );
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:biggspoon.india@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the inquiry details.",
    });
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", employees: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background animate-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Let's Discuss Your Catering Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to fuel your team with delicious food? Contact us for a free consultation and customized quote.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    601/3, Khandsa Road, Near Simran TVS Showroom,<br />
                    Opp. Sector-10A, Market Gurugram, Haryana-122001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:biggspoon.india@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    biggspoon.india@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <div className="flex flex-col text-muted-foreground">
                    <a href="tel:+919717440336" className="hover:text-primary transition-colors">
                      +91 97174 40336
                    </a>
                    <a href="tel:+919304892315" className="hover:text-primary transition-colors">
                      +91 93048 92315
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Service Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 7:00 AM - 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                    Number of Employees
                  </label>
                  <Input
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    placeholder="e.g., 50-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 97174 40336"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Requirements
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your catering needs..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Inquiry
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
