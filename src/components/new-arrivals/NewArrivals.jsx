import Slider from "../slider/Slider";

const NewArrivals = () => {
    return (
        <section className="newArrivals">
            <div className="container">
                <div className="newArrivals__header">
                    <h3 className="newArrivals__header-title">
                        нові надходження
                    </h3>
                    <div className="newArrivals__header-btn">
                        <button className="btn" title="read about BOKO'">
                            Дивитися всі
                        </button>
                    </div>
                </div>
                <div className="newArrivals__swiper">
                    <Slider />
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
