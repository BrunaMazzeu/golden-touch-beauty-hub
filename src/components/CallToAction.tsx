
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um horário no Mariah Studio vim pelo site.");
window.open(`https://wa.me/5511981899144?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-premium-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10">
          <Sparkles className="h-8 w-8 text-white animate-pulse" />
        </div>
        <div className="absolute top-20 right-20">
          <Sparkles className="h-6 w-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-10 left-1/4">
          <Sparkles className="h-10 w-10 text-white animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-20 right-10">
          <Sparkles className="h-7 w-7 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Pronta para se transformar 
          <span className="block text-beige-light">com a gente?</span>
        </h2>
        
        <p className="text-xl text-beige-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Agende seu horário agora e descubra o que o cuidado personalizado pode fazer por você.
        </p>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-white text-gold-dark hover:bg-beige-light hover:text-gold-metallic font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
        >
          <MessageCircle className="mr-3 h-7 w-7" />
          Agende seu horário agora pelo WhatsApp
        </Button>

        <div className="mt-12 text-beige-light">
          <p className="text-lg font-medium">
            📍 Atendimento personalizado • 💫 Equipe especializada • ✨ Ambiente acolhedor
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
