import banner from "../../resources/img/backgrounds/bg-day-look.webp";

import SliderLook from "../slider/Slider-look";

const LookDay = () => {
    return (
        <section className="look-day-page">
            <div className="container">
                <div className="wrapper">
                    <div className="look-day">
                        <div className="look-day__banner">
                            <img
                                src={banner}
                                alt="banner look of the day"
                                className="look-day__img"
                            />
                        </div>
                        <div className="look-day__description">
                            <div className="look-day__title">
                                <div className="frame">
                                    <span className="title__black">BOKOʼ</span>
                                    <br />
                                    <span className="title__white">L</span>
                                    <span className="title__black">ook</span>
                                    <br />
                                    <span className="title__white decorated__text">
                                        o
                                    </span>
                                    <span className="title__black decorated__text">
                                        f{" "}
                                    </span>
                                    <span className="title__black decorated__text">
                                        the{" "}
                                        <span className="title__white">d</span>
                                        <span>ay</span>
                                    </span>
                                </div>
                            </div>
                            <p className="look-day__title-text">
                                Підбірка образів на щодень від Катерини Осадчої
                            </p>
                        </div>
                    </div>
                    <SliderLook />
                </div>
            </div>
        </section>
    );
};

export default LookDay;
