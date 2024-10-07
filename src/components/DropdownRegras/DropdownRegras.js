import React, { useState } from 'react';
import '../DropdownRegras/DropdownRegras.css';

function DropdownRegras() {
  // const [aberto, setAberto] = useState(false);
  const [aberto, setAberto] = useState(false);  // Estado para o dropdown de regras

  const toggleDropdown = () => {
    setAberto(!aberto);
  };

  // const toggleDropdown = () => {
  //   setAberto(!aberto);
  // };

  return (

    <section className={`dropdown ${aberto ? 'aberto' : ''}`} onClick={toggleDropdown}>
      <div id="dropdown-header" className="dropdown-header">
        <span className="dropdown-titulo">Regras</span>
        <span className="icone-seta">{aberto ? '▲' : '▼'}</span>
      </div>
      {aberto && (
        <div className="conteudo-regras">
          <ol>
            <li>Nossos produtos são importados diretamente da planta da Alemanha.</li>
            <br></br>
            <li>Considere o volume mínimo como sendo 1 Full Container (FCL) - cada produto tem uma quantidade diferente disposta no filtro.</li>
            <br></br>
            <li>Insira sua sugestão de preço. Vamos analisar e te retornaremos em 24h informando o resultado da sua cotação.</li>
            <br></br>
            <li>Seu preço sugerido deve ser CFR ou NET, de preferência em U$, mas se preferir em R$, sem problemas, analisaremos de qualquer maneira.</li>
            <br></br>
            <li>Caso sua oferta seja aceita e você siga com o seu pedido, lembre-se que por serem produtos importados o lead time vai variar de 8 a 12 semanas para chegar ao porto.</li>
            <br></br>
            <li>Boa sorte no seu lance!!</li>
          </ol>
        </div>
      )}
    </section>
  );
}

export default DropdownRegras;
