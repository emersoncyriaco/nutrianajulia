import React from 'react';
import { Clock, Frown, ScrollIcon as Broccoli } from 'lucide-react';

export const PainSection: React.FC = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-orange-primary" />,
      emoji: "🍱",
      text: "Não sabe mais o que mandar na lancheira e acaba repetindo sempre as mesmas coisas."
    },
    {
      icon: <Frown className="w-8 h-8 text-orange-primary" />,
      emoji: "😰",
      text: "Sente que seu filho não come bem e se preocupa com a saúde e o desenvolvimento dele."
    },
    {
      icon: <Broccoli className="w-8 h-8 text-orange-primary" />,
      emoji: "⏰",
      text: "Não tem tempo ou criatividade para preparar refeições e lanches saudáveis."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-primary" />,
      emoji: "😔",
      text: "Se sente culpada por oferecer alimentos industrializados e pouco nutritivos."
    },
    {
      icon: <Frown className="w-8 h-8 text-orange-primary" />,
      emoji: "🥦",
      text: "Tem dificuldades para fazer seu filho experimentar novos alimentos."
    },
    {
      icon: <Broccoli className="w-8 h-8 text-orange-primary" />,
      emoji: "📋",
      text: "Gostaria de ter um cardápio semanal prático e organizado para facilitar sua rotina."
    }
  ];

  return (
    <section className="py-20 bg-yellow-support relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-3xl animate-bounce-gentle">😰</div>
      <div className="absolute top-10 right-10 text-3xl animate-bounce-gentle">🤔</div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Support Image */}
        <div className="text-center mb-12">
          <img 
            src="https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
            alt="Mãe preocupada na cozinha"
            className="w-64 h-48 object-cover rounded-3xl mx-auto shadow-lg scrapbook-element"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-center mb-12 text-orange-primary">
          Se você se identifica com algum desses pontos, o Guia é para você:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="card-dashed p-8 text-center scrapbook-element"
            >
              <div className="text-6xl mb-4">{pain.emoji}</div>
              <div className="flex justify-center mb-4">
                {pain.icon}
              </div>
              <p className="text-lg text-gray-primary font-nunito font-semibold leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};