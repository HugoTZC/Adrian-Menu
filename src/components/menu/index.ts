/**
 * Menu Components
 * 
 * A collection of menu-specific components following the "Ember & Ash Editorial" design system.
 * 
 * @packageDocumentation
 */

// MenuCard - Large card component for selecting menu type (Menudo vs Hamburgers)
export { MenuCard, default as MenuCardDefault } from './MenuCard';
export type { MenuCardProps } from './MenuCard';

// ComboCard - Card component for combo menu items
export { ComboCard, default as ComboCardDefault } from './ComboCard';
export type { ComboCardProps } from './ComboCard';

// MenuItem - Individual menu item display
export { MenuItem, default as MenuItemDefault } from './MenuItem';
export type { MenuItemProps } from './MenuItem';

// EditorialMenuItem - Elegant menu item display for the Menudo page
export { EditorialMenuItem, default as EditorialMenuItemDefault } from './EditorialMenuItem';
export type { EditorialMenuItemProps } from './EditorialMenuItem';

// SidebarItem - Navigation item for menu sections sidebar
export { SidebarItem, default as SidebarItemDefault } from './SidebarItem';
export type { SidebarItemProps } from './SidebarItem';

// CTACard - Call-to-action card component
export { CTACard, default as CTACardDefault } from './CTACard';
export type { CTACardProps } from './CTACard';

// QuoteSection - Editorial quote component
export { QuoteSection, default as QuoteSectionDefault } from './QuoteSection';
export type { QuoteSectionProps } from './QuoteSection';