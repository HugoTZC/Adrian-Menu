import { TopNavBar, WhatsAppFAB } from '@/components/layout';
import { MenuCard } from '@/components/menu';
import { DEFAULT_MESSAGES } from '@/utils/whatsapp';

/**
 * MenuSelector - Landing page for VAMM menu selection
 * 
 * This is the home page at `/` that lets users choose between:
 * - Menudo (morning)
 * - Hamburgers (afternoon)
 * 
 * Follows the "Ember & Ash Editorial" design system with:
 * - Primary color: #ffd16c (gold)
 * - Secondary color: #ff743b (ember orange)  
 * - Background: #0e0e0e (charcoal black)
 * - Smoke overlay CSS effect
 */
export function MenuSelector() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <TopNavBar />
      
      {/* Main Content */}
      <main className="min-h-screen pt-24 pb-32 px-4 md:px-8 relative overflow-hidden">
        {/* Background Atmospheric Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
          {/* Hero Section - Title & Subtitle */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-2 text-gradient-ember">
              LA EXPERIENCIA VAMM
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl">
              Desde el fuego del amanecer hasta las brasas de la noche. Selecciona tu momento.
            </p>
          </div>
          
          {/* Bento Grid / Asymmetric Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Menudo Card - Morning */}
            <MenuCard
              image="/images/menudo.jpeg"
              badge="Mañanas"
              title="Menudo Casero"
              subtitle="Tradicional receta casera con los mejores ingredientes"
              linkText="Para tus Mañanas"
              href="/menudo"
              variant="primary"
              offset={false}
            />
            
            {/* Hamburgers Card - Afternoon */}
            <MenuCard
              image="/images/hamb.jpeg"
              badge="Tardes"
              title="Hamburguesas a la Parrilla"
              subtitle="Jugosas burgers con los mejores cortes de carne"
              linkText="Para el hambre por las Tardes"
              href="/hamburguesas"
              variant="secondary"
              offset={true}
            />
          </div>
        </div>
      </main>
      
      {/* WhatsApp FAB - Menu Selector page */}
      <WhatsAppFAB message={DEFAULT_MESSAGES.menuSelector} />
      
      {/* Editorial Footer Minimal */}
      <footer className="bg-surface-container-lowest py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
          <div className="font-headline font-black text-xl tracking-widest text-on-surface-variant">
            VAMM
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-on-surface-variant">
            {/* <a className="hover:text-primary transition-colors" href="#">
              Aviso de Privacidad
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Términos
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Ubicación
            </a> */}
          </div>
          <div className="text-xs text-on-surface-variant font-medium">
            © 2024 VAMM - Maestros del Fuego.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MenuSelector;
