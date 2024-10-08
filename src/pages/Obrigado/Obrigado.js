// src/components/Obrigado/Obrigado.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Obrigado/Obrigado.css';
import Header from '../../components/Header/Header';

function Obrigado() {
    const navigate = useNavigate();

    const voltarParaHome = () => {
        navigate('/');
      };
      

  return (
    <div className="obrigado-container">
      <Header />
      <div className="obrigado-content">
        <h1>Obrigado!!</h1>
        <p>Agradecemos pelo seu contato. Em breve entraremos em contato com você.</p>
        <button className="botao-voltar" onClick={voltarParaHome}>
          Voltar para a página principal
        </button>
      </div>
    </div>
  );
}

export default Obrigado;
