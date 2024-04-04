import logoB from "../../resources/img/boko-logo-b.png";
import search from "../../resources/img/search.svg";
import user from "../../resources/img/user.svg";
import phone from "../../resources/img/phone.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <a href="localhost:3000" className="header__logo">
            <img src={logoB} alt="header logo BOKO" />
          </a>
          <nav className="header__content-menu">
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              каталог
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              Новинки!
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              Sale
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              Хіти продажу
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              FAQ
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              Про нас
            </a>
            <a
              href="localhost:3000/#"
              className="header__content-menu-link link"
            >
              Співпраця
            </a>
          </nav>
          <div className="header__content-acc acc">
            <a href="localhost:3000" className="acc__item">
              <img src={phone} alt="phone button" />
            </a>
            <a className="acc__item">
              <img src={search} alt="search button" />
            </a>
            <a className="acc__item">
              <img src={user} alt="account button" />
            </a>
          </div>
          <div className="header__content-cart">
            <svg
              className="cart__pic"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M17.4434 5.34005H13.8006V3.82116C13.8006 2.25945 12.4851 1 10.8661 1H8.08333C6.46429 1 5.14881 2.25945 5.14881 3.82116V5.34005H1.50595C1.20238 5.34005 1 5.54156 1 5.84383V16.1788C1 17.7406 2.31548 19 3.93452 19H15.0655C16.6845 19 18 17.7406 18 16.1788V5.84383C17.9494 5.59194 17.747 5.34005 17.4434 5.34005ZM6.2619 3.82116C6.2619 2.8136 7.07143 2.00756 8.13393 2.00756H10.9167C11.9792 2.00756 12.8393 2.8136 12.8393 3.82116V5.34005H6.2619V3.82116ZM16.9375 16.1788C16.9375 17.1864 16.0774 17.9924 15.0149 17.9924H3.93452C2.87202 17.9924 2.0119 17.1864 2.0119 16.1788V6.34761H16.9375V16.1788Z"
                fill="black"
                stroke="black"
                strokeWidth="0.4"
                width="50px"
              ></path>
            </svg>
            <span className="cart__count">(0)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
