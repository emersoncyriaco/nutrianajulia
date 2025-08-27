import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars around the product */}
      <div className="absolute top-20 left-20 star-decoration">⭐</div>
      <div className="absolute top-40 right-20 star-decoration">✨</div>
      <div className="absolute bottom-20 left-40 star-decoration">🌟</div>
      <div className="absolute bottom-40 right-40 star-decoration">💫</div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Product Image with magical elements */}
        <div className="relative mb-12">
          <div className="inline-block relative scrapbook-element">
            <div className="bg-gradient-to-br from-orange-primary to-yellow-400 p-8 rounded-3xl shadow-2xl">
              <img 
                src="/xpintTCpTSKgxFJhkQ9zTw.jpg"
                alt="E-book Lanchinho Animado"
                className="w-64 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Magical elements around the product */}
            <div className="absolute -top-6 -left-6 text-4xl animate-bounce-gentle">🪄</div>
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce-gentle">✨</div>
            <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce-gentle">🎯</div>
            <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce-gentle">💝</div>
          </div>
          
          {/* Hand-drawn arrows */}
          <div className="absolute top-1/2 -left-20 hidden lg:block">
            <div className="text-orange-primary text-6xl transform -rotate-12">↗️</div>
          </div>
          <div className="absolute top-1/2 -right-20 hidden lg:block">
            <div className="text-orange-primary text-6xl transform rotate-12">↖️</div>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-8">
          Para quem é o Lanchinho Animado?
        </h3>
        
        <div className="bg-yellow-support p-8 rounded-3xl card-dashed max-w-3xl mx-auto">
          <p className="text-xl text-gray-primary font-nunito leading-relaxed">
            Para todas as mamães, papais, vovós e cuidadores que desejam oferecer uma alimentação mais saudável e prática para suas crianças. É para você que busca inspiração e conhecimento para transformar a relação do seu filho com a comida, garantindo mais saúde, sabor e diversão no dia a dia, desde a introdução alimentar até a fase escolar.
          </p>
        </div>

        {/* Nova seção "Quem sou eu?" */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-8">
            Quem sou eu e por que posso te ajudar?
          </h3>
          
          <div className="bg-white p-8 rounded-3xl card-dashed max-w-3xl mx-auto shadow-lg">
            <p className="text-xl text-gray-primary font-nunito leading-relaxed">
              Olá, eu sou a <span className="text-orange-primary font-bold">[Seu Nome]</span>, mãe do(a) <span className="text-blue-primary font-bold">[Nome do Filho/Filha]</span>. Como você, eu também enfrentei o desafio de garantir uma alimentação saudável em meio à correria. Depois de muito estudo e prática, desenvolvi um método que tornou tudo mais fácil e prazeroso. Hoje, minha missão é compartilhar esse conhecimento com você, para que mais crianças cresçam fortes, saudáveis e com uma relação positiva com a comida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};