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
                        <div className="look-day__description">
                            <div className="look-day__title">
                                <div className="frame">
                                    <span className="title__black">BOKOʼ</span>
                                    <br />
                                    <span className="title__white">L</span>
                                    <span className="title__black">ook</span>
                                    <br />
                                    <span className="title__white">o</span>
                                    <span className="title__black">f </span>
                                    <span className="title__black">
                                        the day
                                    </span>
                                </div>
                            </div>
                            <p className="look-day__title-text">
                                Підбірка образів на щодень від Катерини Осадчої
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LookDay;
