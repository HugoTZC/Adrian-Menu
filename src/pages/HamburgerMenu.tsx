import React, { useState, useEffect } from 'react';
import { TopNavBar, BottomNavBar, WhatsAppFAB } from '../components/layout';
import { HeroSection } from '../components/common';
import { ComboCard } from '../components/menu/ComboCard';
import { CTACard } from '../components/menu/CTACard';
import { SidebarItem } from '../components/menu/SidebarItem';
import { GlassPanel } from '../components/common/GlassPanel';

// Menu data types
interface MenuCombo {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  tags?: string[];
}

interface SideItem {
  id: string;
  name: string;
  description?: string;
  price: number;
}

interface DrinkItem {
  id: string;
  name: string;
  price: number;
}

// Menu data from HTML reference
const menuCombos: MenuCombo[] = [
  {
    id: 'combo-papas-soda',
    name: 'Combo c/ papas y soda',
    description: 'Nuestra hamburguesa clásica acompañada de papas fritas crujientes y tu soda favorita.',
    items: ['Hamburguesa clásica', 'Papas a la francesa', 'Soda favorita'],
    price: 150,
    isPopular: true,
  },
  {
    id: 'combo-doble',
    name: 'Combo (Doble)',
    description: 'Doble ración de carne artesanal para los que buscan el sabor ahumado definitivo.',
    items: ['Hamburguesa doble', 'Papas a la francesa', 'Soda favorita'],
    price: 180,
  },
];

const individualBurgers: MenuItemData[] = [
  {
    id: 'hamburguesa-sencilla',
    name: 'HAMBURGUESA SENCILLA',
    description: 'Carne de res artesanal 100% selecta, forjada a la parrilla, servida en pan brioche mantequilloso con vegetales frescos del huerto.',
    price: 100,
    isPopular: true,
  },
  {
    id: 'hamburguesa-doble',
    name: 'HAMBURGUESA DOBLE',
    description: 'Doble porción de nuestra carne artesanal con el auténtico toque de leña, queso cheddar fundido y nuestro pan brioche premium.',
    price: 140,
  },
];

const sides: SideItem[] = [
  {
    id: 'papas-a-la-francesa',
    name: 'Papas a la francesa',
    description: 'Corte clásico, sal de mar',
    price: 40,
  },
];

const drinks: DrinkItem[] = [
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    price: 30,
  },
  {
    id: 'mountain-dew',
    name: 'Mountain Dew',
    price: 35,
  },
];

// Section navigation data
const sections = [
  { id: 'combos', label: 'Combos', icon: 'restaurant' },
  { id: 'individuales', label: 'Individuales', icon: 'lunch_dining' },
  { id: 'acompañamientos', label: 'Acompañamientos', icon: 'restaurant' },
  { id: 'bebidas', label: 'Bebidas', icon: 'local_drink' },
];

/**
 * HamburgerMenu - Hamburgers a la Parrilla page
 * 
 * Displays the hamburger menu with combos, individual items, sides, and drinks.
 * Follows the "Ember & Ash Editorial" design system.
 * 
 * Route: /hamburguesas
 */
