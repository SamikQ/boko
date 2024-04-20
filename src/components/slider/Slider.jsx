import { useState, useEffect, useCallback } from "react";
import leftArrow from "../../resources/img/control-icons/left-arrow.svg";
import rightArrow from "../../resources/img/control-icons/right-arrow.svg";
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
                <div>
                    <img src={img} alt="card" />
                </div>
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
        <div className="wrapper slider__container">
            <div className="slider">
                <div
                    className="slider__left"
                    onClick={() => onHandleSlider("left")}>
                    <img
                        className="slider__left-pic"
                        src={leftArrow}
                        alt="left arrow"
                    />
                </div>
                <div className="slider__cards">{items}</div>
                <div
                    className="slider__right"
                    onClick={() => onHandleSlider("right")}>
                    <img
                        className="slider__right-pic"
                        src={rightArrow}
                        alt="right arrow"
                    />
                </div>
            </div>
        </div>
    );
};

export default Slider;
