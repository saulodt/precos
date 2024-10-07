import React from 'react';
import '../PortfolioPopup/PortfolioPopup.css';

function PortfolioPopup({ fecharPopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Lista de produtos disponíveis</h2>
        <ol className="lista-produtos">
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
          <li>Produto 4</li>
          <li>Produto 5</li>
          {/* Adicione mais produtos conforme necessário */}
        </ol>
        <button className="botao-fechar" onClick={fecharPopup}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default PortfolioPopup;
