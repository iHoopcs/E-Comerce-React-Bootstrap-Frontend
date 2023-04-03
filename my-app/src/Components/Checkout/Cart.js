import Header from "../Header";
import {useContext, useEffect} from "react";
import {CartContext} from "../Context";
import CheckoutCard from "./CheckoutCard";

export default function Cart(){
    const {cart, setCart} = useContext(CartContext);
    console.log(useContext(CartContext))

    useEffect(() => {
        setCart([...cart, cart]);
    }, [])
    return(
        <>
            <Header />
            <div className='container cart-parent-container'>
                <div className='row'>
                    <div className='col-7 cart-child-container-1  justify-content-evenly'>
                        <h1>Cart</h1>
                        <div>
                            {
                                cart.map((item) => <CheckoutCard item={item} key={item.id}/>)
                            }
                        </div>
                    </div>

                    <div className='col-lg-4 cart-child-container-2' >
                        <h1>Summary</h1>
                        <a href='/checkout'><button className='btn btn-outline-dark '>Checkout</button></a>
                    </div>
                </div>

            </div>



        </>
    );
}