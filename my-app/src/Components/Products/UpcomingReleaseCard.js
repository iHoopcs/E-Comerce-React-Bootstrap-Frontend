import "./Products.css";

//Display Products w/o add to cart button -> homepage use
export default function UpcomingReleaseCard(props) {
  const { item } = props;
  return (
    <>
      <div className="card shadow mx-4 mb-4">
        <img src={item.imageUrl} alt={item.name} className="card-img-top" />
        <div className="card-body">
          <h4>
            {item.brand} {item.name}
          </h4>
          <h5 className="text-muted">${item.price}</h5>
        </div>
      </div>
    </>
  );
}
