import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Copyright */}
        <div className="mb-8">
          <p className="text-lg font-nunito font-bold">
            Copyright 2025 | Lanchinho Animado
          </p>
        </div>
        
        {/* Legal Notice */}
        <div className="text-sm text-gray-300 font-nunito leading-relaxed space-y-4">
          <p>
            <strong>Aviso Legal:</strong> Este produto é destinado apenas para fins educacionais e informativos. 
            Os resultados podem variar de pessoa para pessoa. Sempre consulte um pediatra ou nutricionista 
            antes de fazer mudanças significativas na alimentação de seu filho.
          </p>
          
          <p>
            As informações contidas neste material não substituem o acompanhamento médico profissional. 
            Em caso de alergias alimentares ou condições médicas específicas, consulte sempre um especialista.
          </p>
          
          <p>
            Este site não está afiliado ao Facebook, Google ou qualquer outra plataforma de mídia social. 
            Após deixar o Facebook, a responsabilidade não é mais deles e sim do nosso site.
          </p>
          
          <div className="border-t border-gray-600 pt-4 mt-8">
            <p className="text-xs">
              Todos os direitos reservados. É proibida a reprodução total ou parcial deste conteúdo 
              sem autorização expressa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};