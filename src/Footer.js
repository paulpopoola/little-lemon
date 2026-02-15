import { Link } from "react-router-dom";
import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import xIcon from "./assets/x.png";
import linkedInIcon from "./assets/linkedIn.png";

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer">
      <div className="container">
        {/* Logo Section */}
        <section aria-labelledby="footer-logo">
          <div className="logo-footer" id="footer-logo">
            LITTLE LEMON
          </div>
          <p className="tagline">
            A family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist.
          </p>
        </section>

        {/* Navigation Section */}
        <section aria-labelledby="footer-nav-heading">
          <h3 id="footer-nav-heading">Navigation</h3>
          <ul aria-label="Footer navigation links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section aria-labelledby="footer-contact-heading">
          <h3 id="footer-contact-heading">Contact</h3>
          <ul aria-label="Contact information">
            <li>123 Main Street</li>
            <li>Chicago, IL 60601</li>
            <li>
              <a href="tel:+13125550123">(312) 555-0123</a>
            </li>
            <li>
              <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </li>
          </ul>
        </section>

        {/* Social Media Section */}
        <section aria-labelledby="footer-social-heading">
          <h3 id="footer-social-heading">Social Media</h3>
          <div className="social-icons" aria-label="Social media links">
            <a
              href="https://facebook.com"
              className="social-icon"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              aria-label="Visit our Twitter page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="X" className="social-icon-img" />
            </a>
            <a
              href="https://youtube.com"
              className="social-icon"
              aria-label="Visit our YouTube channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="social-icon-img"
              />
            </a>
          </div>
        </section>
      </div>

      <div className="container">
        <p className="copyright">
          &copy; 2026 Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
