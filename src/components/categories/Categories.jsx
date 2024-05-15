import React, { useState, useEffect } from "react";
import arrow from "../../resources/img/control-icons/follow-arr.svg";

const Categories = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const mobileHidden =
        screenWidth < 768
            ? "section__header-text hidden"
            : "section__header-text";

    return (
        <section className="categories">
            <div className="container">
                <div className="wrapper">
                    <div className="section__header">
                        <h3 className="section__header-title">
                            Обрати за категорією
                        </h3>
                        <p className={mobileHidden}>BoKo Your Style</p>
                    </div>
                    <div className="categories__list">
                        <div className="catogiries__list-top-row">
                            <a
                                href="/#"
                                className="catogiries__list-item elegance"
                                aria-label="eternal elegance">
                                <h4 className="categories__list-item__title">
                                    eternal elegance
                                </h4>
                                <img
                                    src={arrow}
                                    className="categories__list-item__arrow"
                                    alt="arrow"
                                />
                            </a>
                        </div>
                        <div className="catogiries__list-middle-row">
                            <a
                                href="/#"
                                className="catogiries__list-item basic"
                                aria-label="basic">
                                <h4 className="categories__list-item__title">
                                    базовий одяг
                                </h4>
                                <img
                                    src={arrow}
                                    className="categories__list-item__arrow"
                                    alt="arrow"
                                />
                            </a>
                            <a
                                href="/#"
                                className="catogiries__list-item shoes"
                                aria-label="shoes">
                                <h4 className="categories__list-item__title">
                                    взуття
                                </h4>
                                <img
                                    src={arrow}
                                    className="categories__list-item__arrow"
                                    alt="arrow"
                                />
                            </a>
                        </div>
                        <div className="catogiries__list-bottom-row">
                            <a
                                href="/#"
                                className="catogiries__list-item bags"
                                aria-label="bags">
                                <h4 className="categories__list-item__title">
                                    сумки
                                </h4>
                                <img
                                    src={arrow}
                                    className="categories__list-item__arrow"
                                    alt="arrow"
                                />
                            </a>
                            <a
                                href="/#"
                                className="catogiries__list-item sport"
                                aria-label="sport">
                                <h4 className="categories__list-item__title">
                                    спортивний одяг
                                </h4>
                                <img
                                    src={arrow}
                                    className="categories__list-item__arrow"
                                    alt="arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