export const HamburgerMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('combos');
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle section click - scroll to section
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <TopNavBar />
      
      {/* Hero Section */}
      <HeroSection
        title="HAMBURGUESAS A LA PARRILLA"
        subtitle="Sabor ahumado, tradición artesanal. Carne 100% selecta forjada a la leña."
        image="/images/hamb2.jpeg"
        className="pt-20"
      />

      {/* Main Content */}
      <main className="relative pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Mobile Sticky Section Navigation */}
          {isMobile && (
            <div className="lg:hidden sticky top-16 z-30 -mx-4 md:-mx-6 px-4 md:px-6 py-3 bg-background/90 backdrop-blur-xl border-b border-outline-variant/20">
              <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                      transition-all duration-300
                      ${activeSection === section.id 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'text-on-surface-variant hover:text-white hover:bg-surface-container-high'}
                    `}
                  >
                    <span className="material-symbols-outlined text-lg">{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <GlassPanel variant="medium" className="p-4">
                <h3 className="font-headline text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4 px-2">
                  Menú
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <SidebarItem
                      key={section.id}
                      icon={section.icon}
                      label={section.label}
                      href={`#${section.id}`}
                      isActive={activeSection === section.id}
                      onClick={() => setActiveSection(section.id)}
                    />
                  ))}
                </nav>
              </GlassPanel>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* COMBOS SECTION */}
            <section id="combos" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px flex-1 bg-outline-variant/30"></span>
                <h2 className="font-headline font-bold text-2xl tracking-widest text-secondary uppercase">
                  COMBOS
                </h2>
                <span className="h-px flex-1 bg-outline-variant/30"></span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuCombos.map((combo) => (
                  <ComboCard
                    key={combo.id}
                    name={combo.name}
                    items={combo.items}
                    price={combo.price}
                    isPopular={combo.isPopular}
                    isNew={combo.isNew}
                  />
                ))}
              </div>
            </section>

            {/* INDIVIDUALES SECTION (Las Clásicas) */}
            <section id="individuales" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px flex-1 bg-outline-variant/30"></span>
                <h2 className="font-headline font-bold text-2xl tracking-widest text-secondary uppercase">
                  LAS CLÁSICAS
                </h2>
                <span className="h-px flex-1 bg-outline-variant/30"></span>
              </div>
              
              <div className="space-y-8 md:space-y-12">
                {individualBurgers.map((burger, index) => (
                  <div 
                    key={burger.id}
                    className={`
                      flex flex-col md:flex-row gap-6 md:gap-8 items-center group
                      ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                    `}
                  >
                    {/* Image Circle */}
                    <div className="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-4 border-surface-container shadow-2xl relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${
                            burger.id === 'hamburguesa-sencilla'
                              ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFOpGeN952rCqOZdnUbpoIixcYHQL2O6B6R0nlFSnLjb5Mtb_N7xxFqAIfLnQn9U1DynlIrr8W-tn3CPRKy_IxaqmhqDcvPlcHMOZrTfTPMuo4LpYszL_ogG42kBQvowBL-xZBinJ3-k5REYX7YJYV-L7P29ihlHg0Wc7Twd_LmNiPdL8lAketVfe8ooj5NMN1vpX-9zlfKIH_6P4NGhwzKz9E_wh-iLThJ4NYzasCqkB3YCGZg7SQFu9tSrqYsacIIsLq5Q1JxL8'
                              : 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWpGxay8Kwj-_1hcT1H9UZS6_Y0uL1omN6_HWYActzfob0ebVnB0S3J5bJDIiK1CrxRsyZtWcm53LUQlV5p5BB75UXFAkNmGdMdwJTbFR-4qMGikr5_PPysp17BrYsi3G6ky7ldGlOfQYjpd0-SJrapiC3jeyOEtNHJW_vwOHyfnYPlXXzEowkZEMhjE6GxnfPBfCC1y0NZFV7Fui-A2ogYj4jJwkAk9YaDiGx7KDKei_vxK_WfHp19TYtfnyKETvYFcVV_6zvDoE'
                          })`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className={`
                      flex-1 text-center md:text-left
                      ${index % 2 === 1 ? 'md:text-right' : ''}
                    `}>
                      <div className={`
                        flex flex-col md:items-baseline justify-between gap-2 mb-4
                        ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                      `}>
                        <h3 className="font-headline font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
                          {burger.name}
                        </h3>
                        <span className="font-headline text-2xl md:text-3xl font-bold text-primary">
                          ${burger.price}
                        </span>
                      </div>
                      <p className={`
                        text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl
                        ${index % 2 === 1 ? 'md:ml-auto' : ''}
                      `}>
                        {burger.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ACOMPAÑAMIENTOS (Sides) */}
            <section id="acompañamientos" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px flex-1 bg-outline-variant/30"></span>
                <h2 className="font-headline font-bold text-2xl tracking-widest text-primary uppercase">
                  ACOMPAÑAMIENTOS
                </h2>
                <span className="h-px flex-1 bg-outline-variant/30"></span>
              </div>
              
              <GlassPanel variant="medium" className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl">restaurant</span>
                </div>
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                  {sides.map((side) => (
                    <div 
                      key={side.id}
                      className="flex justify-between items-center group hover:bg-surface-container-high/50 p-3 -mx-3 rounded-lg transition-colors"
                    >
                      <div>
                        <h4 className="font-bold text-white group-hover:text-secondary transition-colors">
                          {side.name}
                        </h4>
                        {side.description && (
                          <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                            {side.description}
                          </p>
                        )}
                      </div>
                      <span className="font-headline text-xl font-bold text-primary">
                        ${side.price}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </section>

            {/* BEBIDAS (Drinks) */}
            <section id="bebidas" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px flex-1 bg-outline-variant/30"></span>
                <h2 className="font-headline font-bold text-2xl tracking-widest text-primary uppercase">
                  BEBIDAS
                </h2>
                <span className="h-px flex-1 bg-outline-variant/30"></span>
              </div>
              
              <GlassPanel variant="medium" className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl">local_drink</span>
                </div>
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                  {drinks.map((drink) => (
                    <div 
                      key={drink.id}
                      className="flex justify-between items-center group hover:bg-surface-container-high/50 p-3 -mx-3 rounded-lg transition-colors"
                    >
                      <h4 className="font-bold text-white group-hover:text-secondary transition-colors">
                        {drink.name}
                      </h4>
                      <span className="font-headline text-xl font-bold text-primary">
                        ${drink.price}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </section>

            {/* CTA Section */}
            <section className="pt-8">
              <CTACard
                title="¿HAMBRE?"
                description="Pide ahora y recibe el sabor de la parrilla en tu puerta."
                buttonText="Ordenar Ahora"
                buttonLink="https://wa.me/yournumber"
                icon="schedule"
                variant="featured"
              />
              <div className="mt-4 text-center">
                <p className="text-on-surface-variant text-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  Abiertos hasta las 11:00 PM
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFAB />

      {/* Bottom Navigation Bar (Mobile) */}
      {/* <BottomNavBar /> */}
    </div>
  );
};

export default HamburgerMenu;
