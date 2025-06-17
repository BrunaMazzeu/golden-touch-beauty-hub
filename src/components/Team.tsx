
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const team = [
    {
      name: "Clau Monteiro",
      role: "Proprietária",
      description: "Cabeleireira colorista e especialista em cortes femininos.",
      image: "https://images.unsplash.com/photo-1594824658297-a464ff18a03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Wauani Lima",
      role: "Podóloga e Terapeuta",
      description: "Podóloga e terapeuta corporal. Destaque pela atenção, cuidado e bem-estar em cada atendimento.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Denise Romulo",
      role: "Especialista em Estética",
      description: "Especialista em depilação, mãos e pés. Reconhecida pela excelência e delicadeza no atendimento.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
            Nossa <span className="text-premium-gold">Equipe</span>
          </h2>
          <div className="w-24 h-1 bg-premium-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-white border-beige-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-metallic shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold-metallic/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-gray-text mb-2">{member.name}</h3>
                  <p className="text-gold-metallic font-medium mb-3">{member.role}</p>
                  <p className="text-gray-text leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
