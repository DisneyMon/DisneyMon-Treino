import { useNavigate } from 'react-router-dom';
import './erro.scss'

export default function Erro() {

    const navigate = useNavigate();

    function navegar() {
            
            navigate('/');
    }

    return (

        <div className="erro-page">

            <main className="main-erro">

                <h1 className='h1-erro'>ERROR</h1>
                <h2 className='h2-erro'>Página não encontrada</h2>
                <h2 className='h2-erro'>ou</h2>
                <h2 className='h2-erro'>Você não tem permissão para acessar essa página</h2>
                <button onClick={navegar} className='button-erro'>Clique Aqui para voltar</button>
            </main>

        </div>

    )

}