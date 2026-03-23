import React from 'react';
import { TopNavBar, BottomNavBar, WhatsAppFAB } from '../components/layout';
import { HeroSection } from '../components/common';
import { CTACard } from '../components/menu/CTACard';
import { QuoteSection } from '../components/menu/QuoteSection';
import { GlassPanel } from '../components/common/GlassPanel';

// Menu data types
interface MenudoItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
}

interface DrinkItem {
  id: string;
  name: string;
  description?: string;
  price: number;
}

// Menu data from HTML reference
const menudoItems: MenudoItem[] = [
  {
    id: 'menudo-sencillo',
    name: 'Litro de menudo sencillos',
    description: 'Caldo rojo tradicional con pancita seleccionada, servido con cebolla, cilantro, orégano y limón.',
    price: 120,
    isPopular: true,
  },
  {
    id: 'menudo-pata',
    name: 'Litro de menudo con pata',
    description: 'Nuestra versión más completa. Caldo concentrado con pancita y pata suave que se deshace al paladar.',
    price: 135,
  },
];

const drinks: DrinkItem[] = [
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    description: '355ml Fría',
    price: 30,
  },
  {
    id: 'mountain-dew',
    name: 'Mountain Dew',
    description: '355ml Fría',
    price: 30,
  },
];

const quote = {
  text: 'El secreto no está en los ingredientes, sino en el tiempo que le permitimos al fuego hacer su magia.',
  author: '',
};

/**
 * MenudoMenu - Menudo Casero page
 * 
 * Displays the menudo menu with liter options, drinks, and editorial quotes.
 * Follows the "Ember & Ash Editorial" design system.
 * 
 * Route: /menudo
 */
export const MenudoMenu: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <TopNavBar />
      
      {/* Hero Section */}
      <HeroSection
        title="MENUDO TRADICIONAL"
        subtitle="Nuestra receta secreta cocinada a fuego lento durante toda la noche para alcanzar la textura y el sabor perfectos que caracterizan al mejor menudo de la región."
        image="/images/menudo.jpeg"
        className="pt-20"
      />

      {/* Main Content */}
      <main className="relative pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
          
          {/* Main Grid: Menudo (Left) + Drinks (Right sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Menudo Section (Los Litros) - Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section Header */}
              <section id="litros" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent"></span>
                  <h2 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight text-secondary uppercase">
                    LOS LITROS
                  </h2>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent"></span>
                </div>
                
                {/* Menu Items Grid - Card Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menudoItems.map((item) => (
                    <div 
                      key={item.id}
                      className="group relative bg-surface-container-high p-6 md:p-8 rounded-xl transition-all duration-500 hover:bg-surface-bright border-l-2 border-primary-container/30 overflow-hidden"
                    >
                      {/* Decorative icon */}
                      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl md:text-9xl text-primary">
                          soup_kitchen
                        </span>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Header with name and price */}
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-body text-2xl md:text-3xl font-bold text-primary-fixed text-glow">
                            ${item.price}
                          </span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap">
                          {item.id === 'menudo-sencillo' && (
                            <>
                              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase px-2 py-1 bg-secondary/10 rounded">
                                CALIENTE
                              </span>
                              <span className="text-[10px] font-bold tracking-widest text-primary uppercase px-2 py-1 bg-primary/10 rounded">
                                TRADICIONAL
                              </span>
                            </>
                          )}
                          {item.id === 'menudo-pata' && (
                            <>
                              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase px-2 py-1 bg-secondary/10 rounded">
                                PREMIUM
                              </span>
                              <span className="text-[10px] font-bold tracking-widest text-primary uppercase px-2 py-1 bg-primary/10 rounded">
                                SABROSO
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quote Section */}
              <section className="py-12 max-w-4xl mx-auto">
                <div className="inline-block w-12 h-1 bg-primary mb-6"></div>
                <QuoteSection
                  quote={quote.text}
                  author={quote.author}
                  variant="default"
                />
              </section>

              {/* CTA Section */}
              <section className="pt-8">
                <CTACard
                  title="¿LISTO PARA DISFRUTAR?"
                  description="El mejor menudo de la región te espera. Ordena ahora y disfruta."
                  buttonText="Ordenar Ahora"
                  buttonLink="https://wa.me/526565275439"
                  icon="soup_kitchen"
                  variant="featured"
                />
                <div className="mt-4 text-center">
                  <p className="text-on-surface-variant text-sm flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Abiertos desde las 7:00 AM
                  </p>
                </div>
              </section>
            </div>

            {/* Drinks Sidebar - Right Side */}
            <aside className="lg:col-span-4 lg:mt-24">
              <GlassPanel variant="medium" className="p-6 md:p-8 relative overflow-hidden">
                {/* Icon decoration */}
                <div className="absolute -top-6 left-6">
                  <span className="material-symbols-outlined text-primary text-5xl md:text-6xl">
                    local_bar
                  </span>
                </div>
                
                <h2 className="font-headline text-xl md:text-2xl font-extrabold tracking-tight text-on-surface mb-8 pt-4">
                  BEBIDAS
                </h2>
                
                <div className="space-y-6">
                  {drinks.map((drink) => (
                    <div 
                      key={drink.id}
                      className="flex justify-between items-center group hover:bg-surface-container-high/50 p-3 -mx-3 rounded-lg transition-colors"
                    >
                      <div>
                        <h4 className="font-body font-bold text-on-surface text-lg group-hover:text-secondary transition-colors">
                          {drink.name}
                        </h4>
                        {drink.description && (
                          <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                            {drink.description}
                          </p>
                        )}
                      </div>
                      <div className="h-px flex-1 mx-4 border-b border-dotted border-outline-variant/50"></div>
                      <span className="font-body font-bold text-primary-fixed text-lg">
                        ${drink.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative quote in drinks section */}
                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-on-surface-variant/80 italic">
                    "No hay mejor compañía para un buen menudo que una bebida bien helada."
                  </p>
                </div>
              </GlassPanel>
            </aside>

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

export default MenudoMenu;