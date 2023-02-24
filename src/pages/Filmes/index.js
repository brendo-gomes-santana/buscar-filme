import './style.css'

import {  useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../servico/api'

import { toast } from 'react-toastify';
// npm install react-toastify - colocar um alert personalizado
function Filmes(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState ({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: '4a2d54879a73705f2865cfdd2801ff65',
                    language: "pt-Br"
                }
            })//then caso encontre o filme
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);

            })//catch caso não encontre o filme
            .catch(()=>{
                console.log('Filme não encontrado')
                //faz com que o site volte para home se por acaso não encontrada o filme
                navigate('/', {replace:true});
                return;
            })
        }
        loadFilmes();

        //isso serve para desmonntado 
        return () => {
            console.log('desmontar')
        }
    }, [navigate, id]);

    function Salvar(){
        const minhaLista = localStorage.getItem('@buscadorfilm');

        // primeira parte, vai buscar, se não tive (||) vai criar uma listsa ([]) 
        let filmeSalvos = JSON.parse(minhaLista) || [];

        //some true or false - se tive o filme na lista, não vai salvar devolvo, se não vai salvar
        const hastFilme = filmeSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hastFilme){
            toast.warn('Esse filme já está na sua lista')
            return;
    
        }

        filmeSalvos.push(filme);
        localStorage.setItem('@buscadorfilm', JSON.stringify(filmeSalvos));
        toast.success('Filme salvo com sucesso')
    }

    // caso a internet esteja muito devagar, isso vai entrar.
    if(loading){
        return(
            <div>carregando detalhe</div>
        )
    };


    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
            <h3> Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
            
            <div className='a-b'>
                <button onClick={Salvar}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>

        </div>
        
    )
};
export default Filmes;