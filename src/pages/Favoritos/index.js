
import './style_favoritos.css';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem('@buscadorfilm');
        //coventer uma JSON para array - se não tive filme vai criar uma array
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])


    function excluir(id){
        let filttro = filmes.filter((item) => {
            return (item.id !== id)
            // !== é diferente
        })

        setFilmes(filttro);
        localStorage.setItem('@buscadorfilm', JSON.stringify(filttro))
        toast.success('Filme removido com sucesso')
    }
    return(
        <div className='meu-film'>
        <h1 id='titulo'>Meus Filmes</h1>
        {filmes.length === 0 && <span>Você não possui filme</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={()=> excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            
        </div>
       
    )
};

export default Favoritos;