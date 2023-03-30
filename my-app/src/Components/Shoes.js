import Header from "./Header";
import Product from "./Product";

export default function Shoes(props) {
    //fetch props from index.js useState variable
    const { shoes } = props;
    return (
        <>
            <Header />
            <div className='container card-container'>
                <div className='row'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
                            return (
                                <Product item={item}/>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
}