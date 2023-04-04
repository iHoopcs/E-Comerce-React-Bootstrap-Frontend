import Header from "../Header";
import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react";
import DisplayCard from "../Products/DisplayCard";
import DisplayCartItem from "./DisplayCartItem";

export const CartContext = createContext();
export function Context({ children }){
    const [cart, setCart] = useState([]);
    return <CartContext.Provider value={{cart, setCart}}>{ children }</CartContext.Provider>
}

export default function Cart(){
    const {cart, setCart} = useContext(CartContext);
    const fetchCart = async () => {
        try {
            const response = await axios.get('http://localhost:8080/cart')
            setCart(response.data);
        }catch (error){
            console.log(error.response);
        }
    }
    useEffect(() => {
        fetchCart();
    },[])

    console.log(cart);
    return(
        <>
            <Header />
            <div className='container cart-parent-container'>
                <div className='row'>
                    <div className='col-8 cart-child-container-1 mx-3'>
                        <h1>Cart</h1>
                        <div>
                            {
                                cart.map((item) => <DisplayCartItem item={item} key={item.id}/>)
                            }
                        </div>
                    </div>

                    <div className='col-3 cart-child-container-2' >
                        <h1>Summary</h1>
                        <a href='/checkout'><button className='btn btn-outline-dark '>Checkout</button></a>
                    </div>
                </div>

            </div>



        </>
    );
}