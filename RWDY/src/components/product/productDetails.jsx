import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import Headers from "../Headers";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/Cart.Slice";
import Footer from "../footer/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        data.image = `/img${id}.jpg`;
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Headers></Headers>
      <div className="product-detail">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <div className="size-chart">
            <h3>Size Chart</h3>
            <ul>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>

          <div className="button-container">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-button" onClick={handleAddToCart}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetail;
