import {Card, CardImg} from "react-bootstrap";
import './Products.css';

//Display Products w/o add to cart button -> homepage use
export default function DisplayCard(props){
    const { item } = props;
    return (
        <>
            <Card className='mb-4 mx-4'>
                <Card.Img variant='top' src={item.imageUrl} height='600px' width='500px' style={{objectFit: 'cover'}}/>
                <Card.Body>
                    <h5>{item.brand} {item.name}</h5>
                </Card.Body>
            </Card>

        </>

    );
}