import './produtos.scss'
import Header from '../../components/global/header/header'
import Card from '../../components/global/card/card'

export default function Produtos() {

    return (

        <div className="page-produtos">

            <Header/>

            <header className="header-produtos">

                <figure className="figure-produtos-imgs">
                    <img className='img-produtos img-produtos-picachu' src="/assets/images/produtos/picachu-produtos.webp" alt="Foto Pikachu" />
                    <article className="article-produtos-titulo">
                        <h1 className='h1-produtos'>DisneyMon</h1>
                        <h4 className='h4-produtos'>Produtos</h4>
                    </article>
                    <img className='img-produtos img-produtos-mickey' src="/assets/images/produtos/mickey-produtos.webp" alt="" />
                </figure>
            </header>

            <main className="main-produtos">
                <section className="section-produtos">

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </section>
            </main>

        </div>

    )

}