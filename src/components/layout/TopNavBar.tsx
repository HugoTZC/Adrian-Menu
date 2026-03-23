import { Menu, ArrowLeft, ShoppingCart } from 'lucide-react';

interface TopNavBarProps {
  onMenuClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
  showCart?: boolean;
  onCartClick?: () => void;
}

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#menu', label: 'MENÚ' },
  { href: '#nosotros', label: 'NOSOTROS' },
  { href: '#ubicacion', label: 'UBICACIÓN' },
];

export function TopNavBar({
  onMenuClick,
  showBackButton = false,
  onBackClick,
  showCart = false,
  onCartClick,
}: TopNavBarProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-black tracking-widest text-[#ffd16c] font-headline">
          VAMM
        </h1>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#adaaaa] hover:text-[#ff743b] transition-colors duration-300 font-headline font-bold tracking-tighter"
            >
              {link.label}
            </a>
          ))}
        </nav> */}

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {showCart && (
            <button
              onClick={onCartClick}
              className="text-[#ffd16c] hover:text-[#ff743b] transition-colors active:scale-95"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
            </button>
          )}
          
          {showBackButton ? (
            <button
              onClick={onBackClick}
              className="text-[#ffd16c] active:scale-95 transition-transform"
              aria-label="Go back"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <button
              onClick={onMenuClick}
              className="md:hidden text-[#ffd16c] active:scale-95 transition-transform"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopNavBar;