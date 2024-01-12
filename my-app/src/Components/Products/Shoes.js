import './Products.css';
import ShoeProductCard from "./ShoeProductCard";
import ProductsNavbar from './ProductsNavbar';
import Footer from "../footer";

export default function Shoes(props) {
    //fetch props from index.js useState variable
    const { shoes, cart } = props;

    return (
        <>
            <ProductsNavbar cart={cart}/>
            <div className='container-fluid mb-3'>
                <div className='row justify-content-center'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
                            return (
                                <ShoeProductCard
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />

        </>
    );
}