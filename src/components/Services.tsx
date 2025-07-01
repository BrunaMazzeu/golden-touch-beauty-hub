
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Hand, Footprints, Stethoscope, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Scissors, name: "Cabelos", description: "Cortes, coloração e tratamentos" },
    { icon: Hand, name: "Manicure", description: "Cuidados especiais para suas mãos" },
    { icon: Footprints, name: "Pedicure", description: "Tratamentos relaxantes para os pés" },
    { icon: Stethoscope, name: "Podologia", description: "Cuidados profissionais para os pés" },
    { icon: Sparkles, name: "Terapia Corporal", description: "Bem-estar e relaxamento" }
  ];

  return (
    <section className="py-20 px-6 bg-beige-light">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
          Nossos <span className="text-premium-gold">Serviços</span>
        </h2>
        <div className="w-24 h-1 bg-premium-gold mx-auto mb-12"></div>

        {/* Grid responsivo em vez de carrossel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-beige-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-premium-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-gray-text mb-3">{service.name}</h3>
                <p className="text-gray-text">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-lg text-gray-text max-w-3xl mx-auto">
          Atendimentos personalizados e com produtos de qualidade das melhores marcas no mercado.
        </p>
      </div>
    </section>
  );
};

export default Services;
