import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-yellow-support py-12 px-6 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 star-decoration">⭐</div>
      <div className="absolute top-20 right-20 star-decoration">✨</div>
      <div className="absolute bottom-20 left-20 star-decoration">🌟</div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center min-h-screen justify-center space-y-8">
          
          {/* BLOCO 1: Título Principal (Acima da Imagem) */}
          <div className="order-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-fredoka font-bold text-orange-primary mb-4 leading-tight">
              Transforme a alimentação do Seu Filho com <span className="text-red-600">+ de 365 Refeições Rápidas, Gostosas e Saudáveis!</span>
            </h1>
          </div>

          {/* BLOCO 2: Imagem Principal */}
          <div className="order-2">
            {/* Header 1 - Nova imagem acima */}
            <div className="mb-4">
              <img 
                src="/header 1.webp"
                alt="Header informativo sobre alimentação saudável"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-lg mx-auto"
              />
            </div>
            
            {/* Imagem principal substituída */}
            <div className="relative scrapbook-element">
              <img 
                src="/habitos-alimentares-saudaveis-infantil.png"
                alt="Hábitos alimentares saudáveis infantil - comparação entre alimentação saudável e não saudável"
                className="w-full max-w-sm md:max-w-md h-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle">🎒</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce-gentle">🍎</div>
            </div>
          </div>

          {/* BLOCO 3: Subtítulo e Chamada para Ação (Abaixo da Imagem) */}
          <div className="order-3 space-y-6">
            <p className="text-xl md:text-2xl text-gray-primary font-nunito leading-relaxed max-w-3xl">
              Elimine agora alimentos que não nutrem e que só farão seu filho engordar com ansiedade. 
              <span className="block mt-4 text-2xl md:text-3xl font-bold text-blue-primary">Por Apenas R$14,90!</span>
            </p>

            {/* CTA Button */}
            <button 
              onClick={scrollToPricing}
              className="btn-primary text-lg animate-wiggle"
            >
              QUERO ADQUIRIR O MEU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};