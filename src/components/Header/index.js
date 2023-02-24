import {Link} from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header>
            <Link id='logo' to='/'>Buscador de filmes</Link> 
            <Link id='fav' to='/favorito'>Meus filmes</Link>
        </header>
    )
};
export default Header;