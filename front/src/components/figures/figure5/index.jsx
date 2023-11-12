import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function Figure5() {

    const navigate = useNavigate();

    function navegar() {
            
            navigate('/produtos');
    }

    return (

        <section className='section-figure'>

            <section className='section-figure-button'>

                <button onClick={navegar} className='buttom-figure'>Veja Mais</button>

            </section>

            <figure className='figure-figure'>

                <img className='img-figure img-figure-pelucia' src="/assets/images/figures/figure5/figure5.png" alt="Foto Boneco de Pelucia Pikachu" />

            </figure>

            <article className='article-figure'>

                <p className='p-figure'>Minnie - Pelúcia De 20 Cm - Miniee</p>

                <h1 className='h1-figure'>R$ 169,99</h1>

                <p className='p-figure'><strong>R$ 161,49</strong> à vista com desconto</p>

            </article>

        </section>

    )

}