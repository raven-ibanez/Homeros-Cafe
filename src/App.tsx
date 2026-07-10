import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FloatingCartButton from './components/FloatingCartButton';
import AdminDashboard from './components/AdminDashboard';
import { useMenu } from './hooks/useMenu';
import CategorySlider from './components/CategorySlider';
import { useCategories } from './hooks/useCategories';
import { useSiteSettings } from './hooks/useSiteSettings';

function MainApp() {
  const cart = useCart();
  const { menuItems } = useMenu();
  const { categories, loading: categoriesLoading } = useCategories();
  const { siteSettings } = useSiteSettings();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Global Scroll Reveal Observer (Applied to public site, bypasses admin page)
  React.useEffect(() => {
    const revealSelector = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.02
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all currently existing reveal elements
    const observeAll = () => {
      document.querySelectorAll(revealSelector).forEach((el) => {
        if (!el.classList.contains('active')) {
          intersectionObserver.observe(el);
        }
      });
    };

    observeAll();

    // Watch for dynamically added reveal elements (e.g. async data loading)
    const mutationObserver = new MutationObserver((mutations) => {
      let hasNew = false;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches?.(revealSelector) || node.querySelector?.(revealSelector)) {
              hasNew = true;
            }
          }
        });
      });
      if (hasNew) observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  // Sync currentView with browser URL pathname
  let currentView: 'home' | 'menu' | 'services' | 'about' | 'contact' | 'cart' | 'checkout' = 'home';
  if (location.pathname === '/menu') currentView = 'menu';
  else if (location.pathname === '/services') currentView = 'services';
  else if (location.pathname === '/about') currentView = 'about';
  else if (location.pathname === '/contact') currentView = 'contact';
  else if (location.pathname === '/cart') currentView = 'cart';
  else if (location.pathname === '/checkout') currentView = 'checkout';

  const handleViewChange = (view: 'home' | 'menu' | 'services' | 'about' | 'contact' | 'cart' | 'checkout') => {
    if (view === 'home') navigate('/');
    else navigate(`/${view}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter menu items based on selected category
  const filteredMenuItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  // Construct color styles mapping if siteSettings are loaded
  const colorStyles = siteSettings ? {
    '--color-cafe-cream': siteSettings.color_cafe_cream || '#F5F1E8',
    '--color-cafe-brown': siteSettings.color_cafe_brown || '#3B2D26',
    '--color-cafe-dark': siteSettings.color_cafe_brown || '#3B2D26',
    '--color-cafe-accent': siteSettings.color_cafe_accent || '#4E5D3A',
    '--color-cafe-green': siteSettings.color_cafe_accent || '#4E5D3A',
    '--color-cafe-gold': siteSettings.color_cafe_gold || '#B08D57',
    '--color-cafe-beige': siteSettings.color_cafe_beige || '#E2DCCE',
    '--color-cafe-clay': siteSettings.color_cafe_clay || '#B86E4B',
    '--color-cafe-btn-text': siteSettings.color_cafe_btn_text || '#FFFFFF',
    '--color-cafe-charcoal': '#2C201A'
  } as React.CSSProperties : undefined;

  return (
    <div style={colorStyles} className="min-h-screen bg-cafe-cream font-inter flex flex-col justify-between">
      <div>
        <Header
          cartItemsCount={cart.getTotalItems()}
          onCartClick={() => handleViewChange('cart')}
          currentView={currentView}
          onNavigate={(view) => handleViewChange(view)}
        />

        {currentView === 'home' && (
          <LandingPage
            menuItems={menuItems}
            siteSettings={siteSettings}
            onNavigate={handleViewChange}
          />
        )}

        {currentView === 'services' && (
          <Services siteSettings={siteSettings} />
        )}

        {currentView === 'about' && (
          <AboutUs 
            onNavigate={handleViewChange} 
            siteSettings={siteSettings}
          />
        )}

        {currentView === 'contact' && (
          <ContactUs siteSettings={siteSettings} />
        )}

        {currentView === 'menu' && (
          <>
            <CategorySlider
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryClick={handleCategoryClick}
              loading={categoriesLoading}
            />
            <Menu
              menuItems={filteredMenuItems}
              addToCart={cart.addToCart}
              cartItems={cart.cartItems}
              updateQuantity={cart.updateQuantity}
            />
          </>
        )}

        {currentView === 'cart' && (
          <Cart
            cartItems={cart.cartItems}
            updateQuantity={cart.updateQuantity}
            removeFromCart={cart.removeFromCart}
            clearCart={cart.clearCart}
            getTotalPrice={cart.getTotalPrice}
            onContinueShopping={() => handleViewChange('menu')}
            onCheckout={() => handleViewChange('checkout')}
          />
        )}

        {currentView === 'checkout' && (
          <Checkout
            cartItems={cart.cartItems}
            totalPrice={cart.getTotalPrice()}
            onBack={() => handleViewChange('cart')}
          />
        )}
      </div>

      {/* Footer */}
      {/* Redesigned Premium Footer */}
      <footer className="bg-cafe-dark text-cafe-cream pt-16 pb-12 border-t border-cafe-charcoal mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-cafe-charcoal/50">
            {/* Branding Column */}
            <div className="space-y-4 col-span-1 lg:col-span-2">
              <p className="font-agrandir font-black text-2xl tracking-tight text-white">{siteSettings?.site_name || "Homeros Cafe"}</p>
              <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
                Artisan roasting, cozy minimalist spaces, and heartwarming bites. Making every coffee break an intentional experience.
              </p>
              <p className="text-xs text-gray-500 font-light pt-2">© 2026 {siteSettings?.site_name || "Homeros Cafe"}. All rights reserved.</p>
            </div>

            {/* Social handles Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Connect with Us</h4>
              <div className="flex space-x-3">
                {siteSettings?.social_fb && (
                  <a 
                    href={siteSettings.social_fb.startsWith('http') ? siteSettings.social_fb : `https://facebook.com/${siteSettings.social_fb.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-cafe-charcoal flex items-center justify-center text-cafe-cream hover:bg-[#1877F2] hover:text-white transition-all shadow-md hover:scale-105"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-3c-2.5 0-5 1.5-5 4v2z" />
                    </svg>
                  </a>
                )}
                {siteSettings?.social_ig && (
                  <a 
                    href={siteSettings.social_ig.startsWith('http') ? siteSettings.social_ig : `https://instagram.com/${siteSettings.social_ig.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-cafe-charcoal flex items-center justify-center text-cafe-cream hover:bg-[#E4405F] hover:text-white transition-all shadow-md hover:scale-105"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                )}
                {siteSettings?.social_tiktok && (
                  <a 
                    href={siteSettings.social_tiktok.startsWith('http') ? siteSettings.social_tiktok : `https://tiktok.com/@${siteSettings.social_tiktok.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-cafe-charcoal flex items-center justify-center text-cafe-cream hover:bg-white hover:text-black transition-all shadow-md hover:scale-105"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.53.02C13.84 0 15 1.05 15.02 2.37c.07 1.55 1.06 2.8 2.5 3.32v3.74c-1.39-.17-2.6-.82-3.48-1.8v8.02A6.33 6.33 0 0 1 7.7 22a6.33 6.33 0 0 1-6.35-6.35c0-3.18 2.34-5.83 5.46-6.27V13.1c-1.4.38-2.42 1.63-2.42 3.12 0 1.83 1.48 3.3 3.3 3.3 1.8 0 3.28-1.47 3.28-3.26V0h1.61z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Order & Reviews Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Order Online & Review</h4>
              <div className="flex flex-col space-y-2">
                {siteSettings?.link_grabfood && (
                  <a 
                    href={siteSettings.link_grabfood} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00B14F] transition-colors"
                  >
                    <span className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                      <svg className="w-4.5 h-4.5" viewBox="0 0 40 40" fill="none">
                        <path d="M30 18.5c0-2.5-2-4.5-4.5-4.5S21 16 21 18.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5z" stroke="#00B14F" strokeWidth="4" />
                        <path d="M19 21.5c0-2.5-2-4.5-4.5-4.5S10 19 10 21.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5z" stroke="#00B14F" strokeWidth="4" />
                      </svg>
                    </span>
                    <span>GrabFood Shop</span>
                  </a>
                )}
                {siteSettings?.link_foodpanda && (
                  <a 
                    href={siteSettings.link_foodpanda} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#D61C5C] transition-colors"
                  >
                    <span className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#D61C5C">
                        <circle cx="7" cy="7" r="2.5" />
                        <circle cx="17" cy="7" r="2.5" />
                        <path d="M12 6c-4.4 0-8 2.8-8 7.3 0 4.1 3.6 6.7 8 6.7s8-2.6 8-6.7c0-4.5-3.6-7.3-8-7.3zm-3.5 8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm7 0c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm-3.5 2.5c-.8 0-1.2-.5-1.2-.8h2.4c0 .3-.4.8-1.2.8z" />
                      </svg>
                    </span>
                    <span>FoodPanda Shop</span>
                  </a>
                )}
                {siteSettings?.link_google_reviews && (
                  <a 
                    href={siteSettings.link_google_reviews} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.19-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1c-4.3 0-8.01 2.47-9.82 6.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </span>
                    <span>Rate Us on Google</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Centered Navigation links */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <button onClick={() => handleViewChange('home')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => handleViewChange('menu')} className="hover:text-white transition-colors">Menu</button>
              <button onClick={() => handleViewChange('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => handleViewChange('about')} className="hover:text-white transition-colors">About Us</button>
              <button onClick={() => handleViewChange('contact')} className="hover:text-white transition-colors">Contact Us</button>
            </div>
            <div>
              <span>Designed with passion for exceptional taste.</span>
            </div>
          </div>
        </div>
      </footer>

      {currentView === 'menu' && (
        <FloatingCartButton
          itemCount={cart.getTotalItems()}
          onCartClick={() => handleViewChange('cart')}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/menu" element={<MainApp />} />
        <Route path="/services" element={<MainApp />} />
        <Route path="/about" element={<MainApp />} />
        <Route path="/contact" element={<MainApp />} />
        <Route path="/cart" element={<MainApp />} />
        <Route path="/checkout" element={<MainApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;