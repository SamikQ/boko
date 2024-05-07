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
                        <div className="shop__locations-addresses">
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
                                                Кільцева дорога, 1
                                                ТРЦ «Respublika Park», 
                                            </p>
                                        </div>
                                        <div className="shop__locations-phone">
                                            <p>+38 050 218 14 12</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="shop__locations-map">
                            <img
                                src={map}
                                alt="point on the map"
                                className="shop__map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopLocations;
