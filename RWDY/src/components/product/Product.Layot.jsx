import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { addToCart } from "../cart/Cart.Slice";
import "./product.css";
import Headers from "../Headers";

const ProductList = () => {
  const [productLis, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        if (data.length > 0) {
          data[0].image = "/img1.jpg";
          data[1].image = "/img2.jpg";
          data[2].image = "/img3.jpg";
          data[3].image = "/img4.jpg";
          data[4].image = "/img5.jpg";
          data[5].image = "/img6.jpg";
          data[6].image = "/img7.jpg";
          data[7].image = "/img8.jpg";
          data[8].image = "/img9.jpg";
          data[9].image = "/img10.jpg";
          data[10].image = "/img1.jpg";
          data[11].image = "/img2.jpg";
          data[12].image = "/img3.jpg";
          data[13].image = "/img4.jpg";
          data[14].image = "/img5.jpg";
          data[15].image = "/img6.jpg";
          data[16].image = "/img7.jpg";
          data[17].image = "/img8.jpg";
          data[18].image = "/img9.jpg";
          data[19].image = "/img10.jpg";
        }
        setProductList(data);
      });
  }, []);

  // const onAddCart = (product) => {
  //   console.log({ product });
  //   dispatch(addToCart(product));
  // };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Headers></Headers>

      <div className="product-list">
        {productLis.map((item) => {
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => handleProductClick(item.id)}
            >
              <img src={item.image} className="item-image" alt={item.title} />
              <div>
                <p>{item.title}</p>
                {/* <button
                  onClick={() => {
                    onAddCart(item);
                  }}
                >
                  Add to cart
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
