import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <div className="header--logo">
            <h2>LOGO</h2>
      </div>
      <div className="header--menu">
            <a href="">Home</a>
            <a href="">Sobre</a>
      </div>
    </div>
  );
}

export default Header;