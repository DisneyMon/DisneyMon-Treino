import { useState } from 'react'
import './alteracaoProduto.scss'
import axios from 'axios'

export default function AlteracaoProduto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [imagemUrl, setImagemUrl] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipo, setTipo] = useState("")
    const [id, setId] = useState("")

    // useEffect(() => {
    //     if(!isAdmin){
    //         navigate("/Erro")
    //     }
    // }, [])
    
    async function updateProduto(event){
        event.preventDefault()
        let body = {
            nome: nome,
            preco: preco,
            imagemUrl: imagemUrl,
            descricao: descricao,
            tipo: tipo
        }
        try {
            let response = await axios.put(`http://localhost:8080/produtos/${id}`, body)
            if(response.data == null){
                alert("Esse produto não existe")
            }
            else{
                alert(`Produto alterado com sucesso`)
            }
        } catch (error) {
            alert(`Erro ao tentar atualizar`)
        }
    }

    async function autoComplete(event){
        event.preventDefault()
        try {
            let response = await axios.get(`http://localhost:8080/produtos/${id}`)
            if(!response.data){
                alert("Esse Produto não existe")
                setImagemUrl("")
                setNome("")
                setDescricao("")
                setPreco("")
                setTipo("")                
            }
            else{
                setImagemUrl(response.data.imagemUrl)
                setNome(response.data.nome)
                setDescricao(response.data.descricao)
                setPreco(response.data.preco)
                setTipo(response.data.tipo)   
            }
        } catch (error) {
            alert(`Erro ao tentar buscar`)
        }
    }

    return (

        <div className="alteracaoProduto-page">

            <main className="main-alteracaoProduto">

                <figure className="figure-alteracaoProduto-direito"></figure>

                <section className="section-alteracaoProduto">

                    <section className="section-alteracaoProduto-form">

                        <h1 className="h1-alteracaoProduto">Alterar Produto</h1>

                        <form className='teste'>

                        <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Id</label>
                                <div className="div-id">
                                    <input className='input-id' type="text" value={id} onChange={event => setId(event.target.value)}/>
                                    <button className='button-id'  onClick={autoComplete}>Ok</button>
                                </div>
                                
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Nome do Produto</label>
                                <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Preço</label>
                                <input type="number" value={preco} onChange={event => setPreco(event.target.value)}/>
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Imagem Link</label>
                                <input type="text" value={imagemUrl} onChange={event => setImagemUrl(event.target.value)}/>
                            </article>

                            <article className='article-alteracaoProduto-input'>
                                <label className='label-alterarProduto' htmlFor="">Descrição</label>
                                <input type="text" value={descricao} onChange={event => setDescricao(event.target.value)}/>
                            </article>

                            <article className="article-cadastroProduto">
                                <select className='select-cadastroProduto' id="selecao" value={tipo} onChange={event => setTipo(event.target.value)}>
                                    <option value="Disney">Disney</option>
                                    <option value="Pokemon">Pokemon</option>
                                </select>
                            </article>

                            <button onClick={updateProduto}>Alterar</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-alteracaoProduto-esquerdo"></figure>

                <figure className="figure-alteracaoProduto figure-alteracaoProduto-2"></figure>

            </main>

        </div>

    )

}