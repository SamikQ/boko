import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";

const Featured = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth < 768) {
        return (
            <section className="featured">
                <div className="container">
                    <div className="wrapper">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                Хіти продажів
                            </h3>
                        </div>
                        <div className="newArrivals__swiper">
                            <Slider />
                        </div>
                        <div className="section__header-btn">
                            <button className="btn" title="read about BOKO'">
                                Дивитися всі
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="featured">
                <div className="container">
                    <div className="wrapper">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                Хіти продажів
                            </h3>
                            <div className="section__header-btn">
                                <button
                                    className="btn"
                                    title="read about BOKO'">
                                    Дивитися всі
                                </button>
                            </div>
                        </div>
                        <div className="newArrivals__swiper">
                            <Slider />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Featured;
