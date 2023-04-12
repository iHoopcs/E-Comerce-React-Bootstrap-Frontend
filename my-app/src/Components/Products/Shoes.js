import './Products.css';
import ProductCard from "./ProductCard";
import ProductsNavbar from './ProductsNavbar';

export default function Shoes(props) {
    //fetch props from index.js useState variable
    const { shoes, cart } = props;

    return (
        <>
            <ProductsNavbar cart={cart}/>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}