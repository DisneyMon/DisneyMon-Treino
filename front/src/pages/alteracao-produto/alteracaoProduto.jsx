import './alteracaoProduto.scss'

export default function AlteracaoProduto() {

    return (

        <div className="alteracaoProduto-page">

            <main className="main-alteracaoProduto">

                <figure className="figure-alteracaoProduto-direito"></figure>

                <section className="section-alteracaoProduto">

                    <section className="section-alteracaoProduto-form">

                        <h1 className="h1-alteracaoProduto">Alterar Produto</h1>

                        <form className='teste'>

                        <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Id</label>
                                <div className="div-id">
                                    <input className='input-id' type="text" />
                                    <button className='button-id'>Ok</button>
                                </div>
                                
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Nome do Produto</label>
                                <input type="text" />
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Preço</label>
                                <input type="number" />
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Imagem Link</label>
                                <input type="text" />
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Descrição</label>
                                <input type="text" />
                            </article>

                            <article className="article-alteracaoProduto">
                                <input className='radio-alteracaoProduto' id='cadastro' type="radio" name='escolha' />
                                <label className='label-alteracaoProduto' for="cadastro">Disney</label>
                            </article>

                            <article className="article-alteracaoProduto">
                                <input className='radio-alteracaoProduto' id='alteracao' type="radio" name='escolha' />
                                <label className='label-alteracaoProduto' for="alteracao">Pokémon</label>
                            </article>

                            <button>Alterar</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-alteracaoProduto-esquerdo"></figure>

                <figure className="figure-alteracaoProduto figure-alteracaoProduto-2"></figure>

            </main>

        </div>

    )

}