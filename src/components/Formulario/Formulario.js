// src/components/Formulario/Formulario.js
import React, { useState } from 'react';
import axios from 'axios';
import './Formulario.css';
import PortfolioPopup from '../PortfolioPopup/PortfolioPopup';
import { useNavigate } from 'react-router-dom';


function Formulario() {
  const navigate = useNavigate();


  const [linhasProdutos, setLinhasProdutos] = useState([
    { produto: '', volume: '', preco: '', moeda: '', volumeMinimo: '', precoMinimo: '' },
  ]);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
  });

  const [popupAberto, setPopupAberto] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Definindo valores mínimos para cada produto
  const produtosMinimos = {
    'Produto 1': { volumeMinimo: 10, precoMinimo: 100 },
    'Produto 2': { volumeMinimo: 20, precoMinimo: 200 },
    'Produto 3': { volumeMinimo: 30, precoMinimo: 300 },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLinhaChange = (index, e) => {
    const { name, value } = e.target;
    const linhas = [...linhasProdutos];

    linhas[index][name] = value;

    // Se o produto for alterado, atualiza os valores mínimos
    if (name === 'produto') {
      const produtoSelecionado = value;
      if (produtosMinimos[produtoSelecionado]) {
        linhas[index]['volumeMinimo'] = produtosMinimos[produtoSelecionado].volumeMinimo;
        linhas[index]['precoMinimo'] = produtosMinimos[produtoSelecionado].precoMinimo;

        // Atualiza os campos volume e preço com os valores mínimos
        linhas[index]['volume'] = produtosMinimos[produtoSelecionado].volumeMinimo;
        linhas[index]['preco'] = produtosMinimos[produtoSelecionado].precoMinimo;
      } else {
        // Se nenhum produto for selecionado, limpa os valores mínimos
        linhas[index]['volumeMinimo'] = '';
        linhas[index]['precoMinimo'] = '';
        linhas[index]['volume'] = '';
        linhas[index]['preco'] = '';
      }
    }

    // Impede que o volume seja menor que o mínimo
    if (name === 'volume' && linhas[index]['volumeMinimo']) {
      if (Number(value) < Number(linhas[index]['volumeMinimo'])) {
        linhas[index]['volume'] = linhas[index]['volumeMinimo'];
      }
    }

    // Impede que o preço seja menor que o mínimo
    if (name === 'preco' && linhas[index]['precoMinimo']) {
      if (Number(value) < Number(linhas[index]['precoMinimo'])) {
        linhas[index]['preco'] = linhas[index]['precoMinimo'];
      }
    }

    setLinhasProdutos(linhas);
  };

  const adicionarLinha = () => {
    setLinhasProdutos([
      ...linhasProdutos,
      { produto: '', volume: '', preco: '', moeda: '', volumeMinimo: '', precoMinimo: '' },
    ]);
  };

  const removerLinha = (index) => {
    const linhas = [...linhasProdutos];
    linhas.splice(index, 1);
    setLinhasProdutos(linhas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termosAceitos) {
      alert('Você deve concordar com os termos e regras para enviar o formulário.');
      return;
    }

    // Validação dos valores mínimos antes de enviar
    for (let linha of linhasProdutos) {
      if (!linha.produto) {
        alert('Por favor, selecione um produto.');
        return;
      }
      if (Number(linha.volume) < Number(linha.volumeMinimo)) {
        alert(`O volume do ${linha.produto} não pode ser menor que ${linha.volumeMinimo}.`);
        return;
      }
      if (Number(linha.preco) < Number(linha.precoMinimo)) {
        alert(`O preço do ${linha.produto} não pode ser menor que ${linha.precoMinimo}.`);
        return;
      }
    }

    const data = {
      data: linhasProdutos.map((linha) => ({
        nome: formData.nome,
        email: formData.email,
        empresa: formData.empresa,
        telefone: formData.telefone,
        produto: linha.produto,
        volume: linha.volume,
        preco: linha.preco,
        moeda: linha.moeda,
      })),
    };

    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/xglqqqggp4fn5',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 45dmopewadeyj3qak5go8wxphq9yvuxjtmyzrw3p',
          },
        }
      );

      // Redirecionar para a página 'Obrigado'
      navigate('/obrigado');


      // Limpar o formulário se necessário
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
      });
      setLinhasProdutos([
        { produto: '', volume: '', preco: '', moeda: '', volumeMinimo: '', precoMinimo: '' },
      ]);
      setTermosAceitos(false);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  const abrirPopup = () => {
    setPopupAberto(true);
  };

  const fecharPopup = () => {
    setPopupAberto(false);
  };

  const handleTermosChange = (e) => {
    setTermosAceitos(e.target.checked);
  };

  const irParaRegras = () => {
    const regrasSection = document.getElementById('dropdown-regras');
    if (regrasSection) {
      regrasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="formulario-container">
      <h2 className="titulo-formulario">Formulário de Produtos</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="dados-pessoais">
          <div className="input-group">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="input-formulario"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
            <span className="asterisk">*</span>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-formulario"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <span className="asterisk">*</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="input-formulario"
              value={formData.empresa}
              onChange={handleInputChange}
              required
            />
            <span className="asterisk">*</span>
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              className="input-formulario"
              value={formData.telefone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="selecao-produtos-header">
          <h3 className="titulo-selecao-produtos">Seleção de produtos</h3>
          <button type="button" className="botao-portfolio" onClick={abrirPopup}>
            Portfolio <span className="icone-expandir">⤢</span>
          </button>
        </div>

        {popupAberto && <PortfolioPopup fecharPopup={fecharPopup} />}

        <div className="titulos-produtos">
          <div className="titulo-produto">Produto<span className="asterisk">*</span></div>
          <div className="titulo-volume">Volume<span className="asterisk">*</span></div>
          <div className="titulo-preco">Preço<span className="asterisk">*</span></div>
          <div className="titulo-moeda">Moeda<span className="asterisk">*</span></div>
          <div className="titulo-acao"></div>
        </div>

        {linhasProdutos.map((linha, index) => (
          <div key={index} className="linha-produto">
            <select
              name="produto"
              className="input-produto"
              value={linha.produto}
              onChange={(e) => handleLinhaChange(index, e)}
              required
            >
              <option value="">Produto</option>
              <option value="Produto 1">Produto 1</option>
              <option value="Produto 2">Produto 2</option>
              <option value="Produto 3">Produto 3</option>
            </select>
            <input
              type="number"
              name="volume"
              placeholder="Volume"
              className="input-volume"
              value={linha.volume}
              onChange={(e) => handleLinhaChange(index, e)}
              min={linha.volumeMinimo || 0}
              required
            />
            <input
              type="number"
              name="preco"
              placeholder="Preço"
              className="input-preco"
              value={linha.preco}
              onChange={(e) => handleLinhaChange(index, e)}
              min={linha.precoMinimo || 0}
              step="any"
              required
            />
            <select
              name="moeda"
              className="input-moeda"
              value={linha.moeda}
              onChange={(e) => handleLinhaChange(index, e)}
              required
            >
              <option value="">Moeda</option>
              <option value="USD">USD</option>
              <option value="BRL">BRL</option>
            </select>
            <button
              type="button"
              className="botao-excluir"
              onClick={() => removerLinha(index)}
            >
              X
            </button>
          </div>
        ))}

        <div className="adicionar-linha">
          <button type="button" className="botao-adicionar" onClick={adicionarLinha}>
            +
          </button>
          <span className="texto-adicionar">Clique para adicionar linha de produtos <span className="asterisk">*</span></span>
        </div>

        <div className="checkbox-termos">
          <label>
            <input
              type="checkbox"
              checked={termosAceitos}
              onChange={handleTermosChange}
              required
            />
            Concordo com os{' '}
            <span className="termos-link" onClick={irParaRegras}>
              termos e regras
            </span>{' '}
            mencionados acima <span className="asterisk">*</span>
          </label>
        </div>

        <button type="submit" className="botao-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
