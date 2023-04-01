
export default function ProductCard(props){
    const { item, onAdd } = props;
    return (
        //product container -> displays information
        <>
            <div className='card border-secondary mb-3'>
                <img className='card-img-top' src={item.imageUrl} alt={item.name}/>
                    <div className='card-body'>
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <div>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={() => onAdd(item)}
                            >Add to Cart</button>
                        </div>
                    </div>

            </div>
        </>

    );
}