import React from 'react';
import { Shield, Heart } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">🛡️</div>
      <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">💯</div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="card-dashed p-8 md:p-12 bg-yellow-support">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Guarantee Seal */}
            <div className="text-center">
              <div className="relative inline-block scrapbook-element">
                <div className="w-48 h-48 rounded-full shadow-2xl overflow-hidden">
                  <img 
                    src="/selo_7D_garantia-removebg-preview.png"
                    alt="Garantia 7 Dias"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements around seal */}
                <div className="absolute -top-4 -left-4 text-3xl">✅</div>
                <div className="absolute -top-4 -right-4 text-3xl">💝</div>
                <div className="absolute -bottom-4 -left-4 text-3xl">🤝</div>
                <div className="absolute -bottom-4 -right-4 text-3xl">❤️</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-orange-primary mb-6 flex items-center">
                <Heart className="w-8 h-8 text-blue-primary mr-3" />
                Sua satisfação ou seu dinheiro de volta!
              </h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-primary font-nunito leading-relaxed">
                  Você tem{' '}
                  <span className="text-blue-primary font-bold">7 dias</span>{' '}
                  para explorar todo o material. Se por qualquer motivo você não ficar satisfeita, basta nos enviar um e-mail e nós devolveremos{' '}
                  <span className="text-orange-primary font-bold">100% do seu investimento</span>, 
                  sem perguntas e sem burocracia.
                </p>
                
                <p className="text-blue-primary font-nunito font-bold mt-4 text-xl">
                  O risco é todo nosso! 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};