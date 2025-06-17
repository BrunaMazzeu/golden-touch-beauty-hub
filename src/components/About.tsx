
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">
          Nossa <span className="text-amber-600">História</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>
        
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-4xl mx-auto">
          Mariah Studio – Beleza e Estética nasceu em 2018, com o propósito de cuidar da beleza 
          e elevar a autoestima de cada cliente. Criamos um espaço acolhedor, humanizado, onde 
          cada detalhe é pensado com carinho, profissionalismo e dedicação.
        </p>
      </div>
    </section>
  );
};

export default About;
