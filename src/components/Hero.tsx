
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
          <span className="text-premium-gold">Mariah Studio</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-beige-light">
          Beleza e Estética
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-soft max-w-2xl mx-auto leading-relaxed">
          Cuidando da sua beleza com carinho e excelência desde 2018
        </p>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-premium-gold hover:shadow-2xl text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-gold-light"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Agende agora pelo WhatsApp
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige-light to-transparent" />
    </section>
  );
};

export default Hero;
