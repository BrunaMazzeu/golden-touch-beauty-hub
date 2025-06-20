
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

const OurSpace = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images for the space - you can replace these with actual photos
  const spaceImages = [
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Recepção"
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sala de Atendimento"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Área de Cabelos"
    },
    {
      url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sala de Manicure"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Espaço de Relaxamento"
    },
    {
      url: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Área de Espera"
    },
    {
      url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sala de Pedicure"
    },
    {
      url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Ambiente Geral"
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Detalhes do Espaço"
    },
    {
      url: "https://images.unsplash.com/photo-1600948836101-f958f8d38a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sala Privativa"
    },
    {
      url: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Área de Produtos"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Iluminação Natural"
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vista Geral do Studio"
    }
  ];

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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative">
            <Card className="overflow-hidden border-4 border-gold-light shadow-gold-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={spaceImages[currentImageIndex].url} 
                    alt={spaceImages[currentImageIndex].title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-serif bg-black/50 px-4 py-2 rounded-lg">
                      {spaceImages[currentImageIndex].title}
                    </h3>
                  </div>
                  
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

          <div>
            <div className="flex items-center mb-6">
              <Image className="h-8 w-8 text-gold-metallic mr-3" />
              <h3 className="text-3xl font-serif text-gray-text">
                Ambiente Acolhedor e Elegante
              </h3>
            </div>
            <p className="text-lg text-gray-text mb-6 leading-relaxed">
              Cada cantinho do Mariah Studio foi pensado para criar uma atmosfera de bem-estar 
              e tranquilidade. Desde a recepção até as salas de atendimento, tudo foi planejado 
              para que você se sinta especial e relaxada.
            </p>
            <p className="text-lg text-gray-text leading-relaxed">
              Nosso espaço combina elegância, conforto e funcionalidade, proporcionando 
              o ambiente perfeito para cuidar da sua beleza com todo carinho que você merece.
            </p>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-6 md:grid-cols-13 gap-2">
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
