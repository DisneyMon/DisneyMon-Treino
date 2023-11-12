import './sobre.scss'

import Header from '../../components/global/header/header'

export default function Sobre() {

    return (

        <div className="sobre-page">

            <header className='header-sobre'>
                <Header />
            </header>

            <main className='main-sobre'>
                <h1 className="h1-sobre">Sobre Nós</h1>
                <p className='p-sobre'>Bem-vindo à Disneymon, o seu paraíso mágico de pelúcias! Somos uma loja apaixonada por criar sorrisos e despertar a criança interior em todos os fãs de Disney e Pokémon. Nossa missão é proporcionar a você uma experiência única, onde seus personagens favoritos ganham vida em forma de pelúcias incrivelmente fofas e detalhadas.

Na Disneymon, oferecemos uma ampla seleção de pelúcias da Disney, desde os clássicos personagens como Mickey e Minnie Mouse até os mais recentes heróis e vilões que você adora. Cada pelúcia é cuidadosamente selecionada e confeccionada para capturar a essência de seus personagens preferidos da Disney, tornando-os companheiros ideais para abraçar, colecionar e exibir.

Mas não paramos por aí! Também somos a casa definitiva dos Pokémon em pelúcia. Temos uma variedade impressionante de Pokémon adoráveis, desde o adorável Pikachu até os lendários e raros. Nossas pelúcias Pokémon são autênticas e feitas com atenção aos detalhes, garantindo que você tenha os melhores companheiros de treinamento e coleção.

Além disso, na Disneymon, valorizamos a qualidade e a autenticidade. Trabalhamos com licenças oficiais da Disney e Pokémon, para que você possa ter a certeza de que está adquirindo produtos genuínos e de alta qualidade.

Nossa equipe dedicada está aqui para atender a todas as suas necessidades e responder a qualquer pergunta que você possa ter. Estamos comprometidos em criar uma experiência de compra mágica, desde a seleção de produtos até a entrega segura na sua porta.

Seja você um fã da Disney, um treinador Pokémon ou ambos, a Disneymon é o seu destino definitivo para encontrar as pelúcias mais encantadoras e colecionáveis. Entre em nossa loja online ou visite nossa loja física, e embarque em uma jornada emocionante pelo mundo mágico dos Disneymon!</p>
            </main>

            <footer className='footer-sobre'>

                <section className="section-sobre-disney">
                    <figure className='figure-sobre'>
                        <img className='img-sobre img-sobre-mickey' src="/assets/images/sobre/sobre-mickey.gif" alt="" />
                        <img className='img-sobre img-sobre-et' src="/assets/images/sobre/sobre-et.gif" alt="" />
                        <img className='img-sobre img-sobre-monstro' src="/assets/images/sobre/sobre-monstro.gif" alt="" />
                        <img className='img-sobre img-sobre-donald' src="/assets/images/sobre/sobre-donald.gif" alt="" />
                    </figure>
                </section>

                <section className="section-sobre-pokemon">
                    <figure className='figure-sobre'>
                        <img className='img-sobre img-sobre-picachu' src="/assets/images/sobre/sobre-picachu.gif" alt="" />
                        <img className='img-sobre img-sobre-cherry' src="/assets/images/sobre/sobre-cherry.gif" alt="" />
                        <img className='img-sobre img-sobre-bulbasaur' src="/assets/images/sobre/sobre-bulbasaur.gif" alt="" />
                        <img className='img-sobre img-sobre-snorlax' src="/assets/images/sobre/sobre-snorlax.gif" alt="" />
                    </figure>
                </section>

            </footer>

        </div>

    )

}