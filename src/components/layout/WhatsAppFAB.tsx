import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, DEFAULT_PHONE_NUMBER } from '@/utils/whatsapp';

/**
 * WhatsApp Button Variants
 * - fab: Fixed floating action button (bottom-right)
 * - button: Regular button for inline use
 * - card: Button for card components
 */
export type WhatsAppButtonVariant = 'fab' | 'button' | 'card';

export interface WhatsAppButtonProps {
  /** Button variant type */
  variant?: WhatsAppButtonVariant;
  /** Custom phone number (overrides default) */
  phoneNumber?: string;
  /** Custom message (overrides default) */
  customMessage?: string;
  /** Whether to show the label text */
  showLabel?: boolean;
  /** Custom label text (overrides default) */
  labelText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Button label text (for button/card variants) */
  children?: React.ReactNode;
}

/**
 * Unified WhatsApp Button Component
 * 
 * A reusable component that works in multiple contexts:
 * - FAB (floating action button) - fixed bottom-right
 * - Page CTA buttons - inline buttons
 * - Menu card buttons - for navigation/ordering
 * 
 * Uses the WhatsApp URL format: https://wa.me/{phone}?text={message}
 */
export function WhatsAppButton({
  variant = 'fab',
  phoneNumber = DEFAULT_PHONE_NUMBER,
  customMessage,
  showLabel = true,
  labelText,
  className = '',
  children,
}: WhatsAppButtonProps) {
  // Generate the WhatsApp link
  const message = customMessage || 'Hola, me gustaría hacer un pedido';
  const whatsappLink = generateWhatsAppLink(phoneNumber, message);

  // Default label based on variant
  const defaultLabel = variant === 'fab' 
    ? 'Haz tu pedido por WhatsApp' 
    : 'Ordenar por WhatsApp';
  
  const displayLabel = labelText || defaultLabel;

  // Variant-specific styles
  const variantClasses = {
    fab: {
      container: 'fixed bottom-6 right-6 z-50',
      button: 'flex items-center gap-3 bg-[#ffd16c] text-[#0e0e0e] rounded-full px-6 py-4 shadow-[0_0_20px_rgba(253,192,3,0.3)] hover:bg-[#ff743b] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,116,59,0.5)] transition-all duration-500 active:scale-95',
      iconSize: 24,
      labelClass: 'font-body font-bold text-sm hidden sm:inline',
    },
    button: {
      container: 'inline-flex',
      button: 'inline-flex items-center gap-2 bg-[#ffd16c] text-[#0e0e0e] rounded-lg px-6 py-3 font-medium hover:bg-[#ff743b] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,116,59,0.4)] transition-all duration-300 active:scale-[0.98]',
      iconSize: 20,
      labelClass: 'font-body font-medium text-sm',
    },
    card: {
      container: 'inline-flex',
      button: 'inline-flex items-center justify-center gap-2 bg-primary text-on-primary-fixed rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-primary-dim hover:scale-[1.02] active:scale-[0.98]',
      iconSize: 20,
      labelClass: 'font-body font-medium text-sm',
    },
  };

  const styles = variantClasses[variant];

  return (
    <div className={`${styles.container} ${className}`}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Order via WhatsApp"
      >
        <MessageCircle size={styles.iconSize} className="flex-shrink-0" />
        {showLabel && (
          <span className={styles.labelClass}>
            {children || displayLabel}
          </span>
        )}
      </a>
    </div>
  );
}

// Backward compatibility - keep the old WhatsAppFAB name
export function WhatsAppFAB({
  phoneNumber,
  message,
  showLabel = true,
}: {
  phoneNumber?: string;
  message?: string;
  showLabel?: boolean;
}) {
  return (
    <WhatsAppButton
      variant="fab"
      phoneNumber={phoneNumber}
      customMessage={message}
      showLabel={showLabel}
    />
  );
}

export default WhatsAppButton;
