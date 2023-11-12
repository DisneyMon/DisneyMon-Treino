import { useState } from 'react'
import './cadastroProduto.scss'
import axios from 'axios'

export default function CadastroProduto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [imagemUrl, setImagemUrl] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipo, setTipo] = useState("")

    // useEffect(() => {
    //     if(!isAdmin){
    //         navigate("/")
    //     }
    // }, [])
    
    async function cadastroProduto(event){
        event.preventDefault()
        setTipo(document.getElementsByName("escolha").values)
        let body = {
            nome: nome,
            preco: preco,
            imagemUrl: imagemUrl,
            descricao: descricao,
            tipo: tipo
        }
        try {
            let response = await axios.post("http://localhost:8080/produtos/", body)
            alert(`Produto cadastrado com sucesso`)
        } catch (error) {
            alert(`Erro ao tentar cadastrar`)
        }
    }

    return (

        <div className="cadastroProduto-page">

            <main className="main-cadastroProduto">

                <figure className="figure-cadastroProduto-direito"></figure>

                <section className="section-cadastroProduto">

                    <section className="section-cadastroProduto-form">

                        <h1 className="h1-cadastroProduto">Cadastro de Produtos</h1>

                        <form className='teste'>

                            <article className='article-cadastroProduto-input'>
                                <label className='label-cadastroProduto' htmlFor="">Nome do Produto</label>
                                <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label className='label-cadastroProduto' htmlFor="">Preço</label>
                                <input type="number" value={preco} onChange={event => setPreco(event.target.value)}/>
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label className='label-cadastroProduto' htmlFor="">Imagem Link</label>
                                <input type="text" value={imagemUrl} onChange={event => setImagemUrl(event.target.value)}/>
                            </article>

                            <article className='article-cadastroProduto-input'>
                                <label className='label-cadastroProduto' htmlFor="">Descrição</label>
                                <input type="text" value={descricao} onChange={event => setDescricao(event.target.value)}/>
                            </article>

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='Disney' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="cadastro">Disney</label>
                            </article>

                            <article className="article-cadastroProduto">
                                <input className='radio-cadastroProduto' id='Pokemon' type="radio" name='escolha' />
                                <label className='label-cadastroProduto' for="alteracao">Pokémon</label>
                            </article>

                            <button>Cadastrar</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-cadastroProduto-esquerdo"></figure>

                <figure className="figure-cadastroProduto figure-cadastroProduto-2"></figure>

            </main>

        </div>

    )

}