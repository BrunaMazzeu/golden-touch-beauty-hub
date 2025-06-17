
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um horário no Mariah Studio.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
          <span className="text-amber-300">Mariah Studio</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-amber-100">
          Beleza e Estética
        </h2>
        <p className="text-lg md:text-xl mb-8 text-stone-200 max-w-2xl mx-auto leading-relaxed">
          Cuidando da sua beleza com carinho e excelência desde 2018
        </p>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-900 font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Agende agora pelo WhatsApp
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50 to-transparent" />
    </section>
  );
};

export default Hero;
