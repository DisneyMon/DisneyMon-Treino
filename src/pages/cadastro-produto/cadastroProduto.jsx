import './cadastroProduto.scss'

import Input from "../../components/login-cadastro/input/input";
import Button from "../../components/login-cadastro/button/button";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CadastroProduto() {

    const [escolha, setEscolha] = useState(null);

    function escolhaCadProd() {

    }

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastro-produto">

                <figure className="figure-cadastro-produto-direito"></figure>

                <section className="section-cadastro-produto">

                    <section className="section-cadastro-produto-form">

                        <h1 className="h1-cadastro-produto">Escolha</h1>

                        <section className="section-cadastro-produto-radio">

                            <article className="article-cadastro-produto">
                                <input className='radio-cadastro-produto' id='cadastro' type="radio" name='escolha' />
                                <label className='label-cadastro-produto' for="cadastro">Cadastro</label>
                            </article>

                            <article className="article-cadastro-produto">
                                <input className='radio-cadastro-produto' id='alteracao' type="radio" name='escolha' />
                                <label className='label-cadastro-produto' for="alteracao">Alteração</label>
                            </article>

                        </section>
                    </section>
                </section>

                <figure className="figure-cadastro-produto-esquerdo"></figure>

                <figure className="figure-cadastro-produto figure-cadastro-produto-2"></figure>

            </main>

        </div>

    )

}