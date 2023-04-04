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
                                let price = item.price * item.qty;
                                return(
                                    <>
                                        <div className='row'>
                                            <div className='d-flex justify-content-between mt-3'>
                                                <h6>{item.brand} {item.name}</h6>
                                                <h6>x{item.qty}</h6>
                                                <h5>${price}</h5>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        <div className='row'>
                            <div className='d-flex justify-content-end mt-5'>
                                <h5 >Subtotal: </h5>
                                <h5>${subtotal}</h5>
                            </div>
                        </div>

                        <a href='/checkout'><button className='btn btn-outline-dark mt-5 mb-3'>Checkout</button></a>
                    </div>
                </div>

            </div>



        </>
    );
}