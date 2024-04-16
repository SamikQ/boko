import logoB from "../../resources/img/footer-logo-black.svg";
import map from "../../resources/img/map-points/river-mall.svg";

const ShopLocations = () => {
    return (
        <section className="shop__locations">
            <div className="container">
                <div className="wrapper">
                    <div className="shop__locations-header">
                        <h3 className="shop__locations-header__title">
                            наші магазини
                        </h3>
                    </div>
                    <div className="shop__locations-details">
                        <div className="shop__locations-addresses">
                            <ul className="shop__locations-list">
                                <li className="shop__locations-list-item">
                                    <img
                                        src={logoB}
                                        alt="BOKO' lobo black"
                                        className="shop__locations-list-logo"
                                    />
                                    <div className="shop__locations-item">
                                        <div className="shop__locations-details-city">
                                            <p>Київ</p>
                                        </div>
                                        <div className="shop__locations-details-address">
                                            <p>
                                                Дніпровська набережна,12 ТРЦ
                                                River Mall, поверх 2
                                            </p>
                                        </div>
                                        <div className="shop__locations-details-phone">
                                            <p>+38 050 218 14 12</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="shop__locations-list-item">
                                    <img
                                        src={logoB}
                                        alt="BOKO' lobo black"
                                        className="shop__locations-list-logo"
                                    />
                                    <div className="shop__locations-item">
                                        <div className="shop__locations-details-city">
                                            <p>Київ</p>
                                        </div>
                                        <div className="shop__locations-details-address">
                                            <p>
                                                Дніпровська набережна,12 ТРЦ
                                                River Mall, поверх 2
                                            </p>
                                        </div>
                                        <div className="shop__locations-details-phone">
                                            <p>+38 050 218 14 12</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="shop__locations-list-item">
                                    <img
                                        src={logoB}
                                        alt="BOKO' lobo black"
                                        className="shop__locations-list-logo"
                                    />
                                    <div className="shop__locations-item">
                                        <div className="shop__locations-details-city">
                                            <p>Одеса</p>
                                        </div>
                                        <div className="shop__locations-details-address">
                                            <p>
                                                Південна дорога, 101а, ТРЦ
                                                Riviera
                                            </p>
                                        </div>
                                        <div className="shop__locations-details-phone">
                                            <p>+38 093 836 30 49</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="shop__locations-map">
                            <img
                                src={map}
                                alt="point on the map"
                                className="shop__locations-map-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopLocations;
