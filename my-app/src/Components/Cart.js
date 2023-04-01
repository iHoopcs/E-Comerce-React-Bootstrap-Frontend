import Header from "./Header";
import ProductCard from "./ProductCard";

export default function Cart(props){
    //fetch cartItems from index.js
    const { cartItems } = props;

    return(
        <>
            <Header />
            <div className='container cart-parent-container'>
                <div className='row'>
                    <div className='col-7 cart-child-container-1'>
                        <h1>Cart</h1>
                        {
                            //display items added to cart
                            cartItems.map((item) => <ProductCard item={item}/>)
                        }
                    </div>

                    <div className='col-lg-4 cart-child-container-2' >
                        <h1>Summary</h1>
                    </div>
                </div>

            </div>



        </>
    );
}