import './card.scss';

export default function Card(props) {

    return (

        <section className='section-card'>

            <section className='section-card-button'>

                <button className='buttom-card'>Comprar</button>

            </section>

            <figure className='figure-card'>

                <img className='img-card img-card-pelucia' src={props.imagemUrl} alt="Foto Boneco de Pelucia Pikachu" />

            </figure>

            <article className='article-card'>

                <p className='p-card'>{props.nome}</p>

                <h1 className='h1-card'>{props.preco}</h1>

                <p className='p-card'><strong>R$ {props.preco * 0.8}</strong> à vista com desconto</p>

            </article>

        </section>

    )

}