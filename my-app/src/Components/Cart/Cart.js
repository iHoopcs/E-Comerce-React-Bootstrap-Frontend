import Header from "../Header";
import DisplayCartItem from "./DisplayCartItem";
import './Cart.css'
import {useState} from "react";

export default function Cart(props){
    const { cart } = props;
    const [subtotal, setSubtotal] = useState(0);

    return(
        <>
            <Header />
            <div className='container cart-parent-container'>
                <div className='row'>
                    <div className='col-7 cart-child-container-1'>
                        <h1>Cart</h1>
                        <div>
                            {
                                cart.length === 0 ? <p className='text-danger'>No Items Added to Cart</p> :
                                cart.map((item) => {
                                    return (
                                        <DisplayCartItem item={item} key={item.id}/>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='col-4 cart-child-container-2 mx-5' >
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
                                <a href='/checkout'><button className='btn btn-outline-dark'>Checkout</button></a>
                                <h5>Subtotal: ${subtotal}</h5>

                            </div>
                        </div>


                    </div>
                </div>

            </div>



        </>
    );
}