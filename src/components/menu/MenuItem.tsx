import React from 'react';

export interface MenuItemProps {
  /** Name of the menu item */
  name: string;
  /** Description of the menu item */
  description: string;
  /** Price of the item */
  price: number;
  /** Optional image URL */
  image?: string;
  /** Whether the item is popular */
  isPopular?: boolean;
  /** Whether the item is new */
  isNew?: boolean;
  /** Tags for the item (e.g., "Spicy", "Vegetarian") */
  tags?: string[];
  /** Variant for display style */
  variant?: 'with-image' | 'text-only';
  /** Whether to show image on the left (for with-image variant) */
  imagePosition?: 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * MenuItem - Individual menu item display component
 * 
 * Used on the Hamburgers page for individual items.
 * 
 * Features:
 * - Name, description, price
 * - Optional image
 * - Variant for items with images vs text-only
 * - Popular/New badges
 * - Tags support
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  isPopular = false,
  isNew = false,
  tags = [],
  variant = 'text-only',
  imagePosition = 'left',
  className = '',
  onClick,
}) => {
  const hasImage = variant === 'with-image' && image;

  return (
    <div
      className={`
        group
        relative
        bg-surface-container-low
        rounded-lg
        overflow-hidden
        transition-all
        duration-300
        hover:bg-surface-container
        hover:shadow-[0_0_20px_rgba(255,209,108,0.1)]
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <div className={`flex ${hasImage && imagePosition === 'right' ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
        {/* Image Section */}
        {hasImage && (
          <div className={`
            relative 
            w-full 
            ${imagePosition === 'right' ? 'md:w-40' : 'md:w-40'}
            h-40 
            md:h-32 
            overflow-hidden
            flex-shrink-0
          `}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Smoke Edge Effect */}
            <div className={`
              absolute inset-0 
              bg-gradient-to-${imagePosition === 'right' ? 'to-left' : 'to-right'}
              from-transparent 
              to-surface-container-low
              md:block hidden
            `} />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Header Row: Name and Badges */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-headline text-lg font-bold text-white leading-tight">
              {name}
            </h4>
            <div className="flex gap-1.5 flex-shrink-0">
              {isPopular && (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary text-on-primary-fixed">
                  Popular
                </span>
              )}
              {isNew && (
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-secondary text-on-secondary">
                  Nuevo
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-on-surface-variant text-sm mb-3 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 rounded text-xs bg-surface-container-high text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-auto">
            <span className="font-headline text-xl font-bold text-primary">
              ${price}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default MenuItem;