import "./Header.css";

function Header({ title, subtitle}) {
  return (
    <header className="header">
      <div className="header__brand">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
