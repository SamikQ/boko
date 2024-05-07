import { useState, useEffect, useCallback } from "react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "./slider.css";

import goldenDot from "../../resources/img/decor/decor-golden-round.png";

import monday from "../../resources/img/backgrounds/lookDay/bg-daylook-monday.webp";
import arrival2 from "../../resources/img/new-arrivals/picture2.png";
import arrival3 from "../../resources/img/new-arrivals/picture3.png";
import arrival4 from "../../resources/img/new-arrivals/picture4.png";

const SliderLook = () => {
    return (
        <Swiper
            className="image-slider swiper-container"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 1.5, spaceBetween: 20 },
                1440: { slidesPerView: 1.5, spaceBetween: 20 }
            }}
            a11y={{ enabled: true }}
            // loop={true}
            // autoplay={{ delay: 1000 }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            <div className="image-slider__wrapper swiper-wrapper">
                <SwiperSlide className="image-slider-slide swiper-slide__look">
                    <article className="image-slider__image">
                        <h5 className="look-day__day-title">monday</h5>
                        <img
                            className="img__darked"
                            src={monday}
                            alt="card item"
                            key={monday}
                        />
                        <ul className="look-day__list">
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Рубашка в полоску з довгими рукавами
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Брюки довгі класичні просторо крою
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Закриті класичні туфлі BOKO’
                            </li>
                        </ul>
                    </article>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper-slide-look">
                    <article className="image-slider__image">
                        <h5 className="look-day__day-title">tuesday</h5>
                        <img
                            className="img__darked"
                            src={arrival2}
                            alt="card item"
                            key={arrival2}
                        />
                        <ul className="look-day__list">
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Рубашка в полоску з довгими рукавами
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Брюки довгі класичні просторо крою
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Закриті класичні туфлі BOKO’
                            </li>
                        </ul>
                    </article>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper-slide-look">
                    <article className="image-slider__image">
                        <h5 className="look-day__day-title">wednesday</h5>
                        <img
                            className="img__darked"
                            src={arrival3}
                            alt="card item"
                            key={arrival3}
                        />
                        <ul className="look-day__list">
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Рубашка в полоску з довгими рукавами
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Брюки довгі класичні просторо крою
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Закриті класичні туфлі BOKO’
                            </li>
                        </ul>
                    </article>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper-slide-look">
                    <article className="image-slider__image">
                        <h5 className="look-day__day-title">tuesday</h5>
                        <img
                            className="img__darked"
                            src={arrival4}
                            alt="card item"
                            key={arrival4}
                        />
                        <ul className="look-day__list">
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Рубашка в полоску з довгими рукавами
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Брюки довгі класичні просторо крою
                            </li>
                            <li>
                                <img src={goldenDot} alt="golden dot" />
                                Закриті класичні туфлі BOKO’
                            </li>
                        </ul>
                    </article>
                </SwiperSlide>
            </div>
        </Swiper>
    );
};

export default SliderLook;
