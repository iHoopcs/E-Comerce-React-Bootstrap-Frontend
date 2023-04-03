import './Products.css';
import {useContext} from "react";
import {CartContext} from "../Context";
export default function ProductCard(props){
    const { item } = props;

    const {cart, setCart} = useContext(CartContext);
    return (
        //product display card -> displays information
        <>
            <div className='card mb-4 mx-4'>
                <img src={item.imageUrl} alt={item.name} className='card-img-top'/>
                <div className='card-body'>
                    <h4>{item.brand} {item.name}</h4>
                    <h5 className='text-muted'>${item.price}</h5>
                </div>
                <button
                    className='btn btn-secondary'
                    onClick={() => {
                        setCart([...cart, item])
                    }}
                >Add to Cart</button>
            </div>
        </>
    );
}