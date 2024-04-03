import spring1 from "../../resources/img/spring-collection/spring-collection1.png";
import spring2 from "../../resources/img/spring-collection/spring-collection2.png";
import spring3 from "../../resources/img/spring-collection/spring-collection3.png";

const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="featured__title">
                    <h2>новинки</h2>
                    <a href="localhost:3000">переглянути всі</a>
                </div>
                <div className="featured__swiper">
                    <div className="swiper-wrapper">
                        <div className="featured__swiper-slide">
                            <div className="slide-card">
                                <img className="card__img" src={spring1} alt="spring collection" />
                            </div>
                        </div>
                        <div className="featured__swiper-slide">
                            <div className="slide-card">
                                <img className="card__img" src={spring2} alt="spring collection" />
                            </div>
                        </div>
                        <div className="featured__swiper-slide">
                            <div className="slide-card">
                                <img className="card__img" src={spring3} alt="spring collection" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;