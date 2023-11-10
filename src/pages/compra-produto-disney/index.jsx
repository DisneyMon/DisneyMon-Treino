import './index.scss'

import Header from '../../components/global/header/header'

export default function CompraProdutoDisney() {

    return (

        <div className="page-produto-disney">

            <Header className="Header-produto-disney" />

            <section className="section-produto-disney-coluna">
                <div className='div-produto-disney-esquerdo'></div>

                <main className='main-produto-disney'>

                    <section className='section-produto-disney-img'>

                        <figure className='figure-produto-disney'>
                            <img className='img-produto-disney' src='/assets/images/compra-disney/compra-disney-mickey.webp' alt='Produto Disney' />
                        </figure>

                        <section className="section-produto-disney-titulo">

                            <h2 className='h2-produto-disney'>Mickey - Pelúcia de 40cm</h2>
                            <div className="div-produto-disney-linha"></div>
                            <h1 className='h1-produto-disney'>R$ 169,99</h1>
                            <h3 className='h3-produto-disney'>Frete Grátis</h3>

                            <section className="section-produto-disney-botao">
                                <button className='button-produto-disney'>Comprar</button>
                            </section>

                        </section>

                    </section>

                </main>

                <div className='div-produto-disney-direito'></div>
            </section>

        </div>

    )

}