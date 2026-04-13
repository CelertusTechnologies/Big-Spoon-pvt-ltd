import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Logo component - shows logo image from public folder
const LogoComponent = () => {
  const [imgError, setImgError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  // All possible logo file names to try - check these files in public folder
  const sources = [
    "/logo.png",
    "/logo.svg", 
    "/BS-logo.png",
    "/BS-logo.svg",
    "/bigg-spoon-logo.png",
    "/bigg-spoon-logo.svg",
    "/logo.jpg",
    "/logo.jpeg",
  ];

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (currentSrcIndex < sources.length - 1) {
      setCurrentSrcIndex(currentSrcIndex + 1);
      setImgLoaded(false);
    } else {
      setImgError(true);
    }
  };

  const handleLoad = () => {
    setImgLoaded(true);
    setImgError(false);
  };

  if (imgError) {
    return (
      <span className="font-display text-xl md:text-2xl font-bold text-black whitespace-nowrap drop-shadow-lg">
        Bigg Spoon
      </span>
    );
  }

  return (
    <div className="relative flex items-center gap-1.5">
      <img 
        src={sources[currentSrcIndex]} 
        alt="Bigg Spoon Logo" 
        className={`h-8 md:h-10 w-auto object-contain max-w-[64px] transition-opacity duration-200 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={handleError}
        onLoad={handleLoad}
        style={{ 
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
        }}
      />
      <span className="font-display text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
        Bigg Spoon
      </span>
      {!imgLoaded && !imgError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-white/90 backdrop-blur-lg shadow-soft border-b border-border/50" : "py-6 bg-transparent"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Section (Always on left) */}
          <div className={`transition-all duration-500 ${scrolled ? "opacity-100 translate-x-0" : "md:opacity-0 md:-translate-x-10 md:hidden"} flex items-center`}>
            <a href="#" className="flex items-center min-w-[120px]">
              <LogoComponent />
            </a>
          </div>

          {/* Desktop Navigation Pill (Centered when NOT scrolled, disappears when scrolled as links move to center) */}
          <div className={`hidden md:flex transition-all duration-500 items-center justify-center absolute left-1/2 -translate-x-1/2 w-full max-w-fit ${scrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}>
            <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/90 shadow-elevated border border-white/20 backdrop-blur-md">
              <a href="#" className="flex items-center pr-4 border-r border-border/40">
                <span className="font-display text-xl font-bold text-primary tracking-tight">Bigg Spoon</span>
              </a>
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolled Desktop Links (Appears in center when scrolled) */}
          <div className={`hidden md:flex transition-all duration-500 items-center justify-center absolute left-1/2 -translate-x-1/2 ${scrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
             <div className="flex items-center gap-8 xl:gap-12">
               {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-semibold text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
             </div>
          </div>

          {/* Desktop Right Action Area (Quote Button appears when scrolled) */}
          <div className={`hidden md:flex items-center justify-end transition-all duration-500 ${scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}>
             <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-glow hover:shadow-none hover:scale-105 transition-all">Get a Quote</a>
          </div>

          {/* Mobile Menu Button - Always visible on mobile */}
          <button
            className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden origin-top"
            >
              <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-xl px-6 py-8 rounded-3xl shadow-elevated border border-border">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-bold py-3 text-lg border-b border-border/40"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)} className="mt-8 bg-primary text-white text-center py-4 rounded-xl font-bold text-lg shadow-glow shadow-primary/30">
                  Request Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
