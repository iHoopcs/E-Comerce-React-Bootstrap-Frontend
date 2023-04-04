import Header from "../Header";
import DisplayCartItem from "./DisplayCartItem";
import './Cart.css'

export default function Cart(props){
    const { cart } = props;

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