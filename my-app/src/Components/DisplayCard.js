
//Display Products w/o add to cart button -> homepage use
export default function DisplayCard(props){
    const { item } = props;
    return (
        <>
            <div className='card border-secondary mb-3'>
                <img className='card-img-top' src={item.imageUrl} alt={item.name}/>
                    <div className='card-body'>
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <div>
                        </div>
                    </div>

            </div>
        </>

    );
}