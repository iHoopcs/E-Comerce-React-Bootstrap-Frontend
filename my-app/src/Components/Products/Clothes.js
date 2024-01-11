import ProductCard from "./ProductCard";
import './Products.css';
import ProductsNavbar from "./ProductsNavbar";
import Footer from "../footer";

export default function Clothes(props) {
    //fetch clothes from index.js useState variable
    const { clothes, cart } = props;

    return (
        <>
            <ProductsNavbar cart={cart}/>
            <div className='container-fluid mb-3'>
                <div className='row justify-content-center'>
                        {
                            //loop clothes array  & display data for each clothing item
                            clothes.map((item) => {
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
            <Footer />
        </>
    );
}