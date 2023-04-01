import {Card} from "react-bootstrap";

export default function ProductCard(props){
    const { item, onAdd, cartItems } = props;
    return (
        //product container -> displays information
        <>
            <Card className='mb-4 mx-4' >
                <Card.Img variant='top' src={item.imageUrl} height='600px' style={{objectFit: 'cover'}} />
                <Card.Body>
                    <h5>{item.brand} {item.name}</h5>
                    <h5>${item.price}</h5>
                    <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={() => onAdd(item)}
                    >Add to Cart</button>
                </Card.Body>

            </Card>
        </>

    );
}