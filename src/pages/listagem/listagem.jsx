import './listagem.scss';
import Header from '../../components/global/header/header';

export default function Listagem() {

    return (

        <div>

            <Header />

            <div className="pagina-listagem">

                <section className="section-listagem">

                    <section className="section-listagem-branco">

                        <h1 className="h1-listagem">Listagem</h1>

                        <main className="main-listagem">

                            <article className="article-listagem">
                                <input className='radio-listagem' id='usuarios' type="radio" name='escolha' />
                                <label className='label-listagem' for="usuarios">Usuários</label>
                            </article>

                            <article className="article-listagem">
                                <input className='radio-listagem' id='pocao' type="radio" name='escolha' />
                                <label className='label-listagem' for="pocao">Produtos</label>
                            </article>

                        </main>

                        <button className="button-listagem">Listar</button>

                    </section>
                </section>

            </div>
        </div>

    )

}