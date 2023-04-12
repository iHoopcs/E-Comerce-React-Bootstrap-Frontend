import ProductsNavbar from "./ProductsNavbar";

export default function DetailedProductPage(props){
    const { product, cart } = props; 
    console.log(product)
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
                        <button className='btn btn-secondary mt-5'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    ); 
}