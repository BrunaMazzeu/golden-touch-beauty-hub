
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Location = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Mariah+Studio+Beleza+Estética', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-beige-light to-gray-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
            Nossa <span className="text-gold-metallic">Localização</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-metallic to-gold-dark mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif text-gray-text mb-6">Venha nos visitar!</h3>
            <p className="text-lg text-gray-text mb-8 leading-relaxed">
              Estamos localizados em um ambiente acolhedor e de fácil acesso. 
              Nossa equipe está pronta para recebê-la com todo carinho e profissionalismo.
            </p>
            
            <Button 
              onClick={handleMapClick}
              className="bg-gradient-to-r from-gold-metallic to-gold-dark hover:from-gold-light hover:to-gold-metallic text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver no Mapa
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-xl border border-beige-primary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1068631152483!2d-46.65425598538834!3d-23.561414584682894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635174849905!5m2!1spt-BR!2sbr"
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
