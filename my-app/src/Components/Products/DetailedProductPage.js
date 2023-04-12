import ProductsNavbar from "./ProductsNavbar";

export default function DetailedProductPage(props){
    const { product, cart } = props; 

    return(
        <>
            <ProductsNavbar cart={cart} />
            <h1>DetailedProductPage</h1>
            <h2>{product.name}</h2>
        </>
    ); 
}