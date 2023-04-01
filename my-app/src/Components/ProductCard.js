import {Card} from "react-bootstrap";

export default function ProductCard(props){
    const { item, onAdd, cartItems } = props;
    return (
        //product container -> displays information
        <>
            <Card className='mb-4 mx-4' >
                <Card.Img variant='top' src={item.imageUrl} height='600px' style={{objectFit: 'cover'}} />
                <Card.Body>

                    <Card.Title>
                        <p>{item.brand} {item.name}</p>
                        <p className='text-muted'>${item.price}</p>
                    </Card.Title>

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