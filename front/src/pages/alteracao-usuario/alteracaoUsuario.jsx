import './alteracaoUsuario.scss'

export default function AlteracaoUsuario() {

    return (

        <div className="alteracaoUsuario-page">

            <main className="main-alteracaoUsuario">

                <figure className="figure-alteracaoUsuario-direito"></figure>

                <section className="section-alteracaoUsuario">

                    <section className="section-alteracaoUsuario-form">

                        <h1 className="h1-alteracaoUsuario">Alteração Usuário</h1>

                        <form className='teste'>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Id</label>
                                <div className="div-id">
                                <input className='input-id' type="text" />
                                <button className='button-id'>Ok</button>
                                </div>
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Nome</label>
                                <input  type="text" />
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Email</label>
                                <input type="text" />
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Senha</label>
                                <input type="text" />
                            </article>


                            <button>Alterar</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-alteracaoUsuario-esquerdo"></figure>

                <figure className="figure-alteracaoUsuario figure-alteracaoUsuario-2"></figure>

            </main>

        </div>

    )

}