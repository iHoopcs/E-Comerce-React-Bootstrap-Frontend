import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import Home from "./Components/Homepage/Home";
import Clothes from "./Components/Products/Clothes";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import Shoes from "./Components/Products/Shoes";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmation from "./Components/Checkout/OrderConfirmation";
import DetailedProductPage from "./Components/Products/DetailedProductPage";

const App = () => {
    //const API_URL = 'http://springbootbackendecommerce-env.eba-biverqpa.us-east-2.elasticbeanstalk.com';
    const LOCAL_API_URL = 'http://localhost:5000';

    //fetch shoes from api
    const [shoes, setShoes] = useState([]);
    const fetchShoesData = async () => {
        try{
            const response = await axios(LOCAL_API_URL + '/shoes');
            //console.log(response.data);
            setShoes(response.data);
        }catch (error){
            console.log(error.response);
        }
    };
    useEffect(() => {
        fetchShoesData();
    }, []);

    //fetch clothes from api
    const [clothes, setClothes] = useState([]);
    const fetchClothingData = async () => {
        try{
            const response = await axios(LOCAL_API_URL + '/clothing');
            //console.log(response.data);
            setClothes(response.data);
        }catch (error){
            console.log(error.response);
        }
    };
    useEffect(() => {
        fetchClothingData();
    }, []);

    //fetch cartItems from api
    const [cart, setCart] = useState([]);
    const fetchCart = async () => {
        try {
            const response = await axios.get(LOCAL_API_URL + '/cart')
            setCart(response.data);
        }catch (error){
            console.log(error.response);
        }
    }
    useEffect(() => {
        fetchCart();
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />}/>
                <Route path="/clothes" element={<Clothes clothes={clothes} cart={cart}/>}/>
                <Route path="/shoes" element={<Shoes  shoes={shoes} cart={cart}/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path='/cart' element={<Cart cart={cart}/>}/>
                <Route path='checkout' element={<Checkout cart={cart}/>}/>
                <Route path='/confirmationPage' element={<OrderConfirmation />}/>
                
                {
                    //create individual routes for each product -> render each info page
                    shoes.map((product) => {
                        return (
                            <Route 
                                path={`/products/${product.id}/${product.brand}/${product.name}`}
                                element={<DetailedProductPage product={product} cart={cart}/>}
                            />
                        )
                    })
                }

                {
                    //create individual routes for each product -> render each info page
                    clothes.map((product) => {
                        return (
                            <Route 
                                path={`/products/${product.id}/${product.brand}/${product.name}`}
                                element={<DetailedProductPage product={product} cart={cart}/>}
                                />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


