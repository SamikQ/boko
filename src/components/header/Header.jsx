import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import logoHeaderB from "../../resources/img/header-logo-black.svg";
import search from "../../resources/img/client-icons/search.svg";
import phone from "../../resources/img/client-icons/phone.svg";
import heart from "../../resources/img/client-icons/heart.svg";
import user from "../../resources/img/client-icons/user.svg";
import cart from "../../resources/img/client-icons/cart.svg";

const links = [
    { title: "каталог", link: "/catalogue" },
    { title: "Françaises Vacances", link: "/catalogue" },
    { title: "про нас", link: "/about-us" },
    { title: "контакти", link: "/contacts" },
    { title: "sale", link: "/temp" },
    { title: "Look of the Day", link: "/day-look" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handlerMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    useCallback = () => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    };

    const content = (props) => {
        return props.map(({ title, link, index }) => {
            return (
                <li className="header__nav-item" key={index}>
                    <Link
                        to={link}
                        className={
                            title === "sale"
                                ? "header__nav-link sale"
                                : "header__nav-link"
                        }>
                        {title}
                    </Link>
                </li>
            );
        });
    };

    const navMenu = () => {
        return (
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
        );
    };

    const listLinks = content(links);
    const burgerMenu = navMenu();

    if (screenWidth < 1024) {
        return (
            <header
                className={
                    isOpen ? "header__container lock" : "header__container"
                }>
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img
                            src={logoHeaderB}
                            alt="Логотип одягу BOKO"
                            className="header__logo-img"
                        />
                    </Link>
                    {burgerMenu}
                    <div className="header__content-acc acc">
                        <a href="/#" aria-label="search">
                            <img src={search} alt="search button" />
                        </a>
                        <a href="/#" className="acc__item hidden">
                            <img src={phone} alt="phone button" />
                        </a>
                        <a
                            href="/#"
                            className="acc__item hidden"
                            aria-label="like">
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
        body {
          overflow: ${
              isOpen ? "hidden" : "auto"
          }; /* Управління overflow body */}
        }
      `}</style>
            </header>
        );
    } else {
        return (
            <header className="header__container">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img
                            src={logoHeaderB}
                            alt="Логотип одягу BOKO"
                            className="header__logo-img"
                        />
                    </Link>
                    <nav className="header__content-menu">{listLinks}</nav>
                    <div className="header__content-acc acc">
                        <a href="/#" aria-label="search">
                            <img src={search} alt="search button" />
                        </a>
                        <a href="/#" className="acc__item hidden">
                            <img src={phone} alt="phone button" />
                        </a>
                        <a
                            href="/#"
                            className="acc__item hidden"
                            aria-label="like">
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
            </header>
        );
    }
};

export default Header;
