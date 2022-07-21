import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagen4 from '../assets/img/4.jpg'

function CartaApp(props) {
  return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={Imagen4} />
      <Card.Body>
        <Card.Title className='titulo-carta' ><strong>{props.titulo}</strong></Card.Title>
        <Card.Text className='texto-carta'>{props.texto}</Card.Text>
        <Button variant="primary" className='boton'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaApp;