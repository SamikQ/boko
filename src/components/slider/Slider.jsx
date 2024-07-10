import { useNavigate } from "react-router-dom";
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
import ProductColor from "../product/ProductColor";
import SliderPrice from "./SliderPrice";

const Slider = ({ items }) => {
    const navigate = useNavigate();
    if (!Array.isArray(items)) {
        console.error(
            "Slider component received items that are not an array:",
            items
        );
        return null;
    }

    const handleSlideClick = (itemId) => {
        navigate(`/products/${itemId}`);
    };

    return (
        <Swiper
            className="image-slider swiper-container"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 4 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1440: { slidesPerView: 4 },
            }}
            a11y={{ enabled: true }}>
            <div className="image-slider__wrapper swiper-wrapper">
                {items.map(
                    ({
                        id,
                        name,
                        thumbnail_url,
                        max_price,
                        min_price,
                        currency_code,
                    }) => (
                        <SwiperSlide
                            key={id}
                            className="image-slider-slide swiper__slide"
                            onClick={() => handleSlideClick(id)}>
                            <div className="swiper-slide__border"></div>
                            <div className="image-slider__image">
                                <img
                                    src={thumbnail_url}
                                    alt="card item"
                                />
                            </div>
                            <div className="slider__details">
                                <div className="slider__title">
                                    <h5>{name}</h5>
                                </div>
                                <SliderPrice
                                    price={max_price}
                                    sale={min_price}
                                    currency={currency_code}
                                />
                                <ProductColor />
                            </div>
                        </SwiperSlide>
                    )
                )}
            </div>
        </Swiper>
    );
};

export default Slider;
