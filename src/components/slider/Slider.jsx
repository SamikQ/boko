import { useState, useEffect, useCallback } from "react";
import leftArrow from "../../resources/img/control-icons/left-arrow.svg";
import rightArrow from "../../resources/img/control-icons/right-arrow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

import "./slider.css";

import spring1 from "../../resources/img/spring-collection/spring-collection1.png";
import spring2 from "../../resources/img/spring-collection/spring-collection2.png";
import spring3 from "../../resources/img/spring-collection/spring-collection3.png";

const dataSlider = [
    { img: spring1 },
    { img: spring2 },
    { img: spring1 },
    { img: spring2 },
    { img: spring1 },
    { img: spring2 },
    { img: spring3 },
];

const Slider = () => {
    const [slider, setSlider] = useState(3);

    const onHandleSlider = useCallback(
        (side) => {
            const sliders = dataSlider.length - 1;
            if (side === "left") {
                slider - 1 >= 0 ? setSlider(slider - 1) : setSlider(slider);
            } else {
                const numberSlide = slider + 1;
                numberSlide > sliders ? setSlider(0) : setSlider(numberSlide);
            }
        },
        [slider]
    );

    const onRenderList = (arr) => {
        const elements = arr.map((item) => {
            const { img } = item;
            return (
              <SwiperSlide><img src={img} alt="card item" key={img}/></SwiperSlide>
            );
        });
        return elements;
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         onHandleSlider("right");
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [slider, onHandleSlider]);

    const items = onRenderList(dataSlider);

    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {items}
          ...
        </Swiper>
    )
};

export default Slider;
