import Banner from "../banner/Banner";

import aboutImg from "../../resources/img/about-us/about-us-creator.webp";
import aboutImgBottom from "../../resources/img/about-us/about-us-creator-bottom.webp";

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <Banner />
                <div className="wrapper">
                    <div className="about-us__information">
                        <div className="about-us__information-left">
                            <p className="description__text">
                                MustHave це український бренд заснований в 2010
                                році Анною Бец та Анастасією Дзюбою. Натхненний
                                ідеєю створення формату якісного локального
                                шопінгу, бренд став першим українським
                                масмаркетом. Від базового одягу до вишуканих
                                елементів, асортимент MustHave покликаний
                                задовольнити всі потреби сучасного жіночого
                                гардероба. Бренд має власну лінійку взуття та
                                аксесуарів та регулярно випускає
                                унісекс-колекціі. В реалізації дизайнів MustHave
                                використовуються високоякісні тканини і
                                матеріали, включаючи вовну, шкіру, сатин, льон і
                                кашемір.
                            </p>
                            <div className="about-us__description-img">
                                <img
                                    src={aboutImg}
                                    alt="the founder"
                                    className="information__picture"
                                />
                            </div>
                        </div>
                        <div className="about-us__information-right">
                            <p className="description__text">
                                Сьогодні MustHave має власне виробництво площею
                                1500м2, 13 магазинів у Києві, Львові, Вінниці та
                                Івано-Франківську, 180 талановитих спеціалістів
                                і тисячі лояльних клієнтів в Україні та світі.
                                Перегляньте сторінку з нашими магазинами, щоб
                                знайти найзручнішу локацію для вас. В реалізації
                                дизайнів MustHave використовуються високоякісні
                                тканини і матеріали, включаючи вовну, шкіру,
                                сатин, льон і кашемір. В реалізації дизайнів
                                MustHave використовуються високоякісні тканини і
                                матеріали, включаючи вовну, шкіру, сатин, льон і
                                кашемір.
                            </p>
                            <div className="about-us__information-img">
                                <img className="information__picture" />
                            </div>
                        </div>
                        <div className="about-us__information-left">
                            <p className="description__text">
                                "Раніше на ринку просто не було доступного одягу
                                made in UA і звички купувати своє. Коли виникла
                                ідея MustHave, нам було по 23 роки: самі
                                одягалися в мас-маркеті і часто натрапляли на
                                дисбаланс ціна-якість, брак моделей і низький
                                рівень сервісу", співзасновниці бренду Анна Бец
                                і Анастасія Дзюба. MustHave використовуються
                                високоякісні тканини і матеріали, включаючи
                                вовну, шкіру, сатин, льон і кашемір. В
                                реалізації дизайнів MustHave використовуються
                                високоякісні тканини і матеріали, включаючи
                                вовну, шкіру, сатин, льон і кашемір.
                            </p>
                            <div className="about-us__infromation-img">
                                <img
                                    src={aboutImgBottom}
                                    alt="the founder"
                                    className="information__picture"
                                />
                            </div>
                        </div>
                        <div className="accordion__items">
                            <div className="section__header">
                                <h3 className="section__header-title">
                                    поширені запитання
                                </h3>
                                <p className="section__header-text">
                                    you are our inspiration
                                </p>
                            </div>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Де можна приміряти товар?
                                </summary>
                                <p className="accordion__body">
                                    Our winery produces craft wine. Bulk orders
                                    are possible, but lots cannot be large.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Як можна повернути річ, якщо не підійшов
                                    розмір?
                                </summary>
                                <p className="accordion__body">
                                    Yes, we ship your orders to any state and
                                    city in the United States, as well as
                                    abroad.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Чи є міжнародна доставка?
                                </summary>
                                <p className="accordion__body">
                                    Our winery offers wine-lovers more than 10
                                    different varieties of wines with different
                                    aging periods.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Чи можу я забронювати одяг?
                                </summary>
                                <p className="accordion__body">
                                    Yes. Our winery experts will tell you more
                                    about the varieties and help you choose the
                                    best option for you.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Речі такі ж як на фото?
                                </summary>
                                <p className="accordion__body">
                                    We are located in the Napa Valley, America's
                                    most famous wine region.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Як обрати потрібний розмір?
                                </summary>
                                <p className="accordion__body">
                                    We are located in the Napa Valley, America's
                                    most famous wine region.
                                </p>
                            </details>
                            <details className="accordion__item">
                                <summary className="accordion__title">
                                    Чи використовуємо ми натуральну шкіру?
                                </summary>
                                <p className="accordion__body">
                                    We are located in the Napa Valley, America's
                                    most famous wine region.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
