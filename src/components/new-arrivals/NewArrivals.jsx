import { useDispatch, useSelector } from "react-redux";
import Slider from "../slider/Slider";
import React, { useState, useEffect } from "react";
import { getNewArrivals } from "./newArrivals_slice";
import Spinner from "../spinner/Spinner";

const NewArrivals = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const { list, isLoading } = useSelector((state) => state.newArrivalsSlice);

    useEffect(() => {
        dispatch(getNewArrivals());
    }, [dispatch]);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = isLoading ? <Spinner /> : <Slider items={list} />;

    if (screenWidth < 768) {
        return (
            <section className="newArrivals">
                <div className="container">
                    <div className="wrapper">
                        <h3 className="section__header-title">
                            Нові надходження
                        </h3>
                        <div className="newArrivals__swiper">{items}</div>
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
            <section className="newArrivals">
                <div className="container">
                    <div className="wrapper">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                Нові надходження
                            </h3>
                            <div className="section__header-btn">
                                <button
                                    className="btn"
                                    title="read about BOKO'">
                                    Дивитися всі
                                </button>
                            </div>
                        </div>
                        <div className="newArrivals__swiper">{items}</div>
                    </div>
                </div>
            </section>
        );
    }
};

export default NewArrivals;
