import ProductsNavbar from "./ProductsNavbar";
import axios from "axios";

export default function DetailedProductPage(props){
    const { product, cart } = props; 


    const API_URL = 'http://springbootbackendecommerce-env.eba-biverqpa.us-east-2.elasticbeanstalk.com';
    //make post request onclick -> send item to backend -> add to db
    const addItem = async () => {
        alert('Added to Cart!')
        try {
            await axios.post(API_URL + '/addToCart', {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                imageUrl: product.imageUrl,
                qty: product.qty+1
            } )
                .then(response => {console.log(response)});
        }catch (error){
            console.log(error.response);
        }
        window.location.reload();
    }

    return(
        <>
            <ProductsNavbar cart={cart} />
            <div className='container'>
                <div className='row'>
                    <div className='col-8 detailed-info-box-child-1 mx-3 '>
                            <img src={product.imageUrl} alt={product.name} className='detailed-info-image mx-2 mb-3'/>
                            <img src={product.imageUrl} alt={product.name} className='detailed-info-image mx-2 mb-3'/>
                            <img src={product.imageUrl} alt={product.name} className='detailed-info-image mx-2 mb-3'/>
                            <img src={product.imageUrl} alt={product.name} className='detailed-info-image mx-2 mb-3'/>
                    </div>

                    <div className='col detailed-info-box-child-2 text-center'>
                        <h3>{product.brand} {product.name}</h3>
                        <h4 className='text-muted'>${product.price}</h4>
                        <button className='btn btn-secondary mt-5' onClick={addItem}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    ); 
}