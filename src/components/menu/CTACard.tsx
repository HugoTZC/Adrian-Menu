import React from 'react';

export interface CTACardProps {
  /** Title of the CTA card */
  title: string;
  /** Description text */
  description?: string;
  /** Button text */
  buttonText: string;
  /** Button link */
  buttonLink?: string;
  /** Button click handler */
  buttonOnClick?: () => void;
  /** Icon to display */
  icon?: string;
  /** Background image (optional) */
  backgroundImage?: string;
  /** Variant style */
  variant?: 'default' | 'featured';
  /** Additional CSS classes */
  className?: string;
}

/**
 * CTACard - Call-to-action card component
 * 
 * Used for promotional content throughout the menu pages.
 * 
 * Features:
 * - Title and description
 * - Button with link or click handler
 * - Optional background image
 * - Glass panel effect
 * - Hover animations
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const CTACard: React.FC<CTACardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonOnClick,
  icon,
  backgroundImage,
  variant = 'default',
  className = '',
}) => {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`
        group
        relative
        rounded-xl
        overflow-hidden
        transition-all
        duration-300
        ${isFeatured 
          ? 'bg-surface-container-high shadow-[0_0_40px_rgba(255,209,108,0.15)]' 
          : 'glass-panel'
        }
        hover:scale-[1.01]
        ${className}
      `}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(to bottom, rgba(14, 14, 14, 0.85), rgba(14, 14, 14, 0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Content Container */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center">
        {/* Icon */}
        {icon && (
          <div className="mb-4">
            <span className="material-symbols-outlined text-4xl text-primary">
              {icon}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className={`
          font-headline 
          text-2xl md:text-3xl 
          font-bold 
          text-white 
          mb-3
          ${isFeatured ? 'text-gradient-ember' : ''}
        `}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="font-body text-on-surface-variant text-base mb-6 max-w-md">
            {description}
          </p>
        )}

        {/* Button */}
        {buttonLink ? (
          <a
            href={buttonLink}
            className={`
              inline-flex
              items-center
              justify-center
              px-8
              py-3
              rounded-lg
              font-medium
              transition-all
              duration-300
              btn-primary
              hover:shadow-[0_0_20px_rgba(255,209,108,0.4)]
              hover:scale-[1.02]
              active:scale-[0.98]
            `}
          >
            {buttonText}
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        ) : buttonOnClick ? (
          <button
            onClick={buttonOnClick}
            className={`
              inline-flex
              items-center
              justify-center
              px-8
              py-3
              rounded-lg
              font-medium
              transition-all
              duration-300
              btn-primary
              hover:shadow-[0_0_20px_rgba(255,209,108,0.4)]
              hover:scale-[1.02]
              active:scale-[0.98]
            `}
          >
            {buttonText}
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        ) : null}
      </div>

      {/* Decorative Elements */}
      {isFeatured && (
        <>
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />
          
          {/* Ember Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        </>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default CTACard;