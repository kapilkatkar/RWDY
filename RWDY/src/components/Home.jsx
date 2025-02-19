import Headers from "./Headers";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-container">
      <header className="main-header">
        <h1 className="site-title">RWDY</h1>
      </header>
      <Headers />
      <div>
        <img src="/exclusiveCol.jpg" alt="okkkkk" />
      </div>
    </div>
  );
};

export default Home;
