import React, { useState } from 'react';
import { Check, X, Clock } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleBasicClick = () => {
    setShowPopup1(true);
  };

  const handlePopup1Decline = () => {
    setShowPopup1(false);
    setShowPopup2(true);
  };

  const handlePopup2Decline = () => {
    setShowPopup2(false);
    // Redirect to checkout for R$ 14,90
    window.open('https://nutrianajulia.shop/oferta3', '_blank');
  };

  const handleCheckout = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section id="pricing-section" className="pricing-section-value-anchor relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce-gentle">💰</div>
        <div className="absolute top-10 right-10 text-4xl animate-bounce-gentle">🎯</div>
        
        <div className="container max-w-7xl mx-auto px-6">
          {/* Main Title */}
          <h2 className="section-title text-3xl md:text-4xl font-fredoka font-bold text-center mb-6 text-orange-primary">
            ESCOLHA a melhor opção para você:
          </h2>
          
          {/* Pricing Cards */}
          <div className="pricing-grid">
            {/* CARTÃO PRINCIPAL (PLANO COMPLETO) */}
            <div className="price-card featured">
              <div className="featured-badge">⭐ PLANO COMPLETO</div>
              <h3 className="plan-title">PLANO COMPLETO</h3>
              <p className="plan-description">A solução definitiva para lancheiras saudáveis, práticas e divertidas.</p>
              
              <div className="price-list-wrapper">
                <p className="list-header">Ao investir hoje, você leva TUDO isso:</p>
                <ul>
                  <li><span className="check-icon">✅</span> <strong>Guia Principal:</strong> Lanchinho Animado</li>
                  <li><span className="check-icon">✅</span> <strong>Guia da Alimentação Infantil Saudável</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Mais de 200 Receitas completas</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Cardápios com lista de compras</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Detalhamento nas formas de preparo</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Alternativas de ingredientes saudáveis</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Receitas de Pães, Doces e Pizzas Saudáveis</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia do Lúdico para Vencer a Seletividade</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Manual Prático para Montar Lancheiras</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia Especial para Crianças com Alergias</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Guia de Congelamento e Organização</strong></li>
                  <li><span className="fire-icon">🔥</span> <strong>Atualizações mensais</strong></li>
                </ul>
              </div>

              <div className="price-box">
                <p className="price-text">Por apenas:</p>
                <p className="main-price">R$ 27,90</p>
              </div>
              <button 
                onClick={() => handleCheckout('https://nutrianajulia.shop/planocompleto/')}
                className="cta-button primary"
              >
                QUERO O PLANO COMPLETO
              </button>
            </div>

            {/* CARTÃO SECUNDÁRIO (PLANO BÁSICO) */}
            <div className="price-card">
              <h3 className="plan-title">Plano Básico</h3>
              <p className="plan-description">O guia principal para começar a inovar.</p>
              
              <div className="price-list-wrapper minimal">
                <ul>
                  <li><span className="check-icon">✅</span> <strong>Guia Lanchinho Animado</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Alimentação Infantil Saudável</strong></li>
                  <li><span className="check-icon">✅</span> <strong>Mais de 200 Receitas de café da manhã, almoço, café da tarde e jantar</strong></li>
                </ul>
              </div>

              <div className="price-box">
                <p className="price-text">Por apenas:</p>
                <p className="main-price">R$ 14,90</p>
              </div>
              <button 
                onClick={handleBasicClick}
                className="cta-button secondary"
              >
                QUERO SOMENTE O BÁSICO
              </button>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="text-center mt-8">
            <p className="text-lg font-nunito font-bold text-orange-primary bg-yellow-support px-6 py-3 rounded-full inline-block animate-wiggle">
              APROVEITE AGORA: Você não vai encontrar esse preço depois!
            </p>
          </div>

          {/* Guarantee Footer */}
          <div className="guarantee-footer">
            <img src="/selo_7D_garantia-removebg-preview.png" alt="Garantia de 7 dias" />
            <span>Compra segura | Acesso imediato | Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Popup 1 - First Downsell */}
      {showPopup1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-bounce-gentle">
            <button 
              onClick={() => setShowPopup1(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-fredoka font-bold text-orange-primary mb-4">
                ESPERE! OFERTA EXCLUSIVA PARA VOCÊ!
              </h3>
              
              <p className="text-gray-primary font-nunito mb-6 leading-relaxed">
                Só agora, libere o Pacote Completo com todos os 5 bônus por um preço que não vai ver de novo. 
                Leve tudo, não por R$ 27,90, mas por apenas...
              </p>
              
              <div className="text-3xl font-fredoka font-bold text-blue-primary mb-6">
                R$ 24,90
              </div>
              
              <button 
                onClick={() => handleCheckout('https://nutrianajulia.shop/oferta2')}
                className="btn-primary w-full text-lg mb-4 animate-wiggle"
              >
                SIM, QUERO APROVEITAR O DESCONTO!
              </button>
              
              <button 
                onClick={handlePopup1Decline}
                className="text-gray-500 underline text-sm font-nunito hover:text-gray-700"
              >
                Não, obrigado. Prefiro pagar R$ 14,90 só pelo guia.
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup 2 - Second Downsell */}
      {showPopup2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative animate-bounce-gentle">
            <button 
              onClick={() => setShowPopup2(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-fredoka font-bold text-orange-primary mb-4">
                ÚLTIMA CHANCE!
              </h3>
              
              <p className="text-gray-primary font-nunito mb-6 leading-relaxed">
                Entendido. Mas não podia deixar você ir sem esta oferta final. 
                Leve o Pacote Completo por apenas...
              </p>
              
              <div className="text-3xl font-fredoka font-bold text-blue-primary mb-6">
                R$ 19,90
              </div>
              
              <button 
                onClick={() => handleCheckout('https://nutrianajulia.shop/oferta3/')}
                className="btn-primary w-full text-lg mb-4 animate-wiggle"
              >
                OK, AGORA EU QUERO!
              </button>
              
              <button 
                onClick={handlePopup2Decline}
                className="text-gray-500 underline text-sm font-nunito hover:text-gray-700"
              >
                Não, quero mesmo só o guia por R$ 14,90.
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
