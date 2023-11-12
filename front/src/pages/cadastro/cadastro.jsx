import { useState } from 'react';
import './cadastro.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Cadastro() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const navigate = useNavigate();

    async function cadastro(event){
        event.preventDefault()
        let body = {
            nome: nome,
            email: email,
            senha: senha
        }
        try {
            let response = await axios.post("http://localhost:8080/usuarios/", body)
            alert(`Bem vindo ${response.data.nome}, seu id é ${response.data.idUsuario}`)
            navigate("/")
        } catch (error) {
            alert(`Erro ao tentar cadastrar`)
        }
    }


    return (

        <div className="cadastro-page">

            <main className="main-cadastro">

                <figure className="figure-cadastro"></figure>

                <section className="section-cadastro">

                    <form className="form-cadastro">

                        <h1 className="h1-cadastro">Cadastro</h1>
                        <label htmlFor="" className="label-cadastro">Email</label>
                        <input value={email} onChange={event => setEmail(event.target.value)} title="E-mail" type="text" />

                        <label htmlFor="" className="label-cadastro">Nome De Usuario</label>
                        <input value={nome} onChange={event => setNome(event.target.value)} title="Nome de Usuário" type="text" />

                        <label htmlFor="" className="label-cadastro">Senha</label>
                        <input value={senha} onChange={event => setSenha(event.target.value)} title="Senha" type="password" />

                        <button onClick={cadastro} className='button-cadastro' >Cadastrar</button>
                        <Link className="a-cadastro" to="/login">Não possui conta? Cadastre-se aqui</Link>

                    </form>

                </section>

                <figure className="figure-cadastro figure-cadastro-2"></figure>

            </main>

        </div>

    )

}