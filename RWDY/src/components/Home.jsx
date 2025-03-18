import Headers from "./Headers";
import "./Home.css";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home-container">
      <header className="main-header">
        <h1 className="site-title">ROWDY FASHION</h1>
      </header>
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

      <div>
        <Link to={"/winter-essential"}>
          <img
            src="/exclusiveCol.jpg"
            alt="okkkkk"
            className="exclusiveCol-img"
          />
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
