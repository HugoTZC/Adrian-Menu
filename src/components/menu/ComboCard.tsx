import React from 'react';

export interface ComboCardProps {
  /** Image URL for the combo */
  image?: string;
  /** Name of the combo */
  name: string;
  /** Description of the combo (list of items) */
  items: string[];
  /** Price of the combo */
  price: number;
  /** Original combined price (for showing savings) */
  originalPrice?: number;
  /** Savings amount or percentage */
  savings?: number | string;
  /** Badge text (e.g., "Popular", "New") */
  badge?: string;
  /** Badge variant */
  badgeVariant?: 'primary' | 'secondary' | 'tertiary';
  /** Whether the combo is popular */
  isPopular?: boolean;
  /** Whether the combo is new */
  isNew?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * ComboCard - Card component for combo menu items
 * 
 * Used on the Hamburgers page to display meal combos.
 * 
 * Features:
 * - Optional image
 * - Combo name and description (list of items)
 * - Price with savings badge
 * - Popular/New badges
 * - Hover effect
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const ComboCard: React.FC<ComboCardProps> = ({
  image,
  name,
  items,
  price,
  originalPrice,
  savings,
  badge,
  badgeVariant = 'primary',
  isPopular = false,
  isNew = false,
  className = '',
  onClick,
}) => {
  const badgeClasses = {
    primary: 'bg-primary text-on-primary-fixed',
    secondary: 'bg-secondary text-on-secondary',
    tertiary: 'bg-tertiary text-on-tertiary-container',
  };

  const hasBadge = badge || isPopular || isNew;
  const displayBadge = badge || (isPopular ? 'Popular' : '') || (isNew ? 'Nuevo' : '');

  return (
    <div
      className={`
        group
        relative
        bg-surface-container
        rounded-xl
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-[0_0_30px_rgba(255,209,108,0.15)]
        hover:scale-[1.01]
        cursor-pointer
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Badge (if any) */}
      {hasBadge && (
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`
              inline-block
              px-3 py-1
              rounded-lg
              text-xs font-semibold uppercase tracking-wider
              ${badgeClasses[badgeVariant]}
            `}
          >
            {displayBadge}
          </span>
        </div>
      )}

      {/* Savings Badge */}
      {savings && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white">
            {typeof savings === 'number' ? `Ahorra $${savings}` : savings}
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        {image && (
          <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Smoke Edge Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container md:hidden" />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 p-5 flex flex-col justify-center">
          {/* Combo Name */}
          <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-3">
            {name}
          </h3>

          {/* Items List */}
          <ul className="space-y-1.5 mb-4">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center gap-2 text-on-surface-variant text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Price Section */}
          <div className="flex items-baseline gap-3 mt-auto">
            {originalPrice && (
              <span className="text-on-surface-variant text-sm line-through">
                ${originalPrice}
              </span>
            )}
            <span className="font-headline text-2xl md:text-3xl font-bold text-primary">
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

export default ComboCard;