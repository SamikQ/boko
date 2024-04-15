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
                                    <img src={instagramIcon} alt="instagram logo" />
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
                                <a>spring’ 24</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>sale</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>boko’ people</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>sheakers & shoes</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>eternal elegance</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>bags</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>xmas collection</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__nav-information">
                        <h5 className="footer__nav-title">інформація</h5>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-list-item">
                                <a>про нас</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>поширені запитання</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>оплата і доставка</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>повернення та обмін</a>
                            </li>
                            <li className="footer__nav-list-item">
                                <a>наші вакансії</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <ul className="footer__contacts-details">
                            <h5 className="footer__contacts-title">контакти</h5>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={phone} />
                                    <span>+38 063 290 6365</span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={phone} />
                                    <span>+38 063 290 6365</span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={mail} />
                                    <span>boko.kyiv@boko.com</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__contacts-address">
                            <h5 className="footer__contacts-title">магазини</h5>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={mapPoint} />
                                    <span>
                                        <p>київ</p>
                                        <p>ТРЦ «respublika Park»</p>
                                    </span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={mapPoint} />
                                    <span>
                                        <p>київ</p>
                                        <p>трц «dream yellow»</p>
                                    </span>
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                                <a>
                                    <img src={mapPoint} />
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
                            <a>
                                <img src={applePay} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={paypal} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={visa} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={mastercard} />
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
