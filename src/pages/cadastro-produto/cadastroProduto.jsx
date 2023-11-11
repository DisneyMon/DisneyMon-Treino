import './cadastroProduto.scss'

import Input from "../../components/login-cadastro/input/input";
import Button from "../../components/login-cadastro/button/button";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CadastroProduto() {

    const [escolha, setEscolha] = useState(null);

    function escolhaCadProd() {

        if (document.getElementById('cadastro').cheked) {
            setEscolha('cadastro');
        }
        else if (document.getElementById('alteracao').cheked) {
            setEscolha('alteracao');
        }
        else {
            setEscolha(null);
    }
}

function cadastroHTML() {

    return(

        <section className="section-cadastro-produto-form">



        </section>

)

}

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastro-produto">

                <figure className="figure-cadastro-produto-direito"></figure>

                <section className="section-cadastro-produto">

                    <section className="section-escolha-form">

                        <h1 className="h1-escolha">Escolha</h1>

                        <section className="section-escolha-radio">

                            <article className="article-escolha">
                                <input className='radio-escolha' id='cadastro' type="radio" name='escolha' />
                                <label className='label-escolha' for="cadastro">Cadastro</label>
                            </article>

                            <article className="article-escolha">
                                <input className='radio-escolha' id='alteracao' type="radio" name='escolha' />
                                <label className='label-escolha' for="alteracao">Alteração</label>
                            </article>

                        </section>

                        <Button action="Confirmar" className="button-escolha" onClick={escolhaCadProd}>Escolher</Button>

                        {escolha === 'cadastro' && cadastroHTML()}

                    </section> 

                    
                </section>

                <figure className="figure-cadastro-produto-esquerdo"></figure>

                <figure className="figure-cadastro-produto figure-cadastro-produto-2"></figure>

            </main>

        </div>

    )

}