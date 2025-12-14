import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#menu", label: "Menus" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Logo */}
          <a
            href="#"
            className="md:hidden font-display text-2xl font-bold text-primary-foreground"
          >
            Big Spoon
          </a>

          {/* Desktop Navigation Pill */}
          <div className="hidden md:flex items-center gap-8 px-10 py-2.5 rounded-full shadow-elevated bg-secondary/90 text-secondary-foreground border border-white/10 mx-auto animate-fade-in">
            <span className="font-display text-xl font-bold text-primary-foreground">
              Big Spoon
            </span>
            <div className="w-px h-6 bg-secondary-foreground/20" />
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors font-semibold tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4 bg-secondary/90 text-secondary-foreground px-4 py-6 rounded-2xl shadow-elevated">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors font-semibold py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
