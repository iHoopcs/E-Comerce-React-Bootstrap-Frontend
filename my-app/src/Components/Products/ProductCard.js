import './Products.css';
import axios from "axios";
export default function ProductCard(props){
    const { item } = props;

    //make post request onclick -> send item to backend -> add to db
    const sendItem = async () => {
        alert('Added to Cart!')
        try {
            await axios.post('http://localhost:8080/addToCart', {
                name: item.name,
                brand: item.brand,
                price: item.price,
                imageUrl: item.imageUrl
            } )
                .then(response => {console.log(response)});
        }catch (error){
            console.log(error.response);
        }
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
                <button
                    className='btn btn-secondary'
                    onClick={sendItem}
                >Add to Cart</button>
            </div>
        </>
    );
}