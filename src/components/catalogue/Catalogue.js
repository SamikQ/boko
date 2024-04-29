const Catalogue = () => {
    return (
        <section className="catalogue-page">
            <div className="banner">
                <div className="banner__description">
                    <div className="banner__page-nav">
                        Home / Collections / Eternal Elegance
                    </div>
                    <h2 className="banner__title">Eternal Elegance</h2>
                    <p className="banner__description-text">
                        Вишукані образи створені спираючись на елегантність та
                        класику. Основні принципи включають в себе справжні
                        використані справжні натуральні гарні тканини з вмістом
                        шерсті та якісну фурнітуру на основі латуні .
                    </p>
                </div>
            </div>
            <div className="catalogue">
                <div className="catalogue__settings">
                    <div className="settings__filter">
                        <div className="filter-btn">
                            <a href="/#" className="filter__ref">
                                <img src="" alt="filter button" />
                                <p className="filter__title">Filters</p>
                            </a>
                        </div>
                        <div className="filters__list">
                            <div className="filters-list-item">
                                <img src="" alt="" />
                                <p>Матеріал: Екошкіра, Костюмна тканина</p>
                            </div>
                            <div className="filters-list-item">
                                <img src="" alt="" />
                                <p>Розмір: 32,33</p>
                            </div>
                        </div>
                        <div className="filter__toggle">
                            <p>Показувати:</p>
                            <p>4 товари</p>
                            <p>2 товари</p>
                        </div>
                    </div>
                </div>
                <div className="catalogue-list"></div>
            </div>
        </section>
    );
};

export default Catalogue;
