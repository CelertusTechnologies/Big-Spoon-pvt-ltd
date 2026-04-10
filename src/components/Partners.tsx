import LogoLoop from './LogoLoop';
import {
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
  company10,
  company11,
} from '@/assets/companies';

const Partners = () => {
  const companyLogos = [
    {
      src: company1,
      alt: "Company 1",
      href: "#",
      title: "Company 1"
    },
    {
      src: company2,
      alt: "Company 2",
      href: "#",
      title: "Company 2"
    },
    {
      src: company3,
      alt: "Company 3",
      href: "#",
      title: "Company 3"
    },
    {
      src: company4,
      alt: "Company 4",
      href: "#",
      title: "Company 4"
    },
    {
      src: company5,
      alt: "Company 5",
      href: "#",
      title: "Company 5"
    },
    {
      src: company6,
      alt: "Company 6",
      href: "#",
      title: "Company 6"
    },
    {
      src: company7,
      alt: "Company 7",
      href: "#",
      title: "Company 7"
    },
    {
      src: company8,
      alt: "Company 8",
      href: "#",
      title: "Company 8"
    },
    {
      src: company9,
      alt: "Company 9",
      href: "#",
      title: "Company 9"
    },
    {
      src: company10,
      alt: "Company 10",
      href: "#",
      title: "Company 10"
    },
    {
      node: <img src={company11} alt="Company 11" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />,
      href: "#",
      title: "Company 11"
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
