import ProductsNavbar from "./ProductsNavbar";
import axios from "axios";

export default function DetailedProductPage(props) {
  const { product, cart } = props;
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
          qty: product.qty + 1
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

          <div className="col detailed-info-box-child-2 text-center">
            <h3>
              {product.brand} {product.name}
            </h3>
            <h4 className="text-muted mb-5">${product.price}</h4>
            <p>{product.description}</p>
            {
              //compare item in cart with current product -> if names same -> item already in cart -> display message / hide add to cart
              cart.some(cartItem => cartItem.name === product.name ) ? <h4 className='text-muted mt-5'>Added to Cart!</h4> : <button className="btn btn-secondary mt-5" onClick={addItem}>Add to Cart</button>
            }

          </div>
        </div>
      </div>
    </>
  );
}
