import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Headers = () => {
  const totalItems = useSelector((state) => state.myCart.totalItems);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/winter-essential"}>WINTER ESSENTIAL 24</Link>
        </li>
        <li>
          <Link to={"/RWDY-X-sunburn"}>RWDY X SUNBURN</Link>
        </li>
        <li>
          <Link to={"/topwear"}>TOP WEAR</Link>
        </li>
        <li>
          <Link to={"/bottomwear"}>BOTTOM WEAR</Link>
        </li>
        <li>
          <Link to={"/accessories"}>ACCESSORIES</Link>
        </li>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            CART <sup style={{ color: "red" }}>{totalItems}</sup>
          </Link>
        </li>
        <li>
          <Link to={"/"}>LOGO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Headers;
