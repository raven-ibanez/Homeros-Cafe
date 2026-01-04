import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cafe-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={onMenuClick}
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
            <h1 className="text-2xl font-pretendard font-semibold tracking-tight text-cafe-brown">
              {loading ? (
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
              ) : (
                "Homeros Cafe"
              )}
            </h1>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onCartClick}
              className="relative p-2 text-cafe-brown hover:text-cafe-dark hover:bg-cafe-beige/50 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cafe-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;