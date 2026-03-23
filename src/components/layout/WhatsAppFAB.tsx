import { MessageCircle } from 'lucide-react';

interface WhatsAppFABProps {
  phoneNumber?: string;
  message?: string;
  showLabel?: boolean;
}

const defaultPhoneNumber = '526565275439';
const defaultMessage = 'Hola, me gustaría hacer un pedido';

export function WhatsAppFAB({
  phoneNumber = defaultPhoneNumber,
  message = defaultMessage,
  showLabel = true,
}: WhatsAppFABProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 flex items-center justify-end z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#ffd16c] text-[#0e0e0e] rounded-full px-6 py-4 shadow-[0_0_20px_rgba(253,192,3,0.3)] hover:bg-[#ff743b] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,116,59,0.5)] transition-all duration-500 active:scale-95"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle size={24} className="flex-shrink-0" />
        {showLabel && (
          <span className="font-body font-bold text-sm hidden sm:inline">
            Haz tu pedido por WhatsApp
          </span>
        )}
      </a>
    </div>
  );
}

export default WhatsAppFAB;