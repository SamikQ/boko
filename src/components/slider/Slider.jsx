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
import frame from "../../resources/img/new-arrivals/frame.svg";

import arrival1 from "../../resources/img/new-arrivals/picture1.png";
import arrival2 from "../../resources/img/new-arrivals/picture2.png";
import arrival3 from "../../resources/img/new-arrivals/picture3.png";
import arrival4 from "../../resources/img/new-arrivals/picture4.png";

const Slider = () => {
    return (
        <Swiper
            className="image-slider swiper-container"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            // pagination={{ clickable: true }}
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 4 },
                1024: { slidesPerView: 3, spaceBetween: 20},
                1440: { slidesPerView: 4 },
            }}
            a11y={{ enabled: true }}
            // loop={true}
            // autoplay={{ delay: 1000 }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            <div className="image-slider__wrapper swiper-wrapper">
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border"></div>
                    <div className="image-slider__image">
                        <img src={arrival1} alt="card item" key={arrival1} />
                    </div>
                    <div className="slider__details">
                        <div className="slider__title">
                            <h5>Базова майка BoKo’ з закритим коміром</h5>
                        </div>
                        <div className="slider__description-price">
                            <p className="sale__price">3498 ₴</p>
                            <p className="sale__price-active">2200 ₴</p>
                        </div>
                        <div className="color-container">
                            <div className="colors">
                                <span
                                    className="color active"
                                    primary="#FAE7CD"
                                    color="beige"
                                    data-price="300"></span>

                                <span
                                    className="color"
                                    primary="#848282"
                                    color="grey"
                                    data-price="570"></span>
                                <span
                                    className="color"
                                    primary="#01337A"
                                    color="blueBright"
                                    data-price="470"></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border">
                        <div className="image-slider__image">
                            <img
                                src={arrival2}
                                alt="card item"
                                key={arrival2}
                            />
                        </div>
                        <div className="slider__details">
                            <div className="slider__title">
                                <h5>Базова майка BoKo’ з закритим коміром</h5>
                            </div>
                            <div className="slider__description">
                                <div className="slider__description-price">
                                    <p>4498 ₴</p>
                                </div>
                                <div className="color-container">
                                    <div className="colors">
                                        <span
                                            className="color active"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border">
                        <div className="image-slider__image">
                            <img
                                src={arrival3}
                                alt="card item"
                                key={arrival3}
                            />
                        </div>
                        <div className="slider__details">
                            <div className="slider__title">
                                <h5>Базова майка BoKo’ з закритим коміром</h5>
                            </div>
                            <div className="slider__description">
                                <div className="slider__description-price">
                                    <p>4498 ₴</p>
                                </div>
                                <div className="color-container">
                                    <div className="colors">
                                        <span
                                            className="color active"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border">
                        <div className="image-slider__image">
                            <img
                                src={arrival4}
                                alt="card item"
                                key={arrival4}
                            />
                        </div>
                        <div className="slider__details">
                            <div className="slider__title">
                                <h5>Базова майка BoKo’ з закритим коміром</h5>
                            </div>
                            <div className="slider__description">
                                <div className="slider__description-price">
                                    <p>4498 ₴</p>
                                </div>
                                <div className="color-container">
                                    <div className="colors">
                                        <span
                                            className="color active"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border">
                        <div className="image-slider__image">
                            <img
                                src={arrival2}
                                alt="card item"
                                key={arrival2}
                            />
                        </div>
                        <div className="slider__details">
                            <div className="slider__title">
                                <h5>Базова майка BoKo’ з закритим коміром</h5>
                            </div>
                            <div className="slider__description">
                                <div className="slider__description-price">
                                    <p>4498 ₴</p>
                                </div>
                                <div className="color-container">
                                    <div className="colors">
                                        <span
                                            className="color active"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="image-slider-slide swiper__slide">
                    <div className="swiper-slide__border">
                        <div className="image-slider__image">
                            <img
                                src={arrival3}
                                alt="card item"
                                key={arrival3}
                            />
                        </div>
                        <div className="slider__details">
                            <div className="slider__title">
                                <h5>Базова майка BoKo’ з закритим коміром</h5>
                            </div>
                            <div className="slider__description">
                                <div className="slider__description-price">
                                    <p>4498 ₴</p>
                                </div>
                                <div className="color-container">
                                    <div className="colors">
                                        <span
                                            className="color active"
                                            primary="#FAE7CD"
                                            color="beige"
                                            data-price="300"></span>

                                        <span
                                            className="color"
                                            primary="#848282"
                                            color="grey"
                                            data-price="570"></span>
                                        <span
                                            className="color"
                                            primary="#01337A"
                                            color="blueBright"
                                            data-price="470"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    );
};

export default Slider;
