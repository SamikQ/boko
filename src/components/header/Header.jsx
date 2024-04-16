import logoHeaderB from "../../resources/img/header-logo-black.svg";
import search from "../../resources/img/search.svg";
import phone from "../../resources/img/phone.svg";
import heart from "../../resources/img/heart.svg";
import user from "../../resources/img/user.svg";
import cart from "../../resources/img/cart.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <a href="localhost:3000" className="header__logo">
            <img src={logoHeaderB} alt="Логотип одягу BOKO" />
          </a>
          <nav className="header__content-menu">
            <li className="header__nav-item">
              <a href=" " className="header__nav-link">
                каталог
              </a>
            </li>
            <li className="header__nav-item">
              <a href=" " className="header__nav-link">
                limited
              </a>
            </li>
            <li className="header__nav-item">
              <a href=" " className="header__nav-link">
                про нас
              </a>
            </li>
            <li className="header__nav-item">
              <a href=" " className="header__nav-link">
                контакти
              </a>
            </li>
            <li className="header__nav-item">
              <a href=" " className="header__nav-link sale">
                sale
              </a>
            </li>
            <li className="header__nav-item">
              <a href=" " className="header__nav-link">
                look of the day
              </a>
            </li>
          </nav>
          <div className="header__content-acc acc">
            <a href="/#" className="acc__item" aria-label="search">
              <img src={search} alt="search button" />
            </a>
            <a href="/#" className="acc__item">
              <img src={phone} alt="phone button" />
            </a>
            <a href="/#" className="acc__item" aria-label="like">
              <img src={heart} alt="like button" />
            </a>
            <a href="/#" className="acc__item">
              <img src={user} alt="account button" />
            </a>
            <a href="/#" className="acc__item" aria-label="shopping cart">
              <div className="header__content-cart">
                <img src={cart} alt="shopping cart button" />
                <div className="cart__count">(0)</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
