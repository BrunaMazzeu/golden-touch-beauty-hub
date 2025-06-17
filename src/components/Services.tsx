
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Hand, Footprints, Stethoscope, Sparkles } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { icon: Scissors, name: "Cabelos", description: "Cortes, coloração e tratamentos" },
    { icon: Hand, name: "Manicure", description: "Cuidados especiais para suas mãos" },
    { icon: Footprints, name: "Pedicure", description: "Tratamentos relaxantes para os pés" },
    { icon: Stethoscope, name: "Podologia", description: "Cuidados profissionais para os pés" },
    { icon: Sparkles, name: "Terapia Corporal", description: "Bem-estar e relaxamento" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">
          Nossos <span className="text-amber-600">Serviços</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

        {/* Carrossel */}
        <div className="relative overflow-hidden mb-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / services.length)}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <Card className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-stone-800 mb-3">{service.name}</h3>
                    <p className="text-stone-600">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-600 scale-125' 
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <p className="text-lg text-stone-700 max-w-3xl mx-auto">
          Atendimentos personalizados e com produtos de qualidade das melhores marcas no mercado.
        </p>
      </div>
    </section>
  );
};

export default Services;
