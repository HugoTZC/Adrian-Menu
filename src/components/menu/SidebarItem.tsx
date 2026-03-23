import React from 'react';

export interface SidebarItemProps {
  /** Icon name (material symbol) */
  icon?: string;
  /** Label text */
  label: string;
  /** Target section ID to scroll to */
  href: string;
  /** Whether this item is currently active */
  isActive?: boolean;
  /** Click handler - default scrolls to href */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SidebarItem - Navigation item for menu sections sidebar
 * 
 * Used on the Hamburgers page sidebar for section navigation.
 * 
 * Features:
 * - Icon and label display
 * - Active state styling
 * - Click to scroll to section
 * - Smooth scroll behavior
 * 
 * Follows the "Ember & Ash Editorial" design system.
 */
export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  isActive = false,
  onClick,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Scroll to the target section
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        group
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-lg
        transition-all
        duration-300
        cursor-pointer
        text-decoration-none
        ${
          isActive
            ? 'bg-primary/10 text-primary border-l-2 border-primary'
            : 'text-on-surface-variant hover:text-white hover:bg-surface-container-high'
        }
        ${className}
      `}
    >
      {/* Icon */}
      {icon && (
        <span 
          className={`
            material-symbols-outlined 
            text-xl 
            transition-transform 
            duration-300 
            group-hover:scale-110
            ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-white'}
          `}
        >
          {icon}
        </span>
      )}

      {/* Label */}
      <span className={`
        font-body 
        text-sm 
        font-medium
        transition-all 
        duration-300
        ${isActive ? 'text-primary' : ''}
      `}>
        {label}
      </span>

      {/* Active indicator dot */}
      {isActive && (
        <span className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
      )}
    </a>
  );
};

export default SidebarItem;