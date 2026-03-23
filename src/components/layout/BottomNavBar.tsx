import { Home, Utensils, Receipt, MessageCircle } from 'lucide-react';

type NavItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '#inicio' },
  { icon: Utensils, label: 'Menu', href: '#menu' },
  { icon: Receipt, label: 'Orders', href: '#pedidos' },
  { icon: MessageCircle, label: 'Contact', href: '#contacto' },
];

interface BottomNavBarProps {
  activeItem?: string;
  onItemClick?: (href: string) => void;
}

export function BottomNavBar({ activeItem = '#menu', onItemClick }: BottomNavBarProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onItemClick) {
      onItemClick(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pb-6 pt-3 bg-[#0e0e0e]/90 backdrop-blur-2xl border-t border-white/10 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = activeItem === item.href;
        const Icon = item.icon;

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`
              flex flex-col items-center justify-center px-4 py-1 transition-all duration-300
              ${isActive 
                ? 'bg-[#ffd16c] text-[#0e0e0e] rounded-xl' 
                : 'text-[#adaaaa] hover:text-[#ffd16c]'
              }
            `}
          >
            <Icon 
              size={24} 
              className={isActive ? 'text-[#0e0e0e]' : ''}
            />
            <span className="font-body text-[10px] uppercase font-bold tracking-widest mt-1">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default BottomNavBar;