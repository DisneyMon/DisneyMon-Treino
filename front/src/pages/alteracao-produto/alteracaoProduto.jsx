import './alteracaoProduto.scss'

export default function AlteracaoProduto() {

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastroProduto">

                <figure className="figure-cadastroProduto-direito"></figure>

                <section className="section-cadastroProduto">

                    <section className="section-cadastroProduto-form">

                        <h1 className="h1-cadastroProduto">Cadastro de Produtos</h1>

                        <form className='teste'>

                        <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Id</label>
                                <input type="text" />
                                <button>Pesquisar</button>
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Nome do Produto</label>
                                <input type="text" />
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Preço</label>
                                <input type="number" />
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Imagem Link</label>
                                <input type="text" />
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label htmlFor="">Descrição</label>
                                <input type="text" />
                            </article>

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='cadastro' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="cadastro">Disney</label>
                            </article>

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='alteracao' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="alteracao">Pokémon</label>
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