/* eslint-disable */
const Product = ({ product }) => (
  <div className="product">
    <div className="product__image">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product__info">
      <p className="product__title">{product.name}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{product.price}</strong>
      </p>
      <p className="product__description">{product.description}</p>
    </div>
  </div>
);

export default Product;
