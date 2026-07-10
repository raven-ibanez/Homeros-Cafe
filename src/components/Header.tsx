import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentView: 'home' | 'menu' | 'services' | 'about' | 'contact' | 'cart' | 'checkout';
  onNavigate: (view: 'home' | 'menu' | 'services' | 'about' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick,
  currentView,
  onNavigate,
}) => {
  const { siteSettings, loading } = useSiteSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: 'home' as const },
    { label: 'Menu', view: 'menu' as const },
    { label: 'Services', view: 'services' as const },
    { label: 'About Us', view: 'about' as const },
    { label: 'Contact Us', view: 'contact' as const },
  ];

  const handleNavClick = (view: 'home' | 'menu' | 'services' | 'about' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const isActive = (view: string) => {
    return currentView === view;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cafe-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-cafe-brown hover:text-cafe-accent transition-colors duration-200"
          >
            {loading ? (
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            ) : (
              <img
                src={siteSettings?.site_logo || "/logo.jpg"}
                alt={siteSettings?.site_name || "Homeros Cafe"}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-cafe-brown"
                onError={(e) => {
                  e.currentTarget.src = "/logo.jpg";
                }}
              />
            )}
            <h1 className="text-lg md:text-2xl font-agrandir font-black tracking-tight text-cafe-brown">
              {loading ? (
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
              ) : (
                siteSettings?.site_name || "Homeros Cafe"
              )}
            </h1>
          </button>

          {/* Right Group: Navigation and Action Buttons */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive(item.view)
                      ? 'text-cafe-dark font-bold'
                      : 'text-gray-500 hover:text-cafe-dark'
                  }`}
                >
                  {item.label}
                  {isActive(item.view) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cafe-brown rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Cart & Mobile Hamburger Buttons */}
            <div className="flex items-center space-x-2">
              {currentView !== 'home' && currentView !== 'about' && currentView !== 'contact' && currentView !== 'services' && (
                <button
                  onClick={onCartClick}
                  className={`relative p-2 rounded-full transition-all duration-200 ${
                    isActive('cart')
                      ? 'bg-cafe-brown text-white'
                      : 'text-cafe-brown hover:text-cafe-dark hover:bg-cafe-beige/50'
                  }`}
                  aria-label="Shopping Cart"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle ${
                      isActive('cart') ? 'bg-white text-cafe-brown font-bold' : 'bg-cafe-accent text-white'
                    }`}>
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-cafe-brown hover:text-cafe-dark hover:bg-cafe-beige/50 rounded-full md:hidden transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Navigation (Side Drawer) */}
    {mobileMenuOpen && (
      <div className="md:hidden">
        {/* Dark Backdrop overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 transition-opacity animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Slide-in Drawer Container (Solid background) */}
        <div className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col p-6 space-y-6 animate-slide-left border-l border-cafe-beige">
          {/* Drawer Header (Close Button Only) */}
          <div className="flex justify-end pb-2 border-b border-gray-100">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-cafe-brown"
              aria-label="Close Mobile Menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Links Stack */}
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                  isActive(item.view)
                    ? 'bg-cafe-brown text-white shadow-md'
                    : 'text-gray-600 hover:bg-cafe-beige/40 hover:text-cafe-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    )}
  </>
  );
};

export default Header;