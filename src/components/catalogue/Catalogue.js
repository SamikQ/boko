import bg from "../../resources/img/backgrounds/categories/bg-elegance.webp";

import filterBtn from "../../resources/img/client-icons/filter.svg";
import resetBtn from "../../resources/img/client-icons/reset-btn.svg";
import Banner from "../banner/Banner";
import ProductList from "../product-list/ProductList";

const page = {
    title: "Eternal Elegance",
    description: `Вишукані образи створені спираючись на елегантність та
    класику. Основні принципи включають в себе справжні
    використані справжні натуральні гарні тканини з вмістом
    шерсті та якісну фурнітуру на основі латуні .`,
    bg: bg,
    bgAlt: "eternal elegance background",
};

const Catalogue = () => {
    return (
        <section className="catalogue-page">
            <Banner page={page} />
            <div className="container">
                <div className="wrapper">
                    <div className="catalogue__filter">
                        <a href="/#" className="btn__filter">
                            <button className="btn__filter-title">
                                <img src={filterBtn} alt="filter button" />
                            </button>
                            <p className="filter__title-text">Filters</p>
                        </a>
                        <div className="filters__list">
                            <div className="filters-list-item">
                                <img src={resetBtn} alt="reset button" />
                                <p>Матеріал: Екошкіра, Костюмна тканина</p>
                            </div>
                            <div className="filters-list-item">
                                <img src={resetBtn} alt="reset button" />
                                <p>Розмір: 32,33</p>
                            </div>
                        </div>
                        {/* <div className="filter__toggle">
                            <p>Показувати:</p>
                            <p>4 товари</p>
                            <p>2 товари</p>
                        </div> */}
                    </div>
                    <ProductList />
                </div>
            </div>
        </section>
    );
};

export default Catalogue;
