import './App.css';
import { Navbar } from 'react-bootstrap';
import NavbarApp from './components/navbar'; 
import CarruselApp from './components/carrusel';
import Texto from './components/texto';
import CartaApp from './components/cartas';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen4 from './assets/img/4.jpg';
import Imagen5 from './assets/img/5.jpg';
import Imagen6 from './assets/img/6.jpg';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <CarruselApp/>
      <br/>
      <Texto/>  
      <br/>
      <div className='cartas container d-flex  justify-content-between flex-wrap'>
      
        <CartaApp 
        titulo="GTA V"
        imagen= {Imagen4}
        texto="Es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. 
        Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360. Posteriormente, distribuido el 18 de noviembre de 
        2014 para las consolas de nueva generación PlayStation 4 y Xbox One y la vista en primera persona, luego para Microsoft Windows el 14 
        de abril de 2015 y finalmente se confirmó su lanzamiento para PlayStation 5 y Xbox Series X/S para marzo de 2022.​"
        />
        <CartaApp 
        titulo="GOD OF WAR"
        imagen={Imagen5}
        texto="Es una serie de videojuegos que se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, 
        tanto héroes (Heracles, Teseo, Perseo, etc.); especies mitológicas (gorgonas, arpías, o minotauros); dioses griegos 
        (Ares, Poseidón, Zeus, entre otros), titanes (como Cronos) y dioses primordiales (como Gaia). Aunque el guerrero espartano acostumbra enemistad con la mayoría de los dioses, 
        recibe ayuda de muchos de ellos en algún momento de cada entrega, en especial de Atenea."
        />
        <CartaApp 
        titulo="CALL OF DUTY"
        imagen={Imagen6}
        texto="Es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, 
        Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision. La franquicia comenzó para computadora personal 
        y posteriormente fue expandiéndose hacia videoconsolas de sexta y séptima generación, tanto de sobremesa como portátiles, llegando así, 
        a lanzar varios juegos derivados de forma paulatina con la serie principal."

        />
      </div>
      <br/>
      <Footer/>
      
    </div>
  );
}

export default App;
