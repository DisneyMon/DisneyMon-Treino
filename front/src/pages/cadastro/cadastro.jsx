import './cadastro.scss'
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return (

        <div className="cadastro-page">

            <main className="main-cadastro">

                <figure className="figure-cadastro"></figure>

                <section className="section-cadastro">

                    <form className="form-cadastro">

                        <h1 className="h1-cadastro">cadastro</h1>
                        <input title="E-mail" type="text" />
                        <input title="Nome de Usuário" type="text" />
                        <input title="Senha" type="password" />
                        <button action="Entrar" />
                        <Link className="a-cadastro" href="/login">Não possui conta? Cadastre-se aqui</Link>

                    </form>

                </section>

                <figure className="figure-cadastro figure-cadastro-2"></figure>

            </main>

        </div>

    )

}