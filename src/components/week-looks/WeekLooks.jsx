import Banner from "../banner/Banner";

import bg from "../../resources/img/backgrounds/banners/bg-day-look.webp";
import saturdayTitle from "../../resources/img/new-arrivals/picture2.png";
import item from "../../resources/img/new-arrivals/picture3.png";
import cart from "../../resources/img/client-icons/cart.svg";

const page = {
    title: "BOKOʼ LOOK OF THE DAY",
    description: `Підбірка образів BOKO на кожен день тижня від дизайнера BOKO’ KYIV  Катерини Осадчої`,
    bg: bg,
    bgAlt: "boko founder",
};

const WeekLooks = () => {
    return (
        <section className="week-looks-page">
            <div className="container">
                <Banner page={page} />
                <div className="wrapper">
                    <div className="week-looks__slider">
                        <h4 className="week-looks__slider-title">
                            BOKO’ Look Of The Day: Saturday
                        </h4>
                        <div className="week-looks__slider-img">
                            <img src={saturdayTitle} alt="saturday look" />
                        </div>
                        <div className="week-looks__slider-li">
                            <article className="week-looks__slider-item">
                                <img src={item} alt="skirt" />
                                <div className="week-looks__slider-item__description">
                                    <h5 className="week-looks__slider-item__title">
                                        Спідниця-шорти молочного кольору з
                                        мереживом
                                    </h5>
                                    <p className="week-looks__slider-item__text">
                                        Спідниця-шорти виготовлена ​​з невагомої
                                        та повітряної бавовняної тканини. Нижній
                                        контур декоровано елегантним мереживом в
                                        тон спідниці. Талію доповнює резинка,
                                        для комфортнішої посадки по фігурі.
                                    </p>
                                </div>
                            </article>
                            <button className="btn looks-item-btn look-cart-btn">
                                Дивитись товар
                                <img src={cart} alt="cart icon" />
                            </button>
                        </div>
                        <div className="week-looks__slider-li">
                            <article className="week-looks__slider-item">
                                <img src={item} alt="skirt" />
                                <div className="week-looks__slider-item__description">
                                    <h5 className="week-looks__slider-item__title">
                                        Футболка варена світло-сірого кольору з
                                        принтом Take the risk
                                    </h5>
                                    <p className="week-looks__slider-item__text">
                                        Футболка виготовлена з високоякісної
                                        100% бавовняної тканини. Вільний
                                        трендовий крій, спущена лінія плеча та
                                        подовжений рукав поєднують в собі стиль
                                        та комфорт.
                                    </p>
                                </div>
                            </article>
                            <button className="btn looks-item-btn look-cart-btn">
                                Дивитись товар
                                <img src={cart} alt="cart icon" />
                            </button>
                        </div>
                        <div className="week-looks__slider-li">
                            <article className="week-looks__slider-item">
                                <img src={item} alt="skirt" />
                                <div className="week-looks__slider-item__description">
                                    <h5 className="week-looks__slider-item__title">
                                        Черевики високі чорного кольору на
                                        грубій зимовій підошві
                                    </h5>
                                    <p className="week-looks__slider-item__text">
                                        Виготовляються з натуральної шкіри,
                                        внутрішній підклад - натуральне хутро.
                                        Фіксуються шнурками. Декорована
                                        унікальним принтом червоного
                                        контрастного кольору "Take the risk".
                                    </p>
                                </div>
                            </article>
                            <button className="btn looks-item-btn look-cart-btn">
                                Дивитись товар
                                <img src={cart} alt="cart icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeekLooks;
