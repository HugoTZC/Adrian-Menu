/**
 * VAMM Menu - Type Definitions
 */

// Menu Item interface
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  tags?: string[];
  category?: string;
}

// Combo Item interface
export interface ComboItem {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  savings?: number;
  image?: string;
}

// Menu Section interface
export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

// Sidebar Item interface
export interface SidebarItem {
  icon?: string;
  label: string;
  href: string;
}

// Navigation Item interface
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

// Menu Category interface
export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// Menu Page interface
export interface MenuPage {
  id: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  badge?: string;
  categories: MenuCategory[];
  sidebar?: {
    accompaniments?: MenuItem[];
    drinks?: MenuItem[];
    cta?: {
      title: string;
      description: string;
      info: string;
    };
  };
}

// Hero Section Props
export interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant: 'primary' | 'secondary';
  };
  height?: 'tall' | 'medium';
  overlayType?: 'smoke' | 'steam';
}

// Menu Card Props (Home Page)
export interface MenuCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  linkText: string;
  href: string;
  variant: 'primary' | 'secondary';
  offset?: boolean;
}

// Badge Props
export interface BadgeProps {
  text: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

// Price Tag Props
export interface PriceTagProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
}
