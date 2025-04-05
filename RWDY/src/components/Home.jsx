import Headers from "./Headers";
import "./Home.css";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home-container">
      <Headers />
      <section className="products">
        <Link to={"/winter-essential"} className="product">
          <img src="/img1.jpg" alt="Product 1" />
          <h3>THE RWDY DENIM OVERSHIRT</h3>
        </Link>
        <Link to={"/winter-essential"} className="product">
          <img src="/img2.jpg" alt="Product 2" />
          <h3>RWDY ESSENTIAL HOODIE </h3>
        </Link>
        <Link to={"/winter-essential"} className="product">
          <img src="/img3.jpg" alt="Product 3" />
          <h3>CULTURE BLACK HOODIE</h3>
        </Link>
        <Link to={"/winter-essential"} className="product">
          <img src="/img4.jpg" alt="Product 3" />
          <h3> RWDY SWEATSHIRT</h3>
        </Link>
      </section>

      <section className="exclusive-collection">
        <Link to="/winter-essential" className="exclusive-link">
          <div className="exclusive-overlay">
            <h2>Exclusive Winter Collection</h2>
            <p>Limited drops, limitless style.</p>
          </div>
          <img src="/exclusiveCol.jpg" alt="Exclusive Collection" />
        </Link>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
