import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import Home from "./Components/Homepage/Home";
import Clothes from "./Components/Products/Clothes";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import Shoes from "./Components/Products/Shoes";
import Cart from "./Components/Checkout/Cart";
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmation from "./Components/Checkout/OrderConfirmation";
import Context, {CartContext} from "./Components/Context";

const App = () => {
    const [shoes, setShoes] = useState([]);
    const [clothes, setClothes] = useState([]);
    const fetchShoesData = async () => {
        try{
            const response = await axios('http://localhost:8080/shoes');
            console.log(response.data);
            setShoes(response.data);
        }catch (error){
            console.log(error.response);
        }
    };
    useEffect(() => {
        fetchShoesData();
    }, []);
    const fetchClothingData = async () => {
        try{
            const response = await axios('http://localhost:8080/clothing');
            console.log(response.data);
            setClothes(response.data);
        }catch (error){
            console.log(error.response);
        }
    };
    useEffect(() => {
        fetchClothingData();
    }, []);

    const {cart} = useContext(CartContext);
    console.log(cart)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />}/>
                <Route path="/clothes" element={<Clothes clothes={clothes} />}/>
                <Route path="/shoes" element={<Shoes  shoes={shoes} />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='checkout' element={<Checkout />}/>
                <Route path='/confirmationPage' element={<OrderConfirmation />}/>
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context>
          <App />
      </Context>
  </React.StrictMode>
);


