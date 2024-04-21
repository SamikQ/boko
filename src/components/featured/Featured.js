import spring1 from "../../resources/img/spring-collection/spring-collection1.png";
import spring2 from "../../resources/img/spring-collection/spring-collection2.png";
import spring3 from "../../resources/img/spring-collection/spring-collection3.png";
import Slider from "../slider/Slider";

const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="newArrivals__header">
                    <h3 className="newArrivals__header-title">
                        хіти продажів
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

export default Featured;
