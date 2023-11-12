import './cadastro.scss'
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return (

        <div className="cadastro-page">

            <main className="main-cadastro">

                <figure className="figure-cadastro"></figure>

                <section className="section-cadastro">

                    <form className="form-cadastro">

                        <h1 className="h1-cadastro">Cadastro</h1>
                        <label htmlFor="" className="label-cadastro">Email</label>
                        <input title="E-mail" type="text" />
                        <label htmlFor="" className="label-cadastro">Nome De Usuario</label>
                        <input title="Nome de Usuário" type="text" />
                        <label htmlFor="" className="label-cadastro">Senha</label>
                        <input title="Senha" type="password" />
                        <button className='button-cadastro' >Cadastrar</button>
                        <Link className="a-cadastro" to="/login">Não possui conta? Cadastre-se aqui</Link>

                    </form>

                </section>

                <figure className="figure-cadastro figure-cadastro-2"></figure>

            </main>

        </div>

    )

}