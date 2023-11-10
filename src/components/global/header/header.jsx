import './header.scss'

export default function Header() {

    return (

        <div className="header">

            <header className='header-section1'>
                <figure className='figure-section1 figure-section1-responsivo'>
                    <img className='img-section1-logo' src="/assets/images/sections/section1/logo-soturno.png" alt="Logo DisneyMon" />
                </figure>
                <nav className="nav-section1">
                    <p className="p-section1 p-section1-amarelo">Contato</p>
                    <p className="p-section1 p-section1-azul">Sobre</p>
                    <figure className='figure-section1'>
                        <img className='img-section1-logo' src="/assets/images/sections/section1/logo-soturno.png" alt="Logo DisneyMon" />
                    </figure>
                    <p className="p-section1 p-section1-amarelo">Produtos</p>
                    <p className="p-section1 p-section1-azul">Login</p>
                </nav>
            </header>

        </div>

    )

}