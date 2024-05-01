import Banner from "../banner/Banner";

import bg from "../../resources/img/backgrounds/banners/bg-day-look.webp";
import saturdayTitle from "../../resources/img/new-arrivals/picture2.png";
import item from "../../resources/img/new-arrivals/picture3.png";

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
                            <button className="btn looks-item-btn">
                                Дивитись товар
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeekLooks;
