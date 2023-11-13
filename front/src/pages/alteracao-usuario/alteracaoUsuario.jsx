import axios from 'axios'
import './alteracaoUsuario.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AlteracaoUsuario() {


    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [id, setId] = useState("")

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
    
    async function updateUsuario(event){
        event.preventDefault()
        if(id < 0){
            alert("não é permitido id negativo")
        }
        else{
            let body = {
                nome: nome,
                email: email,
                senha: senha
            }
            try {
                let response = await axios.put(`http://localhost:8080/usuarios/${id}`, body)
                if(response.data == null){
                    alert("Essa pessoa não existe")
                }
                else{
                    alert(`Usuario alterado com sucesso`)
                }
            } catch (error) {
                alert(`Erro ao tentar atualizar`)
            }
        } 
    }

    async function autoComplete(event){
        event.preventDefault()
        try {
            let response = await axios.get(`http://localhost:8080/usuarios/${id}`)
            if(!response.data){
                alert("Essa pessoa não existe")
                setEmail("")
                setNome("")
                setSenha("")
            }
            else{
                setEmail(response.data.email)
                setNome(response.data.nome)
                setSenha(response.data.senha)
            }
        } catch (error) {
            alert(`Erro ao tentar buscar`)
        }
    }

    return (

        <div className="alteracaoUsuario-page">

            <main className="main-alteracaoUsuario">

                <figure className="figure-alteracaoUsuario-direito"></figure>

                <section className="section-alteracaoUsuario">

                    <section className="section-alteracaoUsuario-form">

                        <h1 className="h1-alteracaoUsuario">Alteração Usuário</h1>

                        <form className='teste'>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Id</label>
                                <div className="div-id">
                                <input className='input-id' type="text" value={id} onChange={event => setId(event.target.value)} />
                                <button className='button-id' onClick={autoComplete}>Ok</button>
                                </div>
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Nome</label>
                                <input  type="text" value={nome} onChange={event => setNome(event.target.value)}/>
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Email</label>
                                <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                            </article>

                            <article className='article-alteracaoUsuario-input'>
                                <label className='label-alteracaoUsuario' htmlFor="">Senha</label>
                                <input type="text" value={senha} onChange={event => setSenha(event.target.value)}/>
                            </article>


                            <button onClick={updateUsuario}>Alterar</button>
                            <button className="button-escolha" onClick={navegar}>Home</button>

                        </form>
                        
                    </section>


                </section>

                <figure className="figure-alteracaoUsuario-esquerdo"></figure>

                <figure className="figure-alteracaoUsuario figure-alteracaoUsuario-2"></figure>

            </main>

        </div>

    )

}