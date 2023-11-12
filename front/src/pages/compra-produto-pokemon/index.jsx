import './index.scss'

import Header from '../../components/global/header/header'

export default function CompraProdutoPokemon() {

    return (

        <div className="page-produto-pokemon">

            <Header className="Header-produto-pokemon" />

            <section className="section-produto-pokemon-coluna">
                <div className='div-produto-pokemon-esquerdo'></div>

                <main className='main-produto-pokemon'>

                    <section className='section-produto-pokemon-img'>

                        <figure className='figure-produto-pokemon'>
                            <img className='img-produto-pokemon' src='/assets/images/compra-pokemon/compra-pokemon.webp' alt='Produto pokemon' />
                        </figure>

                        <section className="section-produto-pokemon-titulo">

                            <h2 className='h2-produto-pokemon'>Mickey - Pelúcia de 40cm</h2>
                            <div className="div-produto-pokemon-linha"></div>
                            <h1 className='h1-produto-pokemon'>R$ 169,99</h1>
                            <h3 className='h3-produto-pokemon'>Frete Grátis</h3>

                            <section className="section-produto-pokemon-botao">
                                <button className='button-produto-pokemon'>Comprar</button>
                            </section>

                        </section>

                    </section>

                    <section className="section-produto-pokemon-descricao">

                        <h4 className='h4-produto-pokemon'>Descrição</h4>

                        <p className='p-produto-pokemon'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, impedit quia mollitia quos, rerum tenetur explicabo quas nostrum atque corporis quasi eligendi facere voluptatum delectus ullam labore laboriosam corrupti commodi.</p>
                        

                    </section>

                </main>

                <div className='div-produto-pokemon-direito'></div>
            </section>

        </div>

    )

}