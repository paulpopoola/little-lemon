import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/" aria-label="Navigate to homepage">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" aria-label="Navigate to about page">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" aria-label="Navigate to menu page">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" aria-label="Navigate to reservations page">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" aria-label="Navigate to online ordering page">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" aria-label="Navigate to login page">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
