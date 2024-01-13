import ProductsNavbar from "./ProductsNavbar";
import axios from "axios";
import Footer from '../footer'; 
import { useState } from "react";

export default function DetailedShoeProductPage(props) {
  const { product, cart } = props;
  const [shoeSize, setShoeSize] = useState(""); 
  console.log(product);

  const LOCAL_API_URL = "http://localhost:8080";

  //make post request onclick -> send item to backend -> add to db
  const addItem = async () => {
    try {
      await axios
        .post(LOCAL_API_URL + "/addToCart", {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          imageUrl: product.imageUrl,
          qty: product.qty + 1,
          size: shoeSize
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error.response);
    }
    window.location.reload();
  };

  return (
    <>
      <ProductsNavbar cart={cart} />
      <div className="container">
        <div className="row">
          <div className="col-8 detailed-info-box-child-1  ">
            <div className="row">
              <div className="col-5">
                <div className="">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card style-detailed-info-card shadow-lg  mb-3"
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <img
                    src={product.imageUrl2}
                    alt={product.name}
                    className="card style-detailed-info-card shadow-lg mb-3"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <div>
                  <img
                    src={product.imageUrl3}
                    alt={product.name}
                    className="card style-detailed-info-card shadow-lg mb-3"
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <img
                    src={product.imageUrl4}
                    alt={product.name}
                    className="card style-detailed-info-card shadow-lg mb-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 detailed-info-box-child-2 text-center">
            <h3>
              {product.brand} {product.name}
            </h3>
            <h4 className="text-muted mb-5">${product.price}</h4>
            <p>{product.description}</p>

            
           
            <div>
              <select className="form-select"
                onChange={(e) => {
                  const selectedSize = e.target.value; 
                  setShoeSize(selectedSize); 
                }}
              >
                <option value={""}>Select Your Size</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
                <option value={"13"}>13</option>
                <option value={"14"}>14</option>
                <option value={"15"}>15</option>
                <option value={"16"}>16</option>
              </select>
            </div>
            {
              (!cart.some(cartItem => cartItem.name === product.name ) && shoeSize === "") ? <button className="btn btn-secondary mt-5" disabled>Add to Cart</button>//if item is not in cart but user hasn't selected size - disable add to cart
                :(cart.some(cartItem => cartItem.name === product.name )) ? <h4 className="text-muted mt-5">Added to cart!</h4>//if item is already in cart - display text
                  :<button className="btn btn-secondary mt-5" onClick={addItem}>Add to Cart</button>  //if neither conditions true - display add to cart button
            }

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
