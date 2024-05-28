import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cart from "../cart/Cart";

import logoHeaderB from "../../resources/img/header-logo-black.svg";
import search from "../../resources/img/client-icons/search.svg";
import phone from "../../resources/img/client-icons/phone.svg";
import heart from "../../resources/img/client-icons/heart.svg";
import user from "../../resources/img/client-icons/user.svg";
import MegaMenu from "../mega-menu/MegaMenu";
import CartButton from "../cart/CartButton";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handlerMenu = () => {
        setIsOpen(!isOpen);
    };

    const handlerMegaMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            <header>
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img
                            src={logoHeaderB}
                            alt="Логотип одягу BOKO"
                            className="header__logo-img"
                        />
                    </Link>
                    {burgerMenu}
                    <Cart />
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
                        <CartButton />
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
                    <nav className="header__content-menu">
                        <li className="header__nav-item">
                            <button
                                onClick={() => handlerMegaMenu()}
                                className="header__nav-link">
                                Каталог
                            </button>
                        </li>
                        {listLinks}
                    </nav>
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
                        <CartButton />
                    </div>
                    <Cart />
                    {isMenuOpen ? <MegaMenu /> : null}
                </div>
                <style jsx>{`
        body {
          overflow: ${isOpen ? "hidden" : "auto"}; }
        }
      `}</style>
            </header>
        );
    }
};

export default Header;
