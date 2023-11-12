import './produtos.scss'
import Header from '../../components/global/header/header'

export default function Produtos() {

    return (

        <div className="page-produtos">

            <Header/>

            <header className="header-produtos">

                <figure className="figure-produtos-imgs">
                    <img className='img-produtos img-produtos-picachu' src="/assets/images/produtos/picachu-produtos.webp" alt="Foto Pikachu" />
                    <article className="article-produtos-titulo">
                        <h1>DisneyMon</h1>
                        <h4>Produtos disneyMon</h4>
                    </article>
                    <img className='img-produtos img-produtos-mickey' src="/assets/images/produtos/mickey-produtos.webp" alt="" />
                </figure>

            </header>

        </div>

    )

}