import './alteracaoUsuario.scss'

export default function AlteracaoUsuario() {

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastroProduto">

                <figure className="figure-cadastroProduto-direito"></figure>

                <section className="section-cadastroProduto">

                    <section className="section-cadastroProduto-form">

                        <h1 className="h1-cadastroProduto">Alteração Usuário</h1>

                        <form className='teste'>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Id</label>
                                <input type="text" />
                                <button>Pesquisar</button>
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Nome</label>
                                <input type="text" />
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Email</label>
                                <input type="number" />
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Senha</label>
                                <input type="text" />
                            </article>


                            <button>Cadastrar</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-cadastroProduto-esquerdo"></figure>

                <figure className="figure-cadastroProduto figure-cadastroProduto-2"></figure>

            </main>

        </div>

    )

}