import './header.scss'

import { Link } from "react-router-dom";

export default function Header() {

    return (

        <div className="header">

            <header className='header-section1'>
                <Link className='Link-header' to="/">
                    <figure className='figure-section1 figure-section1-responsivo'>
                        <img className='img-section1-logo' src="/assets/images/header/logo-disneymon.png" alt="Logo DisneyMon" />
                    </figure>
                </Link>
                <nav className="nav-section1">
                    <Link to="/contato"><p className="p-section1 p-section1-amarelo">Contato</p></Link>
                    <Link to="/sobre"><p className="p-section1 p-section1-azul">Sobre</p></Link>
                    <Link className='Link-header' to="/">
                        <figure className='figure-section1'>
                            <img className='img-section1-logo' src="/assets/images/header/logo-disneymon.png" alt="Logo DisneyMon" />
                        </figure>
                    </Link>
                    <Link to="/produtos"><p className="p-section1 p-section1-amarelo">Produtos</p></Link>
                    <Link to="/login"><p className="p-section1 p-section1-azul">Login</p></Link>
                </nav>
            </header>

        </div>

    )

}