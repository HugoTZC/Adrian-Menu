import React from 'react';

export interface EditorialMenuItemProps {
  /** Name of the menu item - typically larger for editorial style */
  name: string;
  /** Description of the menu item */
  description: string;
  /** Price of the item */
  price: number;
  /** Optional subtitle/dish details */
  subtitle?: string;
  /** Whether the item is a specialty */
  isSpecialty?: boolean;
  /** Whether the item is popular */
  isPopular?: boolean;
  /** Additional notes (e.g., "Contains nuts", "GF available") */
  note?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EditorialMenuItem - Elegant menu item display for the Menudo page
 * 
 * Used on the Menudo page for an elevated, editorial dining experience.
 * 
 * Features:
 * - Large, elegant name typography
 * - Editorial description style
 * - Price as a focal point
 * - Optional specialty/popular indicators
 * - Clean, sophisticated layout
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const EditorialMenuItem: React.FC<EditorialMenuItemProps> = ({
  name,
  description,
  price,
  subtitle,
  isSpecialty = false,
  isPopular = false,
  note,
  className = '',
}) => {
  return (
    <div
      className={`
        group
        relative
        py-6
        border-b border-outline-variant/20
        last:border-b-0
        transition-all
        duration-300
        hover:pl-4
        ${className}
      `}
    >
      {/* Decorative corner element */}
      <div className="absolute top-6 left-0 w-0 h-0 border-l-[3px] border-l-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="flex flex-col">
        {/* Header Row */}
        <div className="flex items-baseline justify-between gap-4 mb-2">
          {/* Name with decorative elements */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
              {name}
            </h3>
            {isSpecialty && (
              <span className="text-xs uppercase tracking-widest text-secondary">
                • Specialty
              </span>
            )}
            {isPopular && (
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary text-on-primary-fixed">
                Popular
              </span>
            )}
          </div>
          
          {/* Price - The focal point */}
          <span className="font-headline text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">
            ${price}
          </span>
        </div>

        {/* Subtitle if present */}
        {subtitle && (
          <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant mb-2">
            {subtitle}
          </p>
        )}

        {/* Description - Editorial style */}
        <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Additional Note */}
        {note && (
          <p className="font-body text-xs text-on-surface-variant/70 mt-2 italic">
            {note}
          </p>
        )}
      </div>

      {/* Hover Effect - Subtle glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default EditorialMenuItem;