import jackets from "../../resources/img/mega-menu/title-imgs/mega-menu-title-jacket.jpg";
import dresses from "../../resources/img/mega-menu/title-imgs/mega-menu-title-dress.webp";
import bags from "../../resources/img/mega-menu/title-imgs/mega-menu-title-bags.webp";
import shoes from "../../resources/img/mega-menu/title-imgs/mega-menu-title-shoes.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MegaMenu = () => {
    const isOpen = useSelector((state) => state.megaMenuSlice.megaMenuVisible);

    return (
        <section
            className={
                isOpen
                    ? "mega-menu__navigation active"
                    : "mega-menu__navigation"
            }
            title="mega-menu navigation">
            <div className="container">
                <div className={isOpen ? "mega-menu active" : "mega-menu"}>
                    <aside className="mega-menu__sidebar">
                        <ul className="mega-menu__sidebar-list">
                            <li className="sidebar-list-item">
                                <a href="/#">футболки та топи</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">жакети та костюми</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">спідниці</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">сорочки та блузи</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">шорти</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">спортивний одяг</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">eternal elegance</a>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="/#">xmas collection</a>
                            </li>
                            <li>
                                <Link
                                    className="btn__mega-menu"
                                    to="/catalogue">
                                    <button className="btn btn__mega-menu">
                                        Переглянути всі
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <nav className="mega-menu__nav">
                        <img
                            src={jackets}
                            alt="jackets"
                            className="mega-menu__nav-img"
                        />
                        <h4 className="mega-menu__nav-title">костюми</h4>
                        <ul className="mega-menu__nav-list nav__list">
                            <li className="nav__list-item">
                                <a href="/#">З спідницею</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">З брюками до коліна</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">З довигими брюками</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">З шортами</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="mega-menu__nav">
                        <img
                            src={dresses}
                            alt="dresses"
                            className="mega-menu__nav-img"
                        />
                        <h4 className="mega-menu__nav-title">сукні</h4>
                        <ul className="mega-menu__nav-list nav__list">
                            <li className="nav__list-item">
                                <a href="/#">Міні сукні</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Міді сукні</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Максі сукні</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Літні сукні</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Сукні з корсетом</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="mega-menu__nav">
                        <img
                            src={bags}
                            alt="bags"
                            className="mega-menu__nav-img"
                        />
                        <h4 className="mega-menu__nav-title">сумки</h4>
                        <ul className="mega-menu__nav-list nav__list">
                            <li className="nav__list-item">
                                <a href="/#">Великі сумки</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Міді сумки</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Клатчі</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Малесенькі сумки</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="mega-menu__nav">
                        <img
                            src={shoes}
                            alt="shoes"
                            className="mega-menu__nav-img"
                        />
                        <h4 className="mega-menu__nav-title">взуття</h4>
                        <ul className="mega-menu__nav-list nav__list">
                            <li className="nav__list-item">
                                <a href="/#">Туфлі</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Черевики</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Лофери</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Весняне взуття</a>
                            </li>
                            <li className="nav__list-item">
                                <a href="/#">Осіннє взуття</a>
                            </li>
                        </ul>
                    </nav>
                    <aside className="sidebar__collections">
                        <picture className="sidebar__collection-item">
                            <figure className="sidebar__collection-img">
                                <img src={jackets} alt="" />
                                <figcaption>eternal elegance</figcaption>
                            </figure>
                        </picture>
                        <picture className="sidebar__collection-item">
                            <figure className="sidebar__collection-img">
                                <img src={dresses} alt="" />
                                <figcaption>boko' business</figcaption>
                            </figure>
                        </picture>
                    </aside>
                </div>
            </div>
            {isOpen ? (
                <style jsx>{`
                    body {
                        overflow: hidden;
                    }
                `}</style>
            ) : null}
        </section>
    );
};

export default MegaMenu;
