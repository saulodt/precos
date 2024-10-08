import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Titulo from './components/Titulo/Titulo';
import SecaoImagemTexto from './components/SecaoImagemTexto/SecaoImagemTexto';
import DropdownRegras from './components/DropdownRegras/DropdownRegras';
import Formulario from './components/Formulario/Formulario';
import Obrigado from './pages/Obrigado/Obrigado';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Titulo />
              <SecaoImagemTexto />
              <DropdownRegras />
              <Formulario />
            </>
          }
        />
        <Route
          path="/obrigado"
          element={
            <>
              <Obrigado />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
