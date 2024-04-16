import spring1 from "../../resources/img/spring-collection/spring-collection1.png";
import spring2 from "../../resources/img/spring-collection/spring-collection2.png";
import spring3 from "../../resources/img/spring-collection/spring-collection3.png";

const HitSales = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__title">
          <h2>хіти продажів</h2>
          <button href="localhost:3000">дивитися усі</button>
        </div>
        <div className="featured__swiper">
          <div className="swiper-wrapper">
            <div className="featured__swiper-slide">
              <div className="slide-card">
                <img className="card__img" src={spring1} alt="spring collection" />
                <p>льняний сарафан у полоску BoKo'</p>
                <div class="card-price-wrapper">
                  <div className="card__price">
                    <span>2200 &#8372;</span>
                  </div>
                  <div className="card__color">
                    <div>
                      <label>
                        <input type="radio" value="16555" class="card-color"></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured__swiper-slide">
              <div className="slide-card">
                <img className="card__img" src={spring2} alt="spring collection" />
                <p>льняний сарафан у полоску BoKo'</p>
                <div class="card-price-wrapper">
                  <div className="card__price">
                    <span>2200 &#8372;</span>
                  </div>
                  <div className="card__color">
                    <div>
                      <label>
                        <input type="radio" value="16555" class="card-color"></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured__swiper-slide">
              <div className="slide-card">
                <img className="card__img" src={spring3} alt="spring collection" />
                <p>льняний сарафан у полоску BoKo'</p>
                <div class="card-price-wrapper">
                  <div className="card__price">
                    <span>2200 &#8372;</span>
                  </div>
                  <div className="card__color">
                    <div>
                      <label>
                        <input type="radio" value="16555" class="card-color"></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured__swiper-slide">
              <div className="slide-card">
                <img className="card__img" src={spring1} alt="spring collection" />
                <p>льняний сарафан у полоску BoKo'</p>
                <div class="card-price-wrapper">
                  <div className="card__price">
                    <span>2200 &#8372;</span>
                  </div>
                  <div className="card__color">
                    <div>
                      <label>
                        <input type="radio" value="16555" class="card-color"></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured__swiper-slide">
              <div className="slide-card">
                <img className="card__img" src={spring2} alt="spring collection" />
                <p>льняний сарафан у полоску BoKo'</p>
                <div class="card-price-wrapper">
                  <div className="card__price">
                    <span>2200 &#8372;</span>
                  </div>
                  <div className="card__color">
                    <div>
                      <label>
                        <input type="radio" value="16555" class="card-color"></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HitSales;
