import { useNavigate } from 'react-router-dom';
import './escolha.scss'
import { useEffect } from 'react';

export default function EscolhaUsuProd() {

    const isAdmin = JSON.parse(localStorage.getItem('admin')) || false;
    const navigate = useNavigate();

    useEffect(() => {
        if(isAdmin === false){
            navigate("/Erro")
        }

    }, [])

    function navegar() {
        navigate('/')
    }
    
    function escolhaUsuarioProduto() {

        if (document.getElementById('usuario').checked) {
            navigate('/alteracao-usuario');
            
        }
        else if (document.getElementById('produto').checked) {
            navigate('/alteracao-produto')
        }
        else {
            
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
                                <input className='radio-escolha' id='usuario' type="radio" name='escolha' />
                                <label className='label-escolha' for="usuario">Usuário</label>
                            </article>

                            <article className="article-escolha">
                                <input className='radio-escolha' id='produto' type="radio" name='escolha' />
                                <label className='label-escolha' for="produto">Produto</label>
                            </article>

                        </section>

                        <button className="button-escolha" onClick={escolhaUsuarioProduto}>Escolher</button>
                        <button className="button-escolha" onClick={navegar}>Home</button>

                    </section> 

                    
                </section>

                <figure className="figure-escolha-esquerdo"></figure>

                <figure className="figure-escolha figure-escolha-2"></figure>

            </main>

        </div>

    )

}

