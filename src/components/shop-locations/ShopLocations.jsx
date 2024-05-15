import logoB from "../../resources/img/footer-logo-black.svg";
import map from "../../resources/img/map-points/river-mall.svg";

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
                                title="shop location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.5867358621335!2d30.445716771745275!3d50.374260010002516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9ecf5cb01e7%3A0x1467f6e7ea63132e!2z0KLQoNCmIFJlc3B1Ymxpa2EgUGFyaw!5e0!3m2!1suk!2sua!4v1715804277212!5m2!1suk!2sua"
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
