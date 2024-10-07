import React from 'react';
import '../SecaoImagemTexto/SecaoImagemTexto.css';
import imagemSecao from '../../assets/other-image.png';

function SecaoImagemTexto() {
  return (
    <div className="secao-imagem-texto">
      <img src={imagemSecao} alt="Imagem Secao" className="imagem-secao" />
      <p className="texto-secao">Estamos abertos a te ouvir! Sugira para nós, qual o preço que você gostaria de pagar pelos nossos sais inorgânicos. Nos envie uma proposta justa , 
        com pensamento nos benefícios de nossos sais para seu negócio. Nós analisaremos sua proposta e te retornaremos em 24 horas. Se ela for válida, 
        te indicaremos o link para inserir o pedido. Confira abaixo algumas regrinhas.</p>
    </div>
  );
}

export default SecaoImagemTexto;
