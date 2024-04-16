import creatorPic from "../../resources/img/creators-main-pic.png";
import instLogo from "../../resources/img/social-icons/instagram-icon.svg";
import fbLogo from "../../resources/img/social-icons/facebook-icon.svg";

const AboutCreators = () => {
    return (
        <section className="about__creators">
            <div className="contaier">
                <div className="wrapper">
                    <div className="creators__wrapper">
                        <div className="creators__photo">
                            <img
                                className="creators__img"
                                src={creatorPic}
                                alt="founder of BOKO'"
                            />
                        </div>
                        <div className="creators__description">
                            <div className="creators__description-title title">
                                <p4 className="title__description">
                                    ірина полонець
                                </p4>
                                <span className="title__decoration">
                                    be unique. right now.
                                </span>
                            </div>
                            <div className="creators__description-post">
                                <p className="creators__description-text">
                                    Досвідчені б'ютіголіки нашої країни швидко
                                    оцінили приголомшливу якість засобів,
                                    лаконічний дизайн упаковки, та eco friendly
                                    підхід. Головний задум бренду — використання
                                    еко інгредієнтів для виробництва продуктів,
                                    збереження біорізноманіття планети та повна
                                    безпека для навколишнього середовища,
                                    переробка упаковок після використання
                                    засобів, а також відмова від тестування на
                                    тваринах.
                                </p>
                                <br />
                                <p className="creators__description-text">
                                    Компанія Sister’s Aroma пройшла процедуру
                                    отримання сертифікатів європейського зразка
                                    (ECOCERT/Cosmos) для кожного компоненту,
                                    який входить до складу продуктів. Кожен, хто
                                    користується продуктами Sister’s Aroma, може
                                    бути впевнений в абсолютній чистоті формул
                                    та науково-вивчених компонентах у складі.
                                </p>
                            </div>
                            <div className="creators__description-links">
                                <div className="creators__description-links-social">
                                    <a href="/#" className="creators__description-link">
                                        <img src={fbLogo} alt="facebook logo" />
                                        Irina polonetz
                                    </a>
                                    <a href="/#" className="creators__description-link">
                                        <img
                                            src={instLogo}
                                            alt="facebook logo"
                                        />
                                        irina__polonets_fun
                                    </a>
                                </div>
                                <div className="creators__description-links-btn">
                                    <button className="link__button">читати про boko'</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCreators;