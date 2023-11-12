import './deletar.scss'

export default function Deletar() {

    return (

        <div className="deletar-page">

            <div className="deletar-page">

                <main className="main-deletar">

                    <figure className="figure-deletar-direito"></figure>

                    <section className="section-deletar">

                        <section className="section-deletar-form">

                            <h1 className="h1-deletar">Deletar</h1>

                            <section className="section-deletar-radio">

                            <article className='article-deletar-input'>
                                <label className='label-deletar' htmlFor="">Id</label>
                                <div className="div-id">
                                    <input className='input-id' type="number" />
                                    <button className='button-id'>Ok</button>
                                </div>
                                
                            </article>

                            </section>

                        </section>


                    </section>

                    <figure className="figure-deletar-esquerdo"></figure>

                    <figure className="figure-deletar figure-deletar-2"></figure>

                </main>

            </div>

        </div>

    )

}