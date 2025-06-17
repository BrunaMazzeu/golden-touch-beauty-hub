
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
    <section className="py-20 px-6 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">
            Nossa <span className="text-amber-600">Equipe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-600/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-stone-800 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-stone-600 leading-relaxed">{member.description}</p>
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
