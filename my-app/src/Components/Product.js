
export default function Product(props){
    const { item } = props;
    return (
        //product container -> displays information
        <>
            <div className='card border-secondary mb-3'>
                <img src={item.imageUrl} alt={item.name}/>

                    <p>{item.brand}</p>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <div>
                        <button type='button' className='btn btn-secondary'>Add to Cart</button>
                    </div>
            </div>
        </>


    );
}