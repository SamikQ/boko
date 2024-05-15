import logoB from "../../resources/img/footer-logo-black.svg";

const ShopLocations = () => {
    return (
        <section className="shop__locations">
            <div className="container">
                <div className="wrapper">
                    <div className="shop__locations-header">
                        <h3 className="shop__locations-title">Наша адреса</h3>
                    </div>
                    <div className="shop__locations-details">
                        <ul className="shop__locations-list">
                            <li className="shop__locations-li selected__address">
                                <img
                                    src={logoB}
                                    alt="BOKO' lobo black"
                                    className="shop__locations-list-logo"
                                />
                                <div className="shop__locations-item">
                                    <div className="shop__locations-city">
                                        <p>Київ</p>
                                    </div>
                                    <div className="shop__locations-address">
                                        <p className="address__text">
                                            Кільцева дорога, 1 ТРЦ «Respublika
                                            Park»,
                                        </p>
                                    </div>
                                    <div className="shop__locations-phone">
                                        <p>+38 050 218 14 12</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="shop__locations-map">
                            <iframe
                                title="shop location point"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2544.701439031869!2d30.44164437693316!3d50.372121393000086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDIyJzE5LjYiTiAzMMKwMjYnMzkuMiJF!5e0!3m2!1suk!2sua!4v1715805933556!5m2!1suk!2sua"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopLocations;
