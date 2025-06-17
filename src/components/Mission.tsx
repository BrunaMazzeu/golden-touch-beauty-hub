
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Star } from 'lucide-react';

const Mission = () => {
  const items = [
    {
      icon: Heart,
      title: "Missão",
      description: "Criar um espaço acolhedor e humanizado, em que cada detalhe é pensado com carinho, profissionalismo e dedicação."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser um lugar de transformação, acolhimento, bem-estar e confiança, com atendimentos pensados individualmente."
    },
    {
      icon: Star,
      title: "Valores",
      description: "Cuidado, Respeito, Excelência, Constante evolução, União da equipe com leveza e parceria."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-soft">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="bg-white border-beige-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
              <CardContent className="p-8 text-center">
                <div className="bg-premium-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-gray-text mb-4">{item.title}</h3>
                <p className="text-gray-text leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
