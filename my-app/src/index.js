import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Home from "./Components/Home";
import Clothes from "./Components/Clothes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Shoes from "./Components/Shoes";
import Cart from "./Components/Cart";

const App = () => {
    const [shoes, setShoes] = useState([]);
    const [clothes, setClothes] = useState([]);
    //fetch shoes from backend
    axios.get('http://localhost:8080/shoes')
        .then(res => {
            console.log(res.data);
            setShoes(res.data);
        })
    //fetch clothes from backend
    axios.get('http://localhost:8080/clothing')
        .then(res => {
            console.log(res.data);
            setClothes(res.data)
        })

    //cart functionality
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (item) => {
        alert('Added to Cart!');
        //check if item already in cart
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist){
            //if item in cart, find by id & increment by one
            const newCartItems = cartItems.map((x) =>
            x.id === item.id ? {...exist, qty: exist.qty + 1} : x //if not correct id, no alter
            );
            //update Cart
            setCartItems(newCartItems)
        }else{ //if item not in cart already, add it
            const newCartItems =[...cartItems, {...item, qty:1}]; //add item to existing cart
            setCartItems(newCartItems)
        }
    }

    const onRemove = (item) => {

    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/clothes" element={<Clothes onAdd={onAdd} onRemove={onRemove} clothes={clothes} numCartItems={cartItems.length}/>}/>
                <Route path="/shoes" element={<Shoes onAdd={onAdd} onRemove={onRemove} shoes={shoes} numCartItems={cartItems.length}/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path='/cart' element={<Cart />}/>
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


