
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurSpace = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fotos reais do espaço do salão
  const spaceImages = [
    {
      url: "/lovable-uploads/5207e103-0d54-469b-babb-4df19a4cae81.png",
      title: "Área de Atendimento - Cadeiras e Poltronas"
    },
    {
      url: "/lovable-uploads/a168a7f6-c10d-4821-b015-cf53e2410b6b.png",
      title: "Espelhos Iluminados"
    },
    {
      url: "/lovable-uploads/184a595e-52e8-434d-ac8f-d3e5b335efd9.png",
      title: "Área de Lavagem - Lavatórios"
    },
    {
      url: "/lovable-uploads/f41a4886-0bb7-4f82-90c8-8bf39ba608cc.png",
      title: "Sala de Atendimento Privativo"
    },
    {
      url: "/lovable-uploads/29d78200-d4c6-4574-9f27-d288de689166.png",
      title: "Mesa de Massagem e Relaxamento"
    },
    {
      url: "/lovable-uploads/da9db602-8980-4ae2-9cea-4e0c2a429b6c.png",
      title: "Sala de Podologia"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % spaceImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [spaceImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % spaceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + spaceImages.length) % spaceImages.length);
  };

  return (
    <section className="py-20 px-6 bg-gray-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-text mb-8">
            Nosso <span className="text-premium-gold">Espaço</span>
          </h2>
          <div className="w-24 h-1 bg-premium-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-text max-w-3xl mx-auto">
            Conheça nosso ambiente acolhedor, pensado em cada detalhe para proporcionar 
            conforto, bem-estar e uma experiência única de beleza e relaxamento.
          </p>
        </div>

        {/* Galeria Principal */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-4xl w-full">
            <Card className="overflow-hidden border-4 border-gold-light shadow-gold-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={spaceImages[currentImageIndex].url} 
                    alt={spaceImages[currentImageIndex].title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Controles de navegação */}
                  <Button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold-metallic hover:bg-gold-dark text-white rounded-full p-2 shadow-lg"
                    size="icon"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold-metallic hover:bg-gold-dark text-white rounded-full p-2 shadow-lg"
                    size="icon"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {spaceImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'border-gold-metallic shadow-gold' 
                  : 'border-beige-primary hover:border-gold-light'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-16 object-cover"
              />
              {index === currentImageIndex && (
                <div className="absolute inset-0 bg-gold-metallic/20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-8">
          <p className="text-gray-text">
            <span className="text-gold-metallic font-bold text-lg">
              {currentImageIndex + 1}
            </span>
            <span className="mx-2">de</span>
            <span className="text-gold-metallic font-bold text-lg">
              {spaceImages.length}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurSpace;
