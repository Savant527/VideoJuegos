import './App.css';
import { Navbar } from 'react-bootstrap';
import NavbarApp from './components/navbar'; 
import CarruselApp from './components/carrusel';
import Texto from './components/texto';
import CartaApp from './components/cartas';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Imagen4 from '../assets/img/4.jpg'
// import Imagen5 from '../assets/img/5.jpg';
// import Imagen6 from '../assets/img/6.jpg';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <CarruselApp/>
      <br/>
      <Texto/>  
      <br/>
      <div className='cartas'>
        <CartaApp 
        titulo="GTA V"
        // src={{Imagen4}}
        texto="HOLA"
        />
        <CartaApp 
        titulo="GOD OF WAR"
        // src={{Imagen5}}
        texto="HOLA"
        />
        <CartaApp 
        titulo="CALL OF DUTY"
        // src={{Imagen6}}
        texto="HOLA"

        />
      </div>
      <br/>
      <Footer/>
      
    </div>
  );
}

export default App;
