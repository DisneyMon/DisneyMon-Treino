import './escolha.scss'

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EscolhaCadAlt() {

    const isAdmin = JSON.parse(localStorage.getItem('admin')) || false;
    const navigate = useNavigate();

    function navegar() {
        navigate('/')
    }

    useEffect(() => {
        if(isAdmin === false){
            navigate("/Erro")
        }
    }, [])

    function escolhaCadProd() {

        if (document.getElementById('cadastro').checked) {
            navigate('/cadastro-produto');
            
        }
        else if (document.getElementById('alteracao').checked) {
            navigate('/escolha-usuario-produto')
        }
        else if (document.getElementById('deletar').checked){
            navigate('/deletar')
    }
}

    return (

        <div className="escolha-page">

            <main className="main-escolha">

                <figure className="figure-escolha-direito"></figure>

                <section className="section-escolha">

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

                            <article className="article-escolha">
                                <input className='radio-escolha' id='deletar' type="radio" name='escolha' />
                                <label className='label-escolha' for="deletar">Deletar</label>
                            </article>

                        </section>

                        <button className="button-escolha" onClick={escolhaCadProd}>Escolher</button>
                        <button className="button-escolha" onClick={navegar}>Home</button>

                    </section> 

                    
                </section>

                <figure className="figure-escolha-esquerdo"></figure>

                <figure className="figure-escolha figure-escolha-2"></figure>

            </main>

        </div>

    )

}