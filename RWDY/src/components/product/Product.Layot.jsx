import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";
import Headers from "../Headers";
import Footer from "../footer/Footer";

const ProductList = () => {
  const [productLis, setProductList] = useState([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        if (data.length > 0) {
          data.forEach((item, index) => {
            item.image = `/img${(index % 10) + 1}.jpg`;
          });
        }
        setProductList(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const onInputSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    setTimeout(() => {
      const filteredProducts = productLis.filter((elem) =>
        elem.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }, 300);
  };

  if (productLis.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Headers />
      <div className="search-container">
        <input
          type="text"
          value={searchValue}
          onInput={onInputSearch}
          placeholder="Search products..."
          className="search-input"
        />
      </div>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <div className="no-results">No products found</div>
        ) : (
          filteredProducts.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                onClick={() => handleProductClick(item.id)}
              >
                <img src={item.image} className="item-image" alt={item.title} />
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
