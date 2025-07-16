
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511981899144?text=Olá,+gostaria+de+saber+mais+sobre+seus+serviços,+vim+do+anúncio', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/f6ac9d0e-6ed5-419a-ba9a-c019c90642d1.png')`
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-[27px] py-0 mx-0 my-0">
        <div className="mb-3 animate-fade-in">
          <img 
            src="/lovable-uploads/59c6ac5c-6034-4d59-a754-24b5a8b6762c.png" 
            alt="Mariah Studio - Beleza e Estética" 
            className="mx-auto max-w-sm w-full h-auto" 
          />
        </div>
        <p className="text-lg md:text-xl mb-4 text-gray-soft max-w-2xl mx-auto leading-relaxed px-0 py-0 my-[20px]">
          Cuidando da sua beleza com carinho e excelência desde 2018
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleWhatsAppClick} 
            className="bg-premium-gold hover:shadow-2xl text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-gold-light"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Agende agora pelo WhatsApp
          </Button>

          <Button 
            asChild
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-premium-gold font-bold px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <Link to="/contatos">
              <Phone className="mr-2 h-5 w-5" />
              Ver Contatos
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige-light to-transparent" />
    </section>
  );
};

export default Hero;
