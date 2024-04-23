const ContactUs = () => {
    return (
        <section className="contact-us-page">
            <div className="container">
                <div className="wrapper">
                    <div className="contact-us">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                поділіться з нами
                            </h3>
                            <p className="section__header-text">
                                you are our inspiration
                            </p>
                        </div>
                        <div className="contact-us__body">
                            <div className="contact-us__info">
                                <div className="contact-us__about">
                                    <h5 className="contact-us__about-title">
                                        Загальна контактна інформація
                                    </h5>
                                    <ul className="contact-us__about-list">
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
                                                Телефон:
                                            </p>
                                            <p className="contact-us__about-text">
                                                +38 (044) 355-55-00
                                            </p>
                                        </li>
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
                                                Графік роботи:
                                            </p>
                                            <p className="contact-us__about-text">
                                                ПН-НД: 09:00 - 20:00
                                            </p>
                                        </li>
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
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
                                        Контактна інформація відділів компанії
                                    </h5>
                                    <ul className="contact-us__about-list">
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
                                                PR-співпраця:
                                            </p>
                                            <p className="contact-us__about-text">
                                                pr@boko.com
                                            </p>
                                        </li>
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
                                                Оптова співпраця:
                                            </p>
                                            <p className="contact-us__about-text">
                                                sale@boko.com
                                            </p>
                                        </li>
                                        <li className="contact-us__about-item">
                                            <p className="contact-us__about-text">
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
                                            <p className="contact-us__about-text">
                                                HR менеджер:
                                            </p>
                                            <p className="contact-us__about-text">
                                                customerservice@boko.com
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-us__feedback">
                                <div className="feeback__title">
                                    <h4 className="feedback__title-text">
                                        Зворотній зв’язок
                                    </h4>
                                </div>
                                <div className="feedback__details">
                                    <div className="feedback__details-sub">
                                        <h5 class="feedback-details-subhead">
                                            Ім'я
                                        </h5>
                                        <input
                                            type="text"
                                            placeholder="ваше ім'я"
                                        />
                                    </div>
                                    <div className="feedback__details-sub">
                                        <h5 class="feedback-details-subhead">
                                            Номер телефону*
                                        </h5>
                                        <input
                                            type="text"
                                            placeholder="вкажіть ваш номер телефону"
                                        />
                                    </div>
                                    <div className="feedback__details-sub">
                                        <h5 class="feedback-details-subhead">
                                            E-mail
                                        </h5>
                                        <input
                                            type="text"
                                            placeholder="введіть вашу E-mail"
                                        />
                                    </div>
                                </div>
                                <div className="feedback__submit">
                                    <div className="feedback__submit-btn btn">
                                        Надіслати відгук
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
