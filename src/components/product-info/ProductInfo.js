import decor from "../../resources/img/decor/decor-golden-round.png";
import heart from "../../resources/img/client-icons/heart.svg";
import info from "../../resources/img/client-icons/information.svg";
import Slider from "../slider/Slider";
import sizeTable from "../../resources/img/size-table.webp";

import temp from "../../resources/img/temp/boundary-product.png";

const ProductInfo = () => {
    return (
        <section className="product__page" title="інформація по продукту">
            <div className="navigation-list">
                <div>
                    <img src={decor} alt="decorated golden round" />
                </div>
                <span>
                    Home / Колекції / Eternal Elegance / Світшот з блискавкою
                </span>
            </div>
            <div className="product__slider">
                <img src={temp} alt="will be removed" />
            </div>
            <div className="product__information">
                <h3 className="product__information-title">
                    Костюм базовий двійка з жакетом та довгими брюками
                </h3>
                <div className="product__information-price">
                    <span>1 420₴</span>
                    <img src={heart} alt="heart icon" />
                    <div className="product__information-delivery">
                        <span>Можливість міжнародної доставки</span>
                    </div>
                </div>
                <div className="product__information-size">
                    <div className="product__information-size-title">
                        <p>
                            Розмір: <span>M</span>
                        </p>
                        <a href="/#">
                            <img src={info} alt="information icon" /> Розмірна
                            сітка
                        </a>
                    </div>
                    <div className="product__information-size__selector">
                        <ul className="size__selector-list">
                            <li className="size__selector">
                                <p className="size__selector-text">XS</p>
                            </li>
                        </ul>
                        <ul className="size__selector-list">
                            <li className="size__selector">
                                <p className="size__selector-text">S</p>
                            </li>
                        </ul>
                        <ul className="size__selector-list">
                            <li className="size__selector selected">
                                <span className="size__selector-text selected__size">
                                    M
                                </span>
                            </li>
                        </ul>
                        <ul className="size__selector-list">
                            <li className="size__selector">
                                <p className="size__selector-text">L</p>
                            </li>
                        </ul>
                        <ul className="size__selector-list">
                            <li className="size__selector">
                                <p className="size__selector-text">XL</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product__information-color__selector">
                    <div className="product__information-size-title">
                        <p>
                            Колір: <span>Синій</span>
                        </p>
                    </div>
                    <div class="product__color-container">
                        <div class="product__colors">
                            <span
                                class="product__color selected__color"
                                primary="#FAE7CD"
                                color="beige"
                                data-price="300"></span>

                            <span
                                class="product__color"
                                primary="#848282"
                                color="grey"
                                data-price="570"></span>
                            <span
                                class="product__color"
                                primary="#01337A"
                                color="blueBright"
                                data-price="470"></span>
                        </div>
                    </div>
                </div>
                <div className="product__purchase">
                    <button className="btn">Додати в кошик</button>
                    <p className="product__purchase-descr">
                        Цей товар присутній у фізичних магазинах. Ви також
                        можете приміряти його замовивши через накладений платіж
                        Нової Пошти. Безкоштовне повернення.
                    </p>
                </div>
                <div className="product__description">
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Опис товару
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Склад
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Характеристика товару
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Догляд
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                </div>
            </div>
            <div className="interested">
                <div className="interested__header">
                    <h3 className="interested__header-title">
                        разом з цим товаром купують
                    </h3>
                    <div className="interested__header-btn">
                        <button className="btn" title="read about BOKO'">
                            Готові Boko look на кожен день
                        </button>
                    </div>
                </div>
                <div className="interested__swiper">
                    <Slider />
                </div>
            </div>
            <div className="size-table">
                <img src={sizeTable} alt="size table" width={806} />
            </div>
        </section>
    );
};

export default ProductInfo;
