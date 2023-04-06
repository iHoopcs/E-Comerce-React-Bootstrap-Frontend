import './Products.css';
import axios from "axios";

export default function ProductCard(props){
    const API_URL = 'http://springbootbackendecommerce-env.eba-biverqpa.us-east-2.elasticbeanstalk.com';
    
    const { item } = props;

    //make post request onclick -> send item to backend -> add to db
    const addItem = async () => {
        alert('Added to Cart!')
        try {
            await axios.post(API_URL + '/addToCart', {
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                imageUrl: item.imageUrl,
                qty: item.qty+1
            } )
                .then(response => {console.log(response)});
        }catch (error){
            console.log(error.response);
        }
        window.location.reload();
    }



    return (
        //product display card -> displays information
        <>
            <div className='card mb-4 mx-4'>
                <img src={item.imageUrl} alt={item.name} className='card-img-top'/>
                <div className='card-body'>
                    <h4>{item.brand} {item.name}</h4>
                    <h5 className='text-muted'>${item.price}</h5>
                </div>
                <button className='btn btn-secondary' onClick={addItem}>Add to Cart</button>
            </div>
        </>
    );
}