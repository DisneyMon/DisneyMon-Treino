import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';

import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/home';
import CompraProdutoDisney from './pages/compra-produto-disney';
import Listagem from './pages/listagem/listagem';
import EscolhaCadAlt from './pages/escolhas/escolhaCadAlt';
import CadastroProduto from './pages/cadastro-produto/cadastroProduto';
import EscolhaUsuProd from './pages/escolhas/escolhaUsuProd';
import AlteracaoUsuario from './pages/alteracao-usuario/alteracaoUsuario';
import AlteracaoProduto from './pages/alteracao-produto/alteracaoProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/compra-produto-disney" element={<CompraProdutoDisney />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/escolha-cadastro-produto" element={<EscolhaCadAlt />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/escolha-usuario-produto" element={<EscolhaUsuProd />} />
        <Route path="/alteracao-usuario" element={<AlteracaoUsuario />} />
        <Route path="/alteracao-produto" element={<AlteracaoProduto />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
