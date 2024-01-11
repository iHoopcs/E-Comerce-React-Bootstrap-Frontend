import Header from "../Header";
import DisplayCartItem from "./DisplayCartItem";
import './Cart.css'
import {useEffect, useState} from "react";


export default function Cart(props){
    const { cart } = props;
    const [totalPrice, setTotalPrice] = useState(0);

    //every refresh / change dependent on cart useState variable -> execute code -> calculate total price of cart itemss
    useEffect(() => {
        let calculateTotal = 0; 
        for (let i=0; i<cart.length; i++){
            calculateTotal = calculateTotal + (cart[i].price * cart[i].qty); 
        }
        setTotalPrice(calculateTotal); 
    },[cart])
     
    return(
        <>
            <Header />
            <div className='container cart-parent-container'>
                <div className='row justify-content-center'>
                    <div className='col-md-7 cart-child-container-1'>
                        <h1 className='mx-3 mb-4' >Cart</h1>
                        <div>
                            {
                                cart.length === 0 ? <p className='text-danger mx-3'>No Items Added to Cart</p> :
                                cart.map((item) => {
                                    return (
                                        <DisplayCartItem item={item} key={item.id}/>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='col-md-3 cart-child-container-2 mx-3' >
                        <h1>Summary</h1>
                        {
                            cart.map((item) => {
                                let productPrice = item.price * item.qty;
                                return(
                                    <>
                                        <div className='row'>
                                            <div className='d-flex justify-content-between mt-4'>
                                                <h6>{item.brand} {item.name}</h6>
                                                <h5>${productPrice}</h5>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        <div className='row'>
                            <div className='d-flex mt-5 justify-content-between'>
                                {
                                    cart.length === 0 ? '' : <a href='/checkout'><button className='btn btn-outline-dark'>Checkout</button></a>
                                }

                                <h5>Total: ${totalPrice}</h5>

                            </div>
                        </div>


                    </div>
                </div>

            </div>


            
        </>
    );
}