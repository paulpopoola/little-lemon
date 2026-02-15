import logo from "./assets/logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header role="banner">
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="Little Lemon restaurant logo"
              aria-label="Little Lemon restaurant homepage"
            />
            <div className="logo-text">
              <div className="logo-title">LITTLE LEMON</div>
              <div className="logo-subtitle">Chicago</div>
            </div>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
