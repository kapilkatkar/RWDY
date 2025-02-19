import Headers from "./Headers";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-container">
      <header className="main-header">
        <h1 className="site-title">RWDY</h1>
      </header>
      <Headers />
      <section className="products">
        <div className="product">
          <img src="/img1.jpg" alt="Product 1" />
          <h3>THE RWDY DENIM OVERSHIRT</h3>
        </div>
        <div className="product">
          <img src="/img2.jpg" alt="Product 2" />
          <h3>RWDY ESSENTIAL HOODIE </h3>
        </div>
        <div className="product">
          <img src="/img3.jpg" alt="Product 3" />
          <h3>CULTURE BLACK HOODIE</h3>
        </div>
        <div className="product">
          <img src="/img4.jpg" alt="Product 3" />
          <h3> RWDY SWEATSHIRT</h3>
        </div>
      </section>

      <div>
        <img
          src="/exclusiveCol.jpg"
          alt="okkkkk"
          className="exclusiveCol-img"
        />
      </div>
    </div>
  );
};

export default Home;
