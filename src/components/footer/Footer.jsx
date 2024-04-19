import logoFooterB from "../../resources/img/footer-logo-black.svg";
import phone from "../../resources/img/phone.svg";
import mail from "../../resources/img/mail.svg";
import mapPoint from "../../resources/img/map-point.svg";
import applePay from "../../resources/img/payment-methods/apple-pay.svg";
import paypal from "../../resources/img/payment-methods/paypal.svg";
import visa from "../../resources/img/payment-methods/visa.svg";
import mastercard from "../../resources/img/payment-methods/mastercard.svg";
import instagramIcon from "../../resources/img/social-icons/instagram-icon.svg";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src={logoFooterB} alt="BOKO logo black" />
                        <div className="footer__social">
                            <div>
                                <a href="https://www.instagram.com/boko_kyiv/">
                                    <img
                                        src={instagramIcon}
                                        alt="instagram logo"
                                    />
                                    <span>@boko_kyiv</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="footer__catalouge">
                        <div className="footer__nav-header">
                            <h5 className="footer__nav-title">каталог</h5>
                        </div>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-list-item">
                                <a href="/#">spring’ 24</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">sale</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">boko’ people</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">sheakers & shoes</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">eternal elegance</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">bags</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">xmas collection</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__nav-information">
                        <h5 className="footer__nav-title">інформація</h5>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-list-item">
                                <a href="/#">про нас</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">поширені запитання</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">оплата і доставка</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">повернення та обмін</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a href="/#">наші вакансії</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <ul className="footer__contacts-details">
                            <h5 className="footer__contacts-title">контакти</h5>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={phone} alt="phone" />
                                    <span>+38 063 290 6365</span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={phone} alt="phone" />
                                    <span>+38 063 290 6365</span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={mail} alt="mailbox" />
                                    <span>boko.kyiv@boko.com</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__contacts-address">
                            <h5 className="footer__contacts-title">магазини</h5>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={mapPoint} alt="map point" />
                                    <span>
                                        <p>київ</p>
                                        <p>ТРЦ «respublika Park»</p>
                                    </span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={mapPoint} alt="map point" />
                                    <span className="footer__contracts-description">
                                        <p className="footer__contracts-text">
                                            київ
                                        </p>
                                        <p className="footer__contracts-text">
                                            трц «dream yellow»
                                        </p>
                                    </span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a className="footer__contacts-link" href="/#">
                                    <img src={mapPoint} alt="map point" />
                                    <span>
                                        <p>житомир</p>
                                        <p>вул. велика васильківська, 12</p>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__payment-methods">
                    <ul className="footer__payment-methods_list">
                        <li>
                            <a href="/#">
                                <img src={applePay} alt="pay via apple Pay" />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <img src={paypal} alt="pay via paypal" />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <img src={visa} alt="pay via visa" />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <img
                                    src={mastercard}
                                    alt="pay via mastercard"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-text">&copy; 2024 BOKO' KYIV</p>
            </div>
        </footer>
    );
};

export default Footer;
