//npm install axios

//https://api.themoviedb.org/3/movie/
//movie/{movie_id}?api_key=4a2d54879a73705f2865cfdd2801ff65&language=pt-BR


import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;