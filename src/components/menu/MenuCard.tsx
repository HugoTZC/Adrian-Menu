import React from 'react';

export interface MenuCardProps {
  /** Background image URL */
  image: string;
  /** Badge text to display */
  badge: string;
  /** Title of the menu card */
  title: string;
  /** Subtitle/description */
  subtitle?: string;
  /** CTA button text */
  linkText: string;
  /** Link to navigate to */
  href: string;
  /** Variant determines the color scheme */
  variant: 'primary' | 'secondary';
  /** Whether to offset the card for visual interest */
  offset?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * MenuCard - Large card component for selecting menu type
 * 
 * Used on the Menu Selector landing page to display
 * Menudo vs Hamburgers options.
 * 
 * Features:
 * - Image background with smoke overlay
 * - Title and subtitle
 * - CTA button with hover glow effect
 * - Scale animation on hover
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const MenuCard: React.FC<MenuCardProps> = ({
  image,
  badge,
  title,
  subtitle,
  linkText,
  href,
  variant = 'primary',
  offset = false,
  className = '',
}) => {
  const variantClasses = {
    primary: {
      badge: 'bg-primary text-on-primary-fixed',
      button: 'btn-primary hover:bg-primary-dim',
      title: 'text-gradient-ember',
    },
    secondary: {
      badge: 'bg-secondary text-on-secondary',
      button: 'btn-secondary hover:bg-secondary-dim',
      title: 'text-white',
    },
  };

  return (
    <a
      href={href}
      className={`
        group
        relative
        block
        rounded-xl
        overflow-hidden
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(255,209,108,0.2)]
        ${offset ? 'md:translate-y-4' : ''}
        ${className}
      `}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Smoke Overlay */}
      <div className="absolute inset-0 smoke-overlay" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      {/* Ember Glow Effect */}
      <div className="absolute inset-0 bg-ember/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[400px] p-6 md:p-8">
        {/* Badge */}
        <span
          className={`
            inline-block
            px-3 py-1
            rounded-lg
            text-sm font-medium
            w-fit
            mb-4
            ${variantClasses[variant].badge}
          `}
        >
          {badge}
        </span>
        
        {/* Title */}
        <h2 className={`
          font-headline text-3xl md:text-4xl lg:text-5xl 
          font-bold mb-2
          ${variantClasses[variant].title}
        `}>
          {title}
        </h2>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-on-surface-variant text-lg mb-6 max-w-md">
            {subtitle}
          </p>
        )}
        
        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <span className={`
            btn
            inline-flex
            items-center
            justify-center
            px-6 py-3
            rounded-lg
            font-medium
            transition-all
            duration-300
            ${variantClasses[variant].button}
          `}>
            {linkText}
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </a>
  );
};

export default MenuCard;
