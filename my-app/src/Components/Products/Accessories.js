import ProductsNavbar from "./ProductsNavbar";
import ProductCard from "./ProductCard";

export default function Accessories(props) {
  const { accessories, cart } = props;
  return (
    <>
      <ProductsNavbar cart={cart} />
      <div className="container-fluid mb-3">
        <div className="row justify-content-center">
          {
            //loop accessories array & display each item
            accessories.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })
          }
        </div>
      </div>
    </>
  );
}
