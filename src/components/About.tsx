
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-beige-light">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
          Nossa <span className="text-premium-gold">História</span>
        </h2>
        <div className="w-24 h-1 bg-premium-gold mx-auto mb-12"></div>
        
        <p className="text-lg md:text-xl text-gray-text leading-relaxed max-w-4xl mx-auto">
          Mariah Studio – Beleza e Estética nasceu em 2018, com o propósito de cuidar da beleza 
          e elevar a autoestima de cada cliente. Criamos um espaço acolhedor, humanizado, onde 
          cada detalhe é pensado com carinho, profissionalismo e dedicação.
        </p>
      </div>
    </section>
  );
};

export default About;
