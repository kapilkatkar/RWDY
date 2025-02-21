import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li>
              <a href="#">Email Us</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SHOP</h3>
          <ul>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
