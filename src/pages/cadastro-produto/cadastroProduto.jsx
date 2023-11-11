import './cadastroProduto.scss'

export default function CadastroProduto() {

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastroProduto">

                <figure className="figure-cadastroProduto-direito"></figure>

                <section className="section-cadastroProduto">

                    <section className="section-cadastroProduto-form">

                        <h1 className="h1-cadastroProduto">Cadastro de Produtos</h1>

                        <form action="form-cadastroProduto">

                            
                        </form>
{/* 
                        <section className="section-cadastroProduto-radio">

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='cadastro' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="cadastro">Cadastro</label>
                            </article>

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='alteracao' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="alteracao">Alteração</label>
                            </article>

                        </section>

                        <button className="button-cadastroProduto">Escolher</button> */}

                    </section>


                </section>

                <figure className="figure-cadastroProduto-esquerdo"></figure>

                <figure className="figure-cadastroProduto figure-cadastroProduto-2"></figure>

            </main>

        </div>

    )

}