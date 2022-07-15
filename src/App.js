import './App.css';
import { Navbar } from 'react-bootstrap';
import NavbarApp from './components/navbar'; 
import CarruselApp from './components/carrusel';
import Texto from './components/texto';
import CartaApp from './components/cartas';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <CarruselApp/>
      <br/>
      <Texto/>  
      <br/>
      <div className='cartas'>
        <CartaApp/>
        <CartaApp/>
        <CartaApp/>
      </div>
      <br/>
      <Footer/>
      
    </div>
  );
}

export default App;
