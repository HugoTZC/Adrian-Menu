import React from 'react';

export interface QuoteSectionProps {
  /** The quote text */
  quote: string;
  /** Author of the quote */
  author: string;
  /** Optional author title/credentials */
  authorTitle?: string;
  /** Optional image of the author */
  authorImage?: string;
  /** Rating (1-5 stars) */
  rating?: number;
  /** Whether to use a featured/featured style */
  variant?: 'default' | 'featured';
  /** Additional CSS classes */
  className?: string;
}

/**
 * QuoteSection - Editorial quote component
 * 
 * Used on the Menudo page for testimonials and customer reviews.
 * 
 * Features:
 * - Quote text with quotation marks
 * - Author attribution
 * - Optional rating stars
 * - Optional author image
 * - Elegant editorial styling
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const QuoteSection: React.FC<QuoteSectionProps> = ({
  quote,
  author,
  authorTitle,
  authorImage,
  rating,
  variant = 'default',
  className = '',
}) => {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`
        group
        relative
        ${isFeatured ? 'py-8' : 'py-6'}
        ${className}
      `}
    >
      {/* Large decorative quote mark */}
      <div className="absolute -top-2 -left-2 text-6xl md:text-7xl text-primary/20 font-display select-none">
        "
      </div>

      {/* Quote Content */}
      <div className="relative z-10">
        {/* Quote Text */}
        <blockquote className={`
          font-display
          ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
          text-white
          leading-relaxed
          mb-6
          italic
        `}>
          {quote}
        </blockquote>

        {/* Rating Stars */}
        {rating && (
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`
                  material-symbols-outlined 
                  text-lg
                  ${index < rating ? 'text-primary' : 'text-outline-variant'}
                `}
              >
                {index < rating ? 'star' : 'star_border'}
              </span>
            ))}
          </div>
        )}

        {/* Author Section */}
        <div className="flex items-center gap-4">
          {/* Author Image */}
          {authorImage && (
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
              <img
                src={authorImage}
                alt={author}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Author Info */}
          <div>
            <p className="font-headline text-base font-bold text-white">
              {author}
            </p>
            {authorTitle && (
              <p className="font-body text-sm text-on-surface-variant">
                {authorTitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-60" />

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-4 pointer-events-none" />
    </div>
  );
};

export default QuoteSection;