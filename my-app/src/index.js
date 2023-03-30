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
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/clothes" element={<Clothes clothes={clothes}/>}/>
                <Route path="/shoes" element={<Shoes shoes={shoes}/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
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


