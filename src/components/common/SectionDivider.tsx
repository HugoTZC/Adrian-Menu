import React from 'react';

export type SectionDividerVariant = 'ember' | 'line' | 'dotted';

export interface SectionDividerProps {
  variant?: SectionDividerVariant;
  className?: string;
}

/**
 * SectionDivider - A decorative divider component
 * 
 * Provides different visual styles for section separation:
 * - ember: Flame-themed divider using CSS/SVG
 * - line: Simple horizontal line
 * - dotted: Dotted line separator
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'ember',
  className = '',
}) => {
  const renderDivider = () => {
    switch (variant) {
      case 'ember':
        return (
          <div className="flex items-center justify-center gap-2">
            {/* Left flame */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary/60"
            >
              <path
                d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 8C12 8 10 10 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10 12 8 12 8Z"
                fill="currentColor"
                className="text-primary/80"
              />
              <path
                d="M12 14C12 14 9 16 9 18C9 19.1046 10.2383 20 12 20C13.7617 20 15 19.1046 15 18C15 16 12 14 12 14Z"
                fill="currentColor"
              />
            </svg>

            {/* Center line with gradient */}
            <div className="flex-1 h-[1px] max-w-[100px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Ember dot */}
            <div className="w-2 h-2 rounded-full bg-primary/80 animate-[ember-glow_2s_ease-in-out_infinite_alternate]" />

            {/* Center line with gradient */}
            <div className="flex-1 h-[1px] max-w-[100px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Right flame (mirrored) */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary/60"
            >
              <path
                d="M12 2C12 2 16 6 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 6 12 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 8C12 8 14 10 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10 12 8 12 8Z"
                fill="currentColor"
                className="text-primary/80"
              />
              <path
                d="M12 14C12 14 15 16 15 18C15 19.1046 13.7617 20 12 20C10.2383 20 9 19.1046 9 18C9 16 12 14 12 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );

      case 'line':
        return (
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-outline to-transparent" />
        );

      case 'dotted':
        return (
          <div className="w-full flex items-center justify-center gap-2">
            <div className="flex-1 h-[1px] border-t border-dotted border-outline-variant/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
            <div className="flex-1 h-[1px] border-t border-dotted border-outline-variant/40" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        w-full
        py-8
        md:py-12
        ${className}
      `}
      role="separator"
      aria-hidden="true"
    >
      {renderDivider()}
    </div>
  );
};

export default SectionDivider;
