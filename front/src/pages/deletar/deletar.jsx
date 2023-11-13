import axios from 'axios'
import './deletar.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Deletar() {

    const isAdmin = JSON.parse(localStorage.getItem('admin')) || false;
    const navigate = useNavigate();

    useEffect(() => {
        if(isAdmin === false){
            navigate("/Erro")
        }
    }, [])

    const [tipo, setTipo] = useState("usuarios")
    const [id, setId] = useState("")

    async function deletar(event){
        event.preventDefault()
        try {
            let response = await axios.delete(`http://localhost:8080/${tipo}/${id}`)
            alert(`Delete do tipo ${tipo} realizado com sucesso`)
        } catch (error) {
            alert(`Erro ao tentar buscar`)
        }
    }

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
                                    <input className='input-id' type="number" value={id} onChange={event => setId(event.target.value)}/>
                                    <button className='button-id' onClick={deletar}>Ok</button>
                                </div>
                                
                            </article>

                            <article className="article-cadastroProduto">
                                <select className='select-cadastroProduto' id="selecao" value={tipo} onChange={event => setTipo(event.target.value)}>
                                    <option value="usuarios">Usuarios</option>
                                    <option value="produtos">Produtos</option>
                                </select>
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