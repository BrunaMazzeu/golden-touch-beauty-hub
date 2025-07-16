
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contacts = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511981899144?text=Olá,+gostaria+de+saber+mais+sobre+seus+serviços,+vim+do+anúncio', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=R.+São+Bento,+290+SL+2º+Sala+1+e+2+-+Centro+Histórico+de+São+Paulo,+São+Paulo+-+SP,+01001-000', '_blank');
  };

  return (
    <div className="min-h-screen bg-premium-beige">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-premium-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Entre em <span className="text-beige-light">Contato</span>
          </h1>
          <p className="text-xl text-beige-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos aqui para cuidar da sua beleza com carinho e excelência. 
            Entre em contato conosco e agende seu horário.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-beige-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif text-gray-text mb-8">
                Informações de <span className="text-premium-gold">Contato</span>
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-white border-beige-primary shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-premium-gold p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-text mb-1">Endereço</h3>
                        <p className="text-gray-text">
                          R. São Bento, 290 SL 2º Sala 1 e 2<br />
                          Centro Histórico de São Paulo<br />
                          São Paulo - SP, 01001-000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-beige-primary shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-premium-gold p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-text mb-1">WhatsApp</h3>
                        <p className="text-gray-text">(11) 98189-9144</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-beige-primary shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-premium-gold p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-text mb-1">Horário de Funcionamento</h3>
                        <p className="text-gray-text">
                          Segunda a Sexta: 9h às 18h<br />
                          Sábado: 9h às 17h<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-premium-gold hover:shadow-2xl text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </Button>

                <Button 
                  onClick={handleMapClick}
                  variant="outline"
                  className="w-full border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver no Mapa
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-xl border-4 border-gold-metallic">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8547573470997!2d-46.636371!3d-23.544982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5959b2502b15%3A0x46b8f8b8b8b8b8b8!2sR.%20S%C3%A3o%20Bento%2C%20290%20-%20Centro%20Hist%C3%B3rico%20de%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1645123456789!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
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

      {/* Services Summary */}
      <section className="py-20 px-6 bg-gray-soft">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-text mb-8">
            Nossos <span className="text-premium-gold">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-premium-gold mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Cortes e Coloração",
              "Manicure e Pedicure", 
              "Podologia",
              "Terapia Corporal",
              "Tratamentos Capilares",
              "Cuidados Especiais"
            ].map((service, index) => (
              <Card key={index} className="bg-white border-beige-primary shadow-lg">
                <CardContent className="p-4">
                  <p className="text-gray-text font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-lg text-gray-text max-w-3xl mx-auto">
            Atendimentos personalizados e com produtos de qualidade das melhores marcas do mercado.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-premium-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Pronta para se transformar?
          </h2>
          <p className="text-xl text-beige-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende seu horário agora e descubra o que o cuidado personalizado pode fazer por você.
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-gold-dark hover:bg-beige-light hover:text-gold-metallic font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Agende agora pelo WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
