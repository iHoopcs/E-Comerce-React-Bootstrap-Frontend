import axios from "axios";
import {useEffect} from "react";

export default function DisplayCartItem(props){
    const {item} = props;

    //post request to db to increment item qty
    const incrementQty = async () => {
        try{
            await axios.put('http://localhost:8080/incrementQty', {
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                imageUrl: item.imageUrl,
                qty: item.qty+1
            })
                .then(response => {console.log(response)});
        }catch(error){
            console.log(error.response);
        }
    }


    //post request to db to decrement item qty
    const decrementQty = async () => {
        try{
            await axios.put('http://localhost:8080/incrementQty', {
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                imageUrl: item.imageUrl,
                qty: item.qty-1
            })
                .then(response => {console.log(response)});
        }catch(error){
            console.log(error.response);
        }
    }


    return(
        <>
            <div className='container'>
                <div className='row just'>
                    <div className='col-9'>
                        <div className='d-flex'>
                            <div className='card mb-5 mx-5 mt-4'>
                                <img src={item.imageUrl} alt={item.name} />
                            </div>

                            <div className='mt-4 mx-4' >
                                <h5>{item.brand} {item.name}</h5>
                                <p className='text-muted'>${item.price}</p>
                                <p className='text-muted'>Qty: {item.qty}</p>
                            </div>
                        </div>

                    </div>

                    <div className='col mt-5'>
                        <div>
                            <button
                                className='btn btn-secondary mx-2 '
                                onClick={incrementQty}
                            >+</button>
                            <button
                                className='btn btn-danger'
                                onClick={decrementQty}
                            >-</button>
                        </div>
                    </div>
                </div>

            </div>




        </>
    );
}