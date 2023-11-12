import React from 'react';
import './login.scss';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();


    async function login(event){
        event.preventDefault();
        try {
            let response = await axios.get(`http://localhost:8080/usuarios/login?email=${email}&senha=${senha}`)
            alert(`Usuário ${response.data.nome} logado com sucesso`)
            navigate('/');
        } catch (error) {
            alert(`Erro ao tentar logar, email ou senha incorretos`)
        }
        
    }

    return (

        <div className="login-page">

            <main className="main-login">

                <figure className="figure-login"></figure>

                <section className="section-login">

                    <form className="form-login">

                        <h1 className="h1-login">Login</h1>
                        <label className='label-login' htmlFor="">Email</label>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                        <label className='label-login' htmlFor="">Senha</label>
                        <input  type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                        <button className='button-login' onClick={login} >Entrar</button>
                        <Link className="a-login" to="/cadastro">Não possui conta? Cadastre-se aqui</Link>

                    </form>

                </section>

                <figure className="figure-login figure-login-2"></figure>

            </main>

        </div>
    );

}
