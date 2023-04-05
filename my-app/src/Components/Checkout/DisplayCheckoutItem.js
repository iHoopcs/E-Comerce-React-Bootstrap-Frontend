import './CartCheckout.css';

export default function DisplayCheckoutItem(props){
    const { item } = props;

    return (
        <>
            <div className='container'>
                <div className='row g-0'>

                    <div className='col-md'>
                        <div className='card checkout-card-image mb-5'>
                            <img src={item.imageUrl} alt={item.name} className='card-img'/>
                        </div>

                    </div>

                    <div className='col-md'>
                        <p className='mt-3'>{item.brand} {item.name}</p>
                    </div>

                </div>
            </div>
        </>
    );
}