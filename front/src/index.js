import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';

import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/home';
import CompraProduto from './pages/compra-produto';
import Listagem from './pages/listagem/listagem';
import EscolhaCadAlt from './pages/escolhas/escolhaCadAlt';
import CadastroProduto from './pages/cadastro-produto/cadastroProduto';
import EscolhaUsuProd from './pages/escolhas/escolhaUsuProd';
import AlteracaoUsuario from './pages/alteracao-usuario/alteracaoUsuario';
import AlteracaoProduto from './pages/alteracao-produto/alteracaoProduto';
import Sobre from './pages/sobre/sobre';
import Produtos from './pages/produtos/produtos';
import Deletar from './pages/deletar/deletar';
import Erro from './pages/erro/erro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/compra-produto" element={<CompraProduto />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />

        <Route path="/deletar" element={<Deletar />} />
        <Route path="/escolha-usuario-produto" element={<EscolhaUsuProd />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/escolha-cadastro-alteracao" element={<EscolhaCadAlt />} />
        <Route path="/alteracao-usuario" element={<AlteracaoUsuario />} />
        <Route path="/alteracao-produto" element={<AlteracaoProduto />} />
        
        <Route path="*" element={<Erro />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
