import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clothes from "./Components/Clothes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Shoes from "./Components/Shoes";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/clothes" element={<Clothes />}/>
                <Route path="/shoes" element={<Shoes />}/>
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


