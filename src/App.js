import RoutesApp from './routes';
import './style.css';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// esse css é import para para fazer o efeito
function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
};

export default App;

