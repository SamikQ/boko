import captcha from "../../resources/img/temp/reCaptcha.png";
import ShopLocations from "../shop-locations/ShopLocations";

const ContactUs = () => {
    return (
        <>
            <section className="contact-us-page">
                <div className="container">
                    <div className="wrapper">
                        <div className="contact-us">
                            <div className="contact-us__body">
                                <div className="contact-us__info">
                                    <div className="contact-us__about">
                                        <h5 className="contact-us__about-title">
                                            Загальна контактна інформація
                                        </h5>
                                        <ul className="contact-us__about-list">
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    Телефон:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    +38 (044) 355-55-00
                                                </p>
                                            </li>
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    Графік роботи:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    ПН-НД: 09:00 - 20:00
                                                </p>
                                            </li>
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    E-mail:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    support@boko.com
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-us__about">
                                        <h5 className="contact-us__about-title">
                                            Контактна інформація відділів
                                            компанії
                                        </h5>
                                        <ul className="contact-us__about-list">
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    PR-співпраця:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    pr@boko.com
                                                </p>
                                            </li>
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    Оптова співпраця:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    sale@boko.com
                                                </p>
                                            </li>
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    HR менеджер:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    job@boko.com
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-us__about">
                                        <h5 className="contact-us__about-title">
                                            Керівник департаменту по роботі з
                                            клієнтами
                                        </h5>
                                        <ul className="contact-us__about-list">
                                            <li className="contact-us__about-item">
                                                <p className="contact-us__about-text sub-title">
                                                    HR менеджер:
                                                </p>
                                                <p className="contact-us__about-text">
                                                    customerservice@boko.com
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <form className="contact-us__feedback">
                                    <legend className="feedback__title-text">
                                        Зворотній зв’язок
                                    </legend>
                                    <div className="feedback__details">
                                        <div className="feedback__details-sub">
                                            <label
                                                htmlFor="name"
                                                className="feedback-details-subhead">
                                                Ім'я*
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="ваше ім'я"
                                                id="name"
                                                name="name"
                                                autoComplete="name"
                                            />
                                        </div>
                                        <div
                                            autoComplete="on"
                                            className="feedback__details-sub">
                                            <label
                                                htmlFor="phone"
                                                className="feedback-details-subhead">
                                                Номер телефону*
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="вкажіть ваш номер телефону"
                                                id="phone"
                                                autoComplete="phone"
                                            />
                                        </div>
                                        <div
                                            autoComplete="on"
                                            className="feedback__details-sub">
                                            <label
                                                htmlFor="email"
                                                className="feedback-details-subhead">
                                                E-mail
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="введіть вашу E-mail"
                                                id="email"
                                                autoComplete="email"
                                            />
                                        </div>
                                        <div
                                            autoComplete="on"
                                            className="feedback__details-sub">
                                            <label
                                                htmlFor="email"
                                                className="feedback-details-subhead">
                                                Ваш коментар
                                            </label>
                                            <textarea
                                                className="feedback__details-sub__comment"
                                                type="text"
                                                placeholder="Введіть ваш коментар"
                                                id="comment"
                                            />
                                        </div>
                                        <img
                                            src={captcha}
                                            alt="temp captcha"
                                            className="captcha"
                                        />
                                    </div>
                                    <div className="feedback__submit">
                                        <button
                                            type="submit"
                                            className="feedback__submit-btn btn btn-black">
                                            Надіслати
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ShopLocations />
        </>
    );
};

export default ContactUs;
