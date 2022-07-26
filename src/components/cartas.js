import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CartaApp(props) {
  return (
    <Card style={{ width: '18rem' }} className="card m-5 text-center">
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title className='titulo-carta' ><strong>{props.titulo}</strong></Card.Title>
        <Card.Text className='texto-carta'>{props.texto}</Card.Text>
        <Button variant="primary" className='boton'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaApp;