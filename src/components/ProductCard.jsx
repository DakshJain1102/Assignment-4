const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
