import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <p className="header__eyebrow">Filipino Comfort Food</p>
        <h1 className="header__title">Emily&apos;s Yumyum Kitchen</h1>
        <p className="header__subtitle">by Lola Sandok</p>
      </div>

      <nav className="header__nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#featured">Favorites</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Lola</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;