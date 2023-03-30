import Product from "./Product";
import Header from "./Header";
import './App.css'

export default function Clothes(props) {
    const { clothes } = props;
    //fetch clothes from index.js useState variable
    return (
        <>
            <Header />
            <div className='container card-container'>
                <div className='row'>

                        {
                            //loop clothes array  & display data for each clothing item
                            clothes.map((item) => {
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