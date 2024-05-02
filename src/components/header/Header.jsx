import { useState } from "react";

import logoHeaderB from "../../resources/img/header-logo-black.svg";
import search from "../../resources/img/client-icons/search.svg";
import phone from "../../resources/img/client-icons/phone.svg";
import heart from "../../resources/img/client-icons/heart.svg";
import user from "../../resources/img/client-icons/user.svg";
import cart from "../../resources/img/client-icons/cart.svg";

const links = [
    "каталог",
    "Françaises Vacances",
    "про нас",
    "контакти",
    "sale",
    "Look of the Day",
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const content = (props) => {
        return props.map((item, index) => {
            return (
                <li className="header__nav-item" key={index}>
                    <a
                        href=" "
                        className={
                            item === "sale"
                                ? "header__nav-link sale"
                                : "header__nav-link"
                        }>
                        {item}
                    </a>
                </li>
            );
        });
    };

    const listLinks = content(links);

    return (
        <header
            className={isOpen ? "header__container lock" : "header__container"}>
            <div className="header__wrapper">
                <a href="localhost:3000" className="header__logo">
                    <img
                        src={logoHeaderB}
                        alt="Логотип одягу BOKO"
                        className="header__logo-img"
                    />
                </a>
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <div
                            className={
                                isOpen
                                    ? "navigation-burger active"
                                    : "navigation-burger"
                            }
                            onClick={() => handlerMenu()}>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className={
                            isOpen
                                ? "header__nav-wrapper active"
                                : "header__nav-wrapper"
                        }>
                        <div className="header__content-menu">{listLinks}</div>
                    </div>
                </nav>
                <div className="header__content-acc acc">
                    <a href="/#" aria-label="search">
                        <img src={search} alt="search button" />
                    </a>
                    <a href="/#" className="acc__item hidden">
                        <img src={phone} alt="phone button" />
                    </a>
                    <a href="/#" className="acc__item hidden" aria-label="like">
                        <img src={heart} alt="like button" />
                    </a>
                    <a href="/#">
                        <img src={user} alt="account button" />
                    </a>
                    <a
                        href="/#"
                        className="header__content-cart"
                        aria-label="shopping cart">
                        <img
                            src={cart}
                            alt="shopping cart button"
                            className="content-cart-img"
                        />
                        <span className="cart__count">(0)</span>
                    </a>
                </div>
            </div>
            <style jsx>{`
        .modal {
          /* Стилі модального вікна */
        }
        body {
          overflow: ${
              isOpen ? "hidden" : "auto"
          }; /* Управління overflow body */}
        }
      `}</style>
        </header>
    );
};

export default Header;
