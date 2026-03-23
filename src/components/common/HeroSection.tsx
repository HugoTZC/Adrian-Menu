import React from 'react';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaOnClick?: () => void;
  className?: string;
}

/**
 * HeroSection - A hero section component for page headers
 * 
 * Features:
 * - Background image or gradient
 * - Smoke overlay effect
 * - Title in Playfair Display or Epilogue
 * - Subtitle/description
 * - Optional CTA button
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
  ctaOnClick,
  className = '',
}) => {
  const backgroundStyle = image
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(14, 14, 14, 0.3), rgba(14, 14, 14, 0.95)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0e0e0e 50%, #20201f 100%)',
      };

  return (
    <section
      className={`
        relative
        min-h-[60vh]
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-4
        py-16
        md:py-24
        lg:py-32
        overflow-hidden
        ${className}
      `}
      style={backgroundStyle}
    >
      {/* Smoke Overlay Effect */}
      <div className="absolute inset-0 smoke-overlay pointer-events-none" />

      {/* Ember Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          <span className="text-gradient-ember">{title}</span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        {ctaText && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {ctaLink ? (
              <a
                href={ctaLink}
                className="
                  btn-primary
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:shadow-[0_0_20px_rgba(255,209,108,0.3)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                {ctaText}
              </a>
            ) : ctaOnClick ? (
              <button
                onClick={ctaOnClick}
                className="
                  btn-primary
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:shadow-[0_0_20px_rgba(255,209,108,0.3)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                {ctaText}
              </button>
            ) : null}
          </div>
        )}
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
