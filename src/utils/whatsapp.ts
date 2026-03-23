/**
 * WhatsApp Utility Functions
 * 
 * Provides utilities for generating WhatsApp links with custom messages.
 * Used by the unified WhatsApp button components throughout the app.
 */

// Default phone number
export const DEFAULT_PHONE_NUMBER = '526565275439';

/**
 * Predefined messages for different page contexts
 */
export const DEFAULT_MESSAGES = {
  menuSelector: 'Hola, quiero hacer un pedido',
  hamburgers: 'Hola, quiero pedir Hamburguesas a la Parrilla',
  menudo: 'Hola, quiero pedir Menudo Casero',
} as const;

/**
 * Page type aliases for convenience
 */
export type PageType = keyof typeof DEFAULT_MESSAGES;

/**
 * Generate a WhatsApp URL with the given phone number and message
 * 
 * @param phoneNumber - WhatsApp phone number (without + sign)
 * @param message - Message to send
 * @returns Full WhatsApp URL
 */
export function generateWhatsAppLink(
  phoneNumber: string = DEFAULT_PHONE_NUMBER,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Get the default message for a specific page type
 * 
 * @param pageType - The type of page (menuSelector, hamburgers, menudo)
 * @returns The default message for the page type
 */
export function getDefaultMessage(pageType: PageType): string {
  return DEFAULT_MESSAGES[pageType];
}

/**
 * Generate a WhatsApp link for a specific page type
 * 
 * @param pageType - The type of page
 * @param phoneNumber - Optional custom phone number
 * @returns Full WhatsApp URL with default message for the page type
 */
export function generateWhatsAppLinkForPage(
  pageType: PageType,
  phoneNumber?: string
): string {
  const message = getDefaultMessage(pageType);
  return generateWhatsAppLink(phoneNumber, message);
}
