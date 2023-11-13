import './index.scss'

import Header from '../../components/global/header/header'
import { useLocation } from 'react-router-dom';

export default function CompraProdutoDisney() {

    const { state: { imagemUrl, nome, preco, descricao} } = useLocation();

    return (

        <div className="page-produto-disney">

            <header className='header-compra-produto-disney'>
                <Header />
            </header>

            <section className="section-produto-disney-coluna">
                <div className='div-produto-disney-esquerdo'></div>

                <main className='main-produto-disney'>

                    <section className='section-produto-disney-img'>

                        <figure className='figure-produto-disney'>
                            <img className='img-produto-disney' src={imagemUrl} alt='Produto Disney' />
                        </figure>

                        <section className="section-produto-disney-titulo">

                            <h2 className='h2-produto-disney'>{nome}</h2>
                            <div className="div-produto-disney-linha"></div>
                            <h1 className='h1-produto-disney'>R$ {preco}</h1>
                            <h3 className='h3-produto-disney'>Frete Grátis</h3>

                            <section className="section-produto-disney-botao">
                                <button className='button-produto-disney'>Comprar</button>
                            </section>

                        </section>

                    </section>

                    <section className="section-produto-disney-descricao">

                        <h4 className='h4-produto-disney'>Descrição</h4>

                        <p className='p-produto-disney'>{descricao}</p>
                        

                    </section>

                </main>

                <div className='div-produto-disney-direito'></div>
            </section>

        </div>

    )

}