import { useState, useEffect } from "react";

import heart from "../../resources/img/client-icons/heart.svg";
import info from "../../resources/img/client-icons/information.svg";
import Slider from "../slider/Slider";
import sizeTable from "../../resources/img/size-table.webp";

import temp from "../../resources/img/temp/cart-item.png";
import preview1 from "../../resources/img/temp/look-temp.jpg";
import preview2 from "../../resources/img/temp/look-temp2.jpg";
import preview3 from "../../resources/img/temp/look-temp3.jpg";
import preview4 from "../../resources/img/temp/look-temp4.jpg";

const ProductInfo = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (screenWidth < 768) {
        return (
            <section className="product__page" title="інформація по продукту">
                <div className="wrapper">
                    <div className="product__information">
                        <div className="product__slider">
                            <img src={temp} alt="will be removed" />
                        </div>
                        <h3 className="product__information-title">
                            Костюм базовий двійка з жакетом та довгими брюками
                        </h3>
                        <div className="product__information-price">
                            <p>1 420₴</p>
                            <img src={heart} alt="heart icon" />
                        </div>
                        <p className="product__information-delivery">
                            Можливість міжнародної доставки
                        </p>
                        <div className="product__information-size">
                            <div className="product__information-size-title">
                                <p>
                                    Розмір: <span>M</span>
                                </p>
                                <a href="/#" className="size-title">
                                    <img src={info} alt="information icon" />
                                    <p>Розмірна сітка</p>
                                </a>
                            </div>
                            <div className="product__information-size__selector">
                                <ul className="size__selector-list">
                                    <li className="size__selector">
                                        <p className="size__selector-text">
                                            XS
                                        </p>
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
                                        <p className="size__selector-text">
                                            XL
                                        </p>
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
                            <div className="product__color-container">
                                <div className="product__colors">
                                    <span
                                        className="product__color selected__color"
                                        primary="#FAE7CD"
                                        color="beige"
                                        data-price="300"></span>

                                    <span
                                        className="product__color"
                                        primary="#848282"
                                        color="grey"
                                        data-price="570"></span>
                                    <span
                                        className="product__color"
                                        primary="#01337A"
                                        color="blueBright"
                                        data-price="470"></span>
                                </div>
                            </div>
                        </div>
                        <div className="product__purchase">
                            <button className="btn btn-black submit-order__btn">
                                Додати в кошик
                            </button>
                            <p className="product__purchase-descr">
                                Цей товар присутній у фізичних магазинах. Ви
                                також можете приміряти його замовивши через
                                накладений платіж Нової Пошти. Безкоштовне
                                повернення.
                            </p>
                        </div>
                        <div className="product__description">
                            <details className="product__description-item">
                                <summary className="product__descriptions-title">
                                    Опис товару<div className="accordion"></div>
                                </summary>
                                <div className="product__description-text">
                                    <span>
                                        чорний жакет фантастичного кольору з
                                        родзинками святого одноріга
                                    </span>
                                </div>
                            </details>
                            <details className="product__description-item">
                                <summary className="product__descriptions-title">
                                    Склад<div className="accordion"></div>
                                </summary>
                                <div className="product__description-text">
                                    <span>
                                        чорний жакет фантастичного кольору з
                                        родзинками святого одноріга
                                    </span>
                                </div>
                            </details>
                            <details className="product__description-item">
                                <summary className="product__descriptions-title">
                                    Догляд<div className="accordion"></div>
                                </summary>
                                <div className="product__description-text">
                                    <span>
                                        чорний жакет фантастичного кольору з
                                        родзинками святого одноріга
                                    </span>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="interested">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                Разом з цим товаром купують
                            </h3>
                        </div>
                        <div className="interested__swiper">
                            <Slider />
                        </div>
                        <div className="section__header-btn">
                            <button
                                className="btn continue-order__btn"
                                title="read about BOKO'">
                                Дивитись всі
                            </button>
                        </div>
                    </div>
                    <div className="size-table" style={{ width: "300px" }}>
                        <img
                            src={sizeTable}
                            alt="size table"
                            style={{ width: "300px" }}
                        />
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="product__page" title="інформація по продукту">
                <div className="wrapper">
                    <div className="product__information">
                        <div className="product__preview">
                            <div className="product__slider">
                                <img src={temp} alt="will be removed" />
                            </div>
                            <div className="product__slider-preview">
                                <img src={preview1} alt="" />
                                <img src={preview2} alt="" />
                                <img src={preview3} alt="" />
                                <img src={preview4} alt="" />
                            </div>
                        </div>
                        <div className="product__information-description">
                            <h3 className="product__information-title">
                                Костюм базовий двійка з жакетом та довгими
                                брюками
                            </h3>
                            <div className="product__information-price">
                                <p>1 420₴</p>
                                <img src={heart} alt="heart icon" />
                            </div>
                            <p className="product__information-delivery">
                                Можливість міжнародної доставки
                            </p>
                            <div className="product__information-size">
                                <div className="product__information-size-title">
                                    <p>
                                        Розмір: <span>M</span>
                                    </p>
                                    <a href="/#" className="size-title">
                                        <img
                                            src={info}
                                            alt="information icon"
                                        />
                                        <p>Розмірна сітка</p>
                                    </a>
                                </div>
                                <div className="product__information-size__selector">
                                    <ul className="size__selector-list">
                                        <li className="size__selector">
                                            <p className="size__selector-text">
                                                XS
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="size__selector-list">
                                        <li className="size__selector">
                                            <p className="size__selector-text">
                                                S
                                            </p>
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
                                            <p className="size__selector-text">
                                                L
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="size__selector-list">
                                        <li className="size__selector">
                                            <p className="size__selector-text">
                                                XL
                                            </p>
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
                                <div className="product__color-container">
                                    <div className="product__colors">
                                        <span
                                            className="product__color selected__color"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="product__color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="product__color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="product__purchase">
                                <button className="btn btn-black submit-order__btn">
                                    Додати в кошик
                                </button>
                                <p className="product__purchase-descr">
                                    Цей товар присутній у фізичних магазинах. Ви
                                    також можете приміряти його замовивши через
                                    накладений платіж Нової Пошти. Безкоштовне
                                    повернення.
                                </p>
                            </div>
                            <div className="product__description">
                                <details className="product__description-item">
                                    <summary className="product__descriptions-title">
                                        Опис товару
                                        <div className="accordion"></div>
                                    </summary>
                                    <div className="product__description-text">
                                        <span>
                                            чорний жакет фантастичного кольору з
                                            родзинками святого одноріга
                                        </span>
                                    </div>
                                </details>
                                <details className="product__description-item">
                                    <summary className="product__descriptions-title">
                                        Склад<div className="accordion"></div>
                                    </summary>
                                    <div className="product__description-text">
                                        <span>
                                            чорний жакет фантастичного кольору з
                                            родзинками святого одноріга
                                        </span>
                                    </div>
                                </details>
                                <details className="product__description-item">
                                    <summary className="product__descriptions-title">
                                        Догляд<div className="accordion"></div>
                                    </summary>
                                    <div className="product__description-text">
                                        <span>
                                            чорний жакет фантастичного кольору з
                                            родзинками святого одноріга
                                        </span>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className="interested">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                разом з цим товаром купують
                            </h3>
                            <div className="section__header-btn">
                                <button
                                    className="btn"
                                    title="read about BOKO'">
                                    Готові Boko look на кожен день
                                </button>
                            </div>
                        </div>
                        <div className="interested__swiper">
                            <Slider />
                        </div>
                    </div>
                    {/* <div className="size-table" style={{ width: "320px" }}>
                        <img
                            src={sizeTable}
                            alt="size table"
                            style={{ width: "320px" }}
                        />
                    </div> */}
                </div>
            </section>
        );
    }
};

export default ProductInfo;
