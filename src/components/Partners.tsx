import LogoLoop from './LogoLoop';

const Partners = () => {
  const companyLogos = [
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
    {
      src: "/src/assets/companies/company7.jpeg",
      alt: "Company 7",
      href: "#",
      title: "Company 7"
    },
    {
      src: "/src/assets/companies/company8.png",
      alt: "Company 8",
      href: "#",
      title: "Company 8"
    },
    {
      src: "/src/assets/companies/company9.png",
      alt: "Company 9",
      href: "#",
      title: "Company 9"
    },
    {
      src: "/src/assets/companies/company10.png",
      alt: "Company 10",
      href: "#",
      title: "Company 10"
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
