import axios from "axios";
import "./Cart.css";
export default function DisplayCartItem(props) {
  const LOCAL_API_URL = "http://localhost:8080";

  const { item } = props;

  //post request to db to increment item qty
  const incrementQty = async () => {
    try {
      await axios
        .put(LOCAL_API_URL + "/incrementQty", {
          id: item.id,
          name: item.name,
          brand: item.brand,
          price: item.price,
          imageUrl: item.imageUrl,
          qty: item.qty + 1,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error.response);
    }
    window.location.reload();
  };

  //post request to db to decrement item qty
  const decrementQty = async () => {
    try {
      await axios
        .put(LOCAL_API_URL + "/decrementQty", {
          id: item.id,
          name: item.name,
          brand: item.brand,
          price: item.price,
          imageUrl: item.imageUrl,
          qty: item.qty - 1,
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
      <div className="container">
        <div className="row mx-4 g-5">
          <div className="col-8">
            <div className="row g-0">
              <div className="col-9">
                <div className="card cart-card-image">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="card-img"
                  />
                </div>
              </div>

              <div className="col-2">
                <h5>
                  {item.brand} {item.name}
                </h5>
                <p className="text-muted">${item.price}</p>
                <p className="text-muted">Qty: {item.qty}</p>
              </div>
            </div>
          </div>

          <div className="col mt-5 mx-3">
            <div>
              <button
                className="btn btn-secondary mx-1 "
                onClick={incrementQty}
              >
                +
              </button>
              <button className="btn btn-danger" onClick={decrementQty}>
                -
              </button>
            </div>
          </div>

          <hr className="mb-5 mt-5"></hr>
        </div>
      </div>
    </>
  );
}
