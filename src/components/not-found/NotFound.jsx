import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="error__component">
            <div className="not-found">
                <div className="not-found__title">
                    <h2 className="not-found__title-text">404</h2>
                </div>
                <p className="not-found__menu-text">
                    Ой, леле, ти либонь заблукала - такої сторінки немає на
                    нашому сайті. Давай спробуємо знову.
                </p>
                <div className="not-found__menu-btns">
                    <Link className="home__button btn btn-black" to={"/"}>
                        Домашня сторінка
                    </Link>
                    <button className="all-products__button btn">
                        Усі продукти
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
