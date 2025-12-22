import { useState } from "react";
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
    console.log(`Logo load failed: ${target.src}, trying next...`);
    
    if (currentSrcIndex < sources.length - 1) {
      // Try next source
      setCurrentSrcIndex(currentSrcIndex + 1);
      setImgLoaded(false);
    } else {
      // All sources failed, show text
      console.log("All logo sources failed, showing text fallback");
      setImgError(true);
    }
  };

  const handleLoad = () => {
    console.log(`Logo loaded successfully: ${sources[currentSrcIndex]}`);
    setImgLoaded(true);
    setImgError(false);
  };

  // Show text fallback only if all images fail
  if (imgError) {
    return (
      <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground whitespace-nowrap drop-shadow-lg">
        Bigg Spoon
      </span>
    );
  }

  // Show logo image
  return (
    <div className="relative flex items-center justify-center">
      <img 
        src={sources[currentSrcIndex]} 
        alt="Bigg Spoon Logo" 
        className={`h-12 md:h-14 w-auto object-contain max-w-[150px] min-h-[48px] transition-opacity duration-200 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={handleError}
        onLoad={handleLoad}
        style={{ 
          imageRendering: 'auto', 
          display: 'block',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          visibility: 'visible',
          maxWidth: '150px',
          height: 'auto'
        }}
      />
      {!imgLoaded && !imgError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

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
            className="md:hidden flex items-center min-w-[120px]"
          >
            <LogoComponent />
          </a>

          {/* Desktop Navigation Pill */}
          <div className="hidden md:flex items-center gap-8 px-10 py-2.5 rounded-full shadow-elevated bg-secondary/90 text-secondary-foreground border border-white/10 mx-auto animate-fade-in">
            <a href="#" className="flex items-center min-w-[120px] justify-center">
              <LogoComponent />
            </a>
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
