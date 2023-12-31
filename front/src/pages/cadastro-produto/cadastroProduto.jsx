import { useEffect, useState } from 'react'
import './cadastroProduto.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CadastroProduto() {


    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [imagemUrl, setImagemUrl] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipo, setTipo] = useState("Disney")

    const isAdmin = JSON.parse(localStorage.getItem('admin')) || false;
    const navigate = useNavigate();

    function navegar() {
        navigate('/')
    }

    useEffect(() => {
        if(isAdmin === false){
            navigate("/Erro")
        }
    }, [])
    
    async function cadastroProduto(event){
        event.preventDefault()
        if(preco < 0){
            alert("Preço negativo não é permitido")
        }
        else{
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
                setNome("")
                setImagemUrl("")
                setDescricao("")
                setPreco("")
            } catch (error) {
                alert(`Erro ao tentar cadastrar`)
            }
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
                                <select className='select-cadastroProduto' id="selecao" value={tipo} onChange={event => setTipo(event.target.value)}>
                                    <option value="Disney">Disney</option>
                                    <option value="Pokemon">Pokemon</option>
                                </select>
                            </article>

                            <button onClick={cadastroProduto}>Cadastrar</button>
                            <button className="button-escolha" onClick={navegar}>Home</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-cadastroProduto-esquerdo"></figure>

                <figure className="figure-cadastroProduto figure-cadastroProduto-2"></figure>

            </main>

        </div>

    )

}