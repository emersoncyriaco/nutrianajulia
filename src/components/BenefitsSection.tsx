import React from 'react';
import { Clock, Apple, Sprout, Zap } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-orange-primary" />,
      emoji: "💪",
      title: "Quer estabelecer hábitos alimentares saudáveis desde cedo.",
      description: "Os primeiros anos são fundamentais para formar o paladar e os hábitos que seu filho levará para a vida toda. Você estará plantando as sementes de uma relação positiva com a comida, prevenindo problemas alimentares futuros."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-primary" />,
      emoji: "⏰",
      title: "Precisa otimizar o tempo na rotina familiar.",
      description: "Entre escola, trabalho e atividades, sabemos que o tempo é precioso! Por isso, todas as receitas são práticas, podem ser preparadas com antecedência e muitas levam menos de 30 minutos para ficarem prontas, sem abrir mão da qualidade nutricional."
    },
    {
      icon: <Apple className="w-8 h-8 text-orange-primary" />,
      emoji: "🍎",
      title: "Quer oferecer alimentação nutritiva sem complicação.",
      description: "Se você sempre se pergunta o que preparar para seu filho comer de forma saudável sem passar horas na cozinha, esse guia é perfeito! Aqui você encontra mais de 200 receitas nutritivas, rápidas e que as crianças realmente adoram comer."
    },
    {
      icon: <Sprout className="w-8 h-8 text-orange-primary" />,
      emoji: "🌱",
      title: "Introduzir alimentos de forma segura e adequada.",
      description: "O nosso guia traz receitas organizadas com orientações claras sobre texturas, porções e combinações ideais para cada fase, proporcionando segurança e tranquilidade para os pais."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-3xl animate-bounce-gentle">💡</div>
      <div className="absolute top-10 right-10 text-3xl animate-bounce-gentle">🎯</div>
      
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-center mb-12 text-orange-primary">
          IDEAL PARA VOCÊ QUE:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-dashed p-8 text-center scrapbook-element bg-yellow-support"
            >
              <div className="text-6xl mb-4">{benefit.emoji}</div>
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-nunito font-bold text-gray-primary mb-4 leading-relaxed">
                {benefit.title}
              </h4>
              <p className="text-lg text-gray-primary font-nunito leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};