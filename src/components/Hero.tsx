import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-cafe-cream to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-agrandir font-black text-cafe-brown mb-6 animate-fade-in">
          Artisan Brews, Comforting Bites
          <span className="block text-cafe-accent mt-2">Homeros Cafe</span>
        </h1>
        <p className="text-xl font-agrandir font-normal text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
          Exceptional coffee, freshly baked pastries, and a warm atmosphere.
        </p>
        <div className="flex justify-center">
          <a
            href="#menu"
            className="bg-cafe-accent text-white px-8 py-3 rounded-full hover:bg-cafe-brown transition-all duration-300 transform hover:scale-105 font-medium shadow-md hover:shadow-lg"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;