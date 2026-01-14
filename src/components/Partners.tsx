import LogoLoop from './LogoLoop';

/**
 * Partners Component - Displays a scrolling logo carousel of company partners
 * 
 * TO ADD YOUR COMPANY LOGOS:
 * 1. Add your logo images to: src/assets/companies/
 *    Example: company1.png, company2.png, etc.
 * 
 * 2. Import them at the top of this file:
 *    import company1 from '@/assets/companies/company1.png';
 *    import company2 from '@/assets/companies/company2.png';
 *    ... etc
 * 
 * 3. Update the companyLogos array below with your imported images and company info
 */

// Import your company logos here (uncomment and add when you have logos):
// import company1 from '@/assets/companies/company1.png';
// import company2 from '@/assets/companies/company2.png';
// import company3 from '@/assets/companies/company3.png';
// import company4 from '@/assets/companies/company4.png';
// import company5 from '@/assets/companies/company5.png';
// import company6 from '@/assets/companies/company6.png';

const Partners = () => {
  // Update this array with your actual company logos
  // Replace the placeholder entries with your imported images
  const companyLogos = [
    // Example format (replace with your actual logos):
    // { src: company1, alt: "Company Name", href: "https://company-website.com", title: "Company Name" },
    
    // Placeholder entries - replace these when you add your logos
    { 
      src: "/src/assets/companies/company1.png", 
      alt: "Company 1", 
      href: "#",
      title: "Company 1"
    },
    { 
      src: "/src/assets/companies/company2.png", 
      alt: "Company 2", 
      href: "#",
      title: "Company 2"
    },
    { 
      src: "/src/assets/companies/company3.png", 
      alt: "Company 3", 
      href: "#",
      title: "Company 3"
    },
    { 
      src: "/src/assets/companies/company4.png", 
      alt: "Company 4", 
      href: "#",
      title: "Company 4"
    },
    { 
      src: "/src/assets/companies/company5.png", 
      alt: "Company 5", 
      href: "#",
      title: "Company 5"
    },
    { 
      src: "/src/assets/companies/company6.png", 
      alt: "Company 6", 
      href: "#",
      title: "Company 6"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Valued Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to serve leading companies across Gurugram and NCR
          </p>
        </div>

        {/* Logo Loop */}
        <div className="relative py-8">
          <LogoLoop
            logos={companyLogos}
            speed={120}
            direction="left"
            logoHeight={64}
            gap={60}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Trusted company partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
