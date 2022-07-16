import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagen4 from '../assets/img/4.jpg'
function CartaApp() {
  return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={Imagen4} />
      <Card.Body>
        <Card.Title className='titulo-carta' ><strong>Gta V</strong></Card.Title>
        <Card.Text className='texto-carta'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='boton'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaApp;