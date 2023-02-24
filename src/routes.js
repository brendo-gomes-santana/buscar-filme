import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'


import Home from './pages/Home/index';
import Filme from './pages/Filmes/index';
import Favoritos from './pages/Favoritos/index'


import Erro from './pages/Erro/index'
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/filme/:id' element={ <Filme/> }/>
                <Route path='/favorito' element={ <Favoritos/> } />
            
                <Route path='*' element={ <Erro/> }/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
};

export default RoutesApp;

//para instalar o react-router-dom
// npm install react-router-dom