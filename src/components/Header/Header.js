import "./Header.css";
import avatar from "../../images/avatar.webp";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <button type="button" className="header__menu cursor"></button>
        <div className="header__profile cursor">
          <img className="header__avatar" alt="Аватар" src={avatar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
