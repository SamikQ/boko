import banner from "../../resources/img/backgrounds/bg-day-look.webp";

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
                        <div className="inner">
                            <div className="look-day__description">
                                <h3 className="look-day__title">
                                    BOKOʼ
                                    <span className="look-day__title-decor">
                                        L
                                    </span>
                                    ook
                                    <span className="look-day__title-decor">
                                        of
                                    </span>
                                    the day
                                </h3>
                                <p className="look-day__title-text">
                                    Підбірка образів на щодень від Катерини
                                    Осадчої
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LookDay;
