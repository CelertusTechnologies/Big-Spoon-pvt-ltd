import { ReactNode, useState, useEffect, useRef } from 'react';

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number; // speed when hovering (0 = pause)
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop = ({
  logos,
  speed = 20,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [animationSpeed] = useState(speed);
  const [contentSize, setContentSize] = useState(0);


  // Measure the actual content size for seamless animation
  useEffect(() => {
    const measureContent = () => {
      if (measureRef.current) {
        const isHorizontal = direction === 'left' || direction === 'right';
        const size = isHorizontal
          ? measureRef.current.scrollWidth
          : measureRef.current.scrollHeight;
        if (size > 0) {
          setContentSize(size);
        }
      }
    };

    // Measure after content is rendered — use longer delay for mobile image loads
    const timeout = setTimeout(measureContent, 300);
    const timeout2 = setTimeout(measureContent, 1000);
    const observer = new ResizeObserver(measureContent);

    if (measureRef.current) {
      observer.observe(measureRef.current);
      // Re-measure when images finish loading
      const imgs = measureRef.current.querySelectorAll('img');
      imgs.forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', measureContent);
        }
      });
    }

    // Also measure on window resize and orientation change
    window.addEventListener('resize', measureContent);
    window.addEventListener('orientationchange', measureContent);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      observer.disconnect();
      window.removeEventListener('resize', measureContent);
      window.removeEventListener('orientationchange', measureContent);
    };
  }, [logos, direction, logoHeight, gap]);

  const isHorizontal = direction === 'left' || direction === 'right';
  const isVertical = direction === 'up' || direction === 'down';

  // Duplicate logos 2 times for seamless infinite loop
  // We'll animate by exactly one set's width, so when it loops, it shows the duplicate
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: isHorizontal ? `${logoHeight}px` : 'auto',
    overflow: 'hidden',
    maskImage: fadeOut
      ? isHorizontal
        ? `linear-gradient(to ${direction === 'left' ? 'right' : 'left'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
        : `linear-gradient(to ${direction === 'up' ? 'bottom' : 'top'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
      : undefined,
    WebkitMaskImage: fadeOut
      ? isHorizontal
        ? `linear-gradient(to ${direction === 'left' ? 'right' : 'left'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
        : `linear-gradient(to ${direction === 'up' ? 'bottom' : 'top'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
      : undefined,
  };

  // Calculate animation duration based on actual content size
  const animationDuration = contentSize > 0
    ? contentSize / animationSpeed
    : 20; // fallback duration

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isHorizontal ? 'row' : 'column',
    gap: `${gap}px`,
    width: 'fit-content',
    willChange: 'transform',
    transform: 'translateZ(0)',
    animation: `scroll-${direction} ${animationDuration}s linear infinite`,
  };

  const logoStyle: React.CSSProperties = {
    height: isHorizontal ? `${logoHeight}px` : 'auto',
    width: isHorizontal ? 'auto' : `${logoHeight}px`,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: scaleOnHover ? 'transform 0.3s ease' : undefined,
  };

  const getKeyframes = () => {
    const translateValue = isHorizontal
      ? `translate3d(-${contentSize}px, 0, 0)`
      : `translate3d(0, -${contentSize}px, 0)`;

    return `
    @keyframes scroll-${direction} {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: ${translateValue};
      }
    }
  `;
  };


  // Render a single logo
  const renderLogo = (logo: Logo, logoIndex: number, uniqueKey: string) => {
    const content = logo.node ? (
      logo.node
    ) : logo.src ? (
      <img
        src={logo.src}
        alt={logo.alt || logo.title || `Logo ${logoIndex + 1}`}
        style={{
          height: '100%',
          width: 'auto',
          objectFit: 'contain',
          opacity: 1,
          pointerEvents: 'auto',
        }}
      />
    ) : null;

    return (
      <div
        key={uniqueKey}
        style={logoStyle}
        className={scaleOnHover ? 'hover:scale-110' : ''}
      >
        {logo.href ? (
          <a
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <style>{getKeyframes()}</style>
      {/* Hidden measurement container - renders first set to measure width */}
      <div
        ref={measureRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
          height: isHorizontal ? `${logoHeight}px` : 'auto',
          width: isHorizontal ? 'auto' : `${logoHeight}px`,
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          gap: `${gap}px`,
        }}
      >
        {logos.map((logo, idx) => {
          const content = logo.node ? (
            logo.node
          ) : logo.src ? (
            <img
              src={logo.src}
              alt={logo.alt || logo.title || `Logo ${idx + 1}`}
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          ) : null;
          return (
            <div key={`measure-${idx}`} style={logoStyle}>
              {content}
            </div>
          );
        })}
      </div>

      <div
        ref={containerRef}
        style={containerStyle}
        aria-label={ariaLabel}
      >
        <div ref={trackRef} style={trackStyle}>
          {duplicatedLogos.map((logo, index) => {
            const setIndex = Math.floor(index / logos.length);
            const logoIndex = index % logos.length;
            const uniqueKey = `${logo.title || logo.alt || logoIndex}-${setIndex}-${index}`;
            return renderLogo(logo, logoIndex, uniqueKey);
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;
