
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Location = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=R.+São+Bento,+290+SL+2º+Sala+1+e+2+-+Centro+Histórico+de+São+Paulo,+São+Paulo+-+SP,+01001-000', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
            Nossa <span className="text-premium-gold">Localização</span>
          </h2>
          <div className="w-24 h-1 bg-premium-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif text-gray-text mb-6">Venha nos visitar!</h3>
            <p className="text-lg text-gray-text mb-4 leading-relaxed">
              Estamos localizados no coração do Centro Histórico de São Paulo, em um ambiente acolhedor e de fácil acesso. 
              Nossa equipe está pronta para recebê-la com todo carinho e profissionalismo.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-gold-light mb-6">
              <h4 className="font-semibold text-gray-text mb-2">Endereço:</h4>
              <p className="text-gray-text">
                R. São Bento, 290 SL 2º Sala 1 e 2<br />
                Centro Histórico de São Paulo<br />
                São Paulo - SP, 01001-000
              </p>
            </div>
            
            <Button 
              onClick={handleMapClick}
              className="bg-premium-gold hover:shadow-2xl text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver no Mapa
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-xl border-4 border-gold-metallic">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8547573470997!2d-46.636371!3d-23.544982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5959b2502b15%3A0x46b8f8b8b8b8b8b8!2sR.%20S%C3%A3o%20Bento%2C%20290%20-%20Centro%20Hist%C3%B3rico%20de%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1645123456789!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
