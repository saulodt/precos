import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Titulo from './components/Titulo/Titulo';
import SecaoImagemTexto from './components/SecaoImagemTexto/SecaoImagemTexto';
import DropdownRegras from './components/DropdownRegras/DropdownRegras';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Titulo />
      <SecaoImagemTexto />
      <DropdownRegras />
      <Formulario />
    </div>
  );
}

export default App;
