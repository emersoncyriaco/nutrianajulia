import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como vou receber o material?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso para baixar todos os materiais em formato PDF. O acesso é imediato e vitalício."
    },
    {
      question: "As receitas são adequadas para que idade?",
      answer: "O guia contém receitas organizadas por faixas etárias, desde a introdução alimentar (6 meses) até crianças maiores. Cada receita indica a idade recomendada e adaptações necessárias."
    },
    {
      question: "E se meu filho tem alergias alimentares?",
      answer: "Temos um bônus exclusivo com receitas especiais para crianças com alergias às principais proteínas (leite, ovo, soja, amendoim). Todas as receitas são seguras e testadas."
    },
    {
      question: "Preciso de ingredientes especiais ou caros?",
      answer: "Não! Todas as receitas utilizam ingredientes comuns, encontrados facilmente em qualquer supermercado. Priorizamos praticidade e economia sem abrir mão da qualidade nutricional."
    },
    {
      question: "Quanto tempo leva para preparar as receitas?",
      answer: "A maioria das receitas leva entre 15 a 30 minutos para ficar pronta. Muitas podem ser preparadas com antecedência e congeladas, otimizando ainda mais seu tempo."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeita com o material, devolvemos 100% do seu investimento, sem perguntas."
    },
    {
      question: "Posso imprimir o material?",
      answer: "Sim! Todo o material está em formato PDF de alta qualidade, otimizado para impressão. Você pode imprimir quantas vezes quiser para facilitar o uso na cozinha."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Totalmente seguro! Utilizamos a plataforma Pepperpay, que possui certificação SSL e criptografia de dados. Seus dados estão protegidos e o processo é 100% confiável."
    }
  ];

  return (
    <section className="py-20 bg-yellow-support relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">❓</div>
      <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">💡</div>
      
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-fredoka font-bold text-center mb-12 text-orange-primary">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-dashed"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-nunito font-bold text-gray-primary pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-orange-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-primary font-nunito leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};