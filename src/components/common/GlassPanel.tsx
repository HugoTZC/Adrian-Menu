import React from 'react';

export type GlassPanelVariant = 'subtle' | 'medium' | 'strong';

export interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: GlassPanelVariant;
}

/**
 * GlassPanel - A reusable glassmorphism container component
 * 
 * Follows the "Ember & Ash Editorial" design system with
 * backdrop blur and subtle border effects.
 */
export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  variant = 'medium',
}) => {
  const variantClasses: Record<GlassPanelVariant, string> = {
    subtle: 'bg-surface-variant/20 backdrop-blur-[8px] border border-outline-variant/15',
    medium: 'glass-panel',
    strong: 'glass-panel-strong',
  };

  return (
    <div
      className={`
        rounded-lg
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
