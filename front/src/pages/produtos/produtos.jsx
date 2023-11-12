import './produtos.scss'
import Header from '../../components/global/header/header'
import Card from '../../components/global/card/card'
import Figure1 from '../../components/figures/figure1'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Produtos() {

    const [dados, setDados] = useState([])

    useEffect(() => {
        const carregarDadosDaAPI = async () => {
          try {
            
            const resposta = await axios.get('http://localhost:8080/produtos/');
            setDados(resposta.data);
            
          } catch (erro) {
            console.error('Erro ao carregar dados da API:', erro);
          }
        };
        carregarDadosDaAPI();
    }, [])

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

                {dados.map((produto) => (
                        <Card nome={produto.nome} preco={produto.preco} imagemUrl={produto.imagemUrl} descricao={produto.descricao}/>
                    ))} 

                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    <Figure1/>
                    

                </section>
            </main>

        </div>

    )

}