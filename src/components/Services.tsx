import React, { useState, useEffect } from 'react';
import { Calendar, Users, Home, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiteSettings } from '../types';

interface ServicesProps {
  siteSettings: SiteSettings | null;
}

const Services: React.FC<ServicesProps> = ({ siteSettings }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const serviceItems = [
    {
      title: siteSettings?.service_1_title || 'Table Reservation',
      body: siteSettings?.service_1_body || 'Book a table in advance for meetings, dates, or cozy study sessions.',
      image: siteSettings?.service_1_image || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800',
      icon: <Calendar className="h-6 w-6" />,
      gallery: siteSettings?.service_1_gallery
        ? siteSettings.service_1_gallery.split(',').filter(Boolean)
        : [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800',
            'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800'
          ]
    },
    {
      title: siteSettings?.service_2_title || 'Catering & Events',
      body: siteSettings?.service_2_body || 'Bring the Homeros experience to your parties, office functions, and gatherings.',
      image: siteSettings?.service_2_image || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
      icon: <Users className="h-6 w-6" />,
      gallery: siteSettings?.service_2_gallery
        ? siteSettings.service_2_gallery.split(',').filter(Boolean)
        : [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800'
          ]
    },
    {
      title: siteSettings?.service_3_title || 'Private Venue Booking',
      body: siteSettings?.service_3_body || 'Reserve our entire minimalist café space for private workshops, product launches, or shoots.',
      image: siteSettings?.service_3_image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
      icon: <Home className="h-6 w-6" />,
      gallery: siteSettings?.service_3_gallery
        ? siteSettings.service_3_gallery.split(',').filter(Boolean)
        : [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
            'https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=800',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800'
          ]
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeServiceIndex === null) return;
      const gallery = serviceItems[activeServiceIndex]?.gallery || [];
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      } else if (e.key === 'Escape') {
        setActiveServiceIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeServiceIndex]);

  const openCatalogue = (index: number) => {
    setActiveServiceIndex(index);
    setCurrentImageIndex(0);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeServiceIndex === null) return;
    const gallery = serviceItems[activeServiceIndex].gallery;
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeServiceIndex === null) return;
    const gallery = serviceItems[activeServiceIndex].gallery;
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div className="bg-cafe-cream min-h-screen text-cafe-brown py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center space-y-4 reveal">
          <h1 className="text-4xl md:text-6xl font-agrandir font-black text-cafe-dark">
            {siteSettings?.services_title || 'Our Services'}
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
            {siteSettings?.services_description || 'Beyond artisan coffee, we offer premium culinary and booking experiences. Click a service below to view our catalogue.'}
          </p>
          <div className="h-1 w-16 bg-cafe-brown mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              onClick={() => openCatalogue(index)}
              className="bg-white rounded-2xl border border-cafe-beige overflow-hidden hover:shadow-xl hover:border-cafe-gold transition-all duration-300 flex flex-col h-full group cursor-pointer reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image box */}
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="bg-white/90 text-cafe-dark px-4 py-2 rounded-full font-medium text-xs shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Catalogue
                  </span>
                </div>
              </div>

              {/* Text box */}
              <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-cafe-beige/40 rounded-xl flex items-center justify-center text-cafe-brown">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-agrandir font-bold text-cafe-dark flex items-center justify-between">
                    <span>{service.title}</span>
                    <span className="text-xs text-cafe-gold font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {service.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-12 border-t border-cafe-beige/40 reveal">
          <button
            onClick={() => setIsTermsOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-cafe-brown text-cafe-brown rounded-full font-bold uppercase tracking-wider hover:bg-cafe-brown hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Terms & Conditions
          </button>
          <a
            href={siteSettings?.services_inquire_link || "https://form.jotform.com/253152398113050"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-cafe-brown text-white rounded-full font-bold uppercase tracking-wider hover:bg-cafe-dark transition-all duration-300 shadow-md hover:shadow-lg text-sm text-center"
          >
            Inquire Now
          </a>
        </div>
      </div>

      {/* Catalogue Carousel Modal */}
      {activeServiceIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveServiceIndex(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setActiveServiceIndex(null)}
            className="absolute top-4 right-4 z-55 text-white hover:text-cafe-gold bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            title="Close Catalogue"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Carousel Wrapper */}
          <div 
            className="relative w-full max-w-4xl flex flex-col items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Catalogue Image Area */}
            <div className="relative w-full flex items-center justify-center group/carousel">
              {/* Left Arrow */}
              {serviceItems[activeServiceIndex].gallery.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 z-50 text-white hover:text-cafe-gold bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all shadow-lg hover:scale-105"
                  title="Previous Image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Main Image Container (3:4 portrait layout scaled to maximum possible size) */}
              <div className="h-[80vh] md:h-[88vh] max-h-[950px] aspect-[3/4] max-w-[95vw] bg-cafe-dark/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
                <img
                  key={currentImageIndex}
                  src={serviceItems[activeServiceIndex].gallery[currentImageIndex]}
                  alt={`${serviceItems[activeServiceIndex].title} Gallery`}
                  className="w-full h-full object-contain rounded-2xl select-none animate-fade-in"
                />
              </div>

              {/* Right Arrow */}
              {serviceItems[activeServiceIndex].gallery.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 z-50 text-white hover:text-cafe-gold bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all shadow-lg hover:scale-105"
                  title="Next Image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {isTermsOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={() => setIsTermsOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsTermsOpen(false)}
            className="absolute top-4 right-4 z-55 text-white hover:text-cafe-gold bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            title="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-4xl flex flex-col items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[80vh] md:h-[88vh] max-h-[950px] aspect-[3/4] max-w-[95vw] bg-cafe-dark/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
              <img
                src={siteSettings?.services_terms_image || "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800"}
                alt="Terms and Conditions"
                className="w-full h-full object-contain rounded-2xl select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
