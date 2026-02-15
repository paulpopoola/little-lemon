import logo from "./assets/logo.png";

function Header() {
  return (
    <header role="banner">
      <img
        src={logo}
        alt="Little Lemon restaurant logo"
        aria-label="Little Lemon restaurant homepage"
      />
    </header>
  );
}

export default Header;
