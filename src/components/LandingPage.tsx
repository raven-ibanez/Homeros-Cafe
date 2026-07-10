import React, { useRef } from 'react';
import { ArrowRight, Coffee, Heart, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuItem, SiteSettings } from '../types';

interface LandingPageProps {
  menuItems: MenuItem[];
  siteSettings: SiteSettings | null;
  onNavigate: (view: 'home' | 'menu' | 'about' | 'contact') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  menuItems,
  siteSettings,
  onNavigate,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  // Get selected featured items by ID, falling back to first 4 available items
  const featuredIds = siteSettings?.landing_featured_ids
    ? siteSettings.landing_featured_ids.split(',').filter(Boolean)
    : [];

  const featuredItems = featuredIds.length > 0
    ? (featuredIds.map(id => menuItems.find(item => item.id === id)).filter(Boolean) as MenuItem[])
    : menuItems.filter(item => item.available !== false).slice(0, 4);

  return (
    <div className="bg-cafe-cream min-h-screen text-cafe-brown">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:py-32 border-b border-cafe-beige bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-slide-up text-center lg:text-left reveal">
            <div className="inline-flex items-center space-x-2 bg-cafe-beige/40 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cafe-gold">
              <span>Premium Specialty Cafe</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-agrandir font-black tracking-tight text-cafe-dark leading-tight whitespace-pre-line">
              {siteSettings?.landing_hero_title || "Artisan Brews &\nComforting Bites"}
            </h1>
            <p className="text-base md:text-xl text-gray-600 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {siteSettings?.landing_hero_subtitle || "Exceptional coffee, freshly baked pastries, and a minimalist space designed for connection. Welcome to Homeros Cafe."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('menu')}
                className="bg-cafe-accent text-white px-8 py-3.5 rounded-full font-medium hover:bg-cafe-gold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-md hover:shadow-lg"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-cafe-brown text-cafe-brown px-8 py-3.5 rounded-full font-medium hover:bg-cafe-brown hover:text-white transition-all duration-300"
              >
                Our Story
              </button>
            </div>
          </div>

          <div className="hidden md:block relative md:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl animate-fade-in group reveal-right">
            <img
              src={siteSettings?.landing_hero_image || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"}
              alt={siteSettings?.site_name || "Homeros Cafe"}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/30 via-transparent to-transparent" />
            <div className="hidden md:block absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-cafe-beige/50 shadow-lg">
              <p className="text-cafe-dark font-agrandir font-bold text-lg">"The perfect blend of flavor and atmosphere."</p>
              <p className="text-gray-500 text-sm mt-1">— Homeros Signature Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Wrapper to swap sections layout on mobile */}
      <div className="flex flex-col">
        {/* Core Values / Concept */}
        <section className="order-2 md:order-1 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-cafe-beige w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-agrandir font-black text-cafe-dark">
              {siteSettings?.landing_crafted_title || "Crafted with Intention"}
            </h2>
            <div className="h-1 w-12 bg-cafe-brown mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="bg-white p-8 rounded-2xl border border-cafe-beige shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-cafe-beige/40 rounded-xl flex items-center justify-center text-cafe-brown">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-agrandir font-bold text-cafe-dark">
                {siteSettings?.landing_crafted_1_title || "The Perfect Roast"}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {siteSettings?.landing_crafted_1_body || "We source single-origin specialty beans, roasting them carefully to unlock unique, complex flavor profiles."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cafe-beige shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-cafe-beige/40 rounded-xl flex items-center justify-center text-cafe-brown">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-agrandir font-bold text-cafe-dark">
                {siteSettings?.landing_crafted_2_title || "Honest Ingredients"}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {siteSettings?.landing_crafted_2_body || "From our dairy to our custom syrups and fresh pastries, every ingredient is selected for quality and sustainability."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cafe-beige shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-cafe-beige/40 rounded-xl flex items-center justify-center text-cafe-brown">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-agrandir font-bold text-cafe-dark">
                {siteSettings?.landing_crafted_3_title || "A Space for All"}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {siteSettings?.landing_crafted_3_body || "Designed as a modern sanctuary, we provide a warm, quiet environment for remote work, read, or meaningful conversations."}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Items Grid */}
        {featuredItems.length > 0 && (
          <section className="order-1 md:order-2 py-20 bg-white border-b border-cafe-beige w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal">
              <div>
                <h2 className="text-3xl md:text-5xl font-agrandir font-black text-cafe-dark">
                  {siteSettings?.landing_featured_title || "Featured Specialties"}
                </h2>
                <p className="text-gray-500 font-light mt-2">
                  {siteSettings?.landing_featured_subtitle || "Curated favorites from our kitchen and espresso bar."}
                </p>
              </div>
              <button
                onClick={() => onNavigate('menu')}
                className="mt-4 md:mt-0 flex items-center space-x-2 text-cafe-brown hover:text-cafe-gold font-bold transition-colors group"
              >
                <span>View Full Menu</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Slider Wrap */}
            <div className="relative group/slider reveal">
              {/* Scroll Buttons */}
              <button
                onClick={() => scroll('left')}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/95 shadow-lg rounded-full border border-cafe-beige opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hidden md:flex hover:bg-cafe-beige text-cafe-brown"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => scroll('right')}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/95 shadow-lg rounded-full border border-cafe-beige opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hidden md:flex hover:bg-cafe-beige text-cafe-brown"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Horizontal Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-5 pb-6 pt-2 snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth' }}
              >
                {featuredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate('menu')}
                    className="w-[280px] md:w-[300px] flex-shrink-0 bg-white rounded-2xl border border-cafe-beige overflow-hidden group text-left transition-all duration-300 hover:shadow-lg hover:border-cafe-gold flex flex-col h-full snap-start"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100 w-full">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <Coffee className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow space-y-2">
                      <div>
                        <h3 className="font-agrandir font-bold text-cafe-dark group-hover:text-cafe-gold transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-1 font-light">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-cafe-beige/40">
                        <span className="font-agrandir font-black text-cafe-dark">
                          ₱{item.basePrice.toFixed(2)}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cafe-gold group-hover:underline">
                          Order Now
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      </div>

      {/* Mid Banner / Promo */}
      <section className="bg-cafe-brown text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800"
            alt="Coffee details"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6 reveal">
          <h2 className="text-3xl md:text-5xl font-agrandir font-black tracking-tight leading-tight">
            {siteSettings?.landing_promo_title || "Craving something special?"}
          </h2>
          <p className="text-cafe-beige text-lg font-light max-w-xl mx-auto">
            {siteSettings?.landing_promo_subtitle || "Order online for quick pickup, or dine-in to experience the cozy warmth of Homeros Cafe."}
          </p>
          <div className="pt-4 flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-white text-cafe-brown px-8 py-3 rounded-full font-medium hover:bg-cafe-beige transition-colors shadow-lg"
            >
              Order Online
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Find Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
