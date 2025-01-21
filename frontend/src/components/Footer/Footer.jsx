import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="footer logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              minima consectetur alias sed iusto aspernatur harum neque adipisci
              recusandae, culpa inventore quibusdam mollitia esse omnis facilis.
              Dolorem fugit recusandae officia.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © Tomato.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
