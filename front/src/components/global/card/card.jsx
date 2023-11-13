import { useNavigate } from 'react-router-dom';
import './card.scss';

export default function Card(props) {

    const navigate = useNavigate();

    function navegar() {
                
            navigate('/compra-produto', { state: { imagemUrl: props.imagemUrl, nome: props.nome, preco: props.preco, descricao: props.descricao } });
        }

    return (

        <section className='section-card'>

            <section className='section-card-button'>

                <button onClick={navegar} className='buttom-card'>Comprar</button>

            </section>

            <figure className='figure-card'>

                <img className='img-card img-card-pelucia' src={props.imagemUrl} alt="Foto Boneco de Pelucia Pikachu" />

            </figure>

            <article className='article-card'>

                <p className='p-card'>{props.nome}</p>

                <h1 className='h1-card'>R$ {props.preco}</h1>

                <p className='p-card'><strong>R$ {(props.preco * 0.8).toFixed(2)}</strong> à vista com desconto</p>
            </article>
            

        </section>

    )

}