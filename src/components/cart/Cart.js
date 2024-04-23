import cancel from "../../resources/img/control-icons/cancel-icon.svg";

import temp from "../../resources/img/temp/cart-item.png";
import temp1 from "../../resources/img/temp/image.png";

const Cart = () => {
    return (
        <section className="cart-page">
            <picture alt="значок скасування">
                <img src={cancel} alt="cancel icon" />
            </picture>
            <div className="cart">
                <div className="cart__header">
                    <h4 className="cart__header-title">
                        Ваша корзина
                        <span className="cart__header-counter"> (3)</span>
                    </h4>
                </div>
                <div className="cart__order">
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-size">
                                <p className="details-size-text">
                                    Розмір: <span>L</span>
                                </p>
                            </div>
                            <div className="details-color">
                                <p className="details-color-text">
                                    Колір: <span>Блакитний</span>
                                </p>
                            </div>
                            <div className="details-quantity">
                                <input
                                    class="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p class="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p class="discount__total">1 620₴</p>
                            </div>
                        </div>
                    </article>
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-size">
                                <p className="details-size-text">
                                    Розмір: <span>L</span>
                                </p>
                            </div>
                            <div className="details-color">
                                <p className="details-color-text">
                                    Колір: <span>Блакитний</span>
                                </p>
                            </div>
                            <div className="details-quantity">
                                <input
                                    class="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p class="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p class="discount__total">1 620₴</p>
                            </div>
                        </div>
                    </article>
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-size">
                                <p className="details-size-text">
                                    Розмір: <span>L</span>
                                </p>
                            </div>
                            <div className="details-color">
                                <p className="details-color-text">
                                    Колір: <span>Блакитний</span>
                                </p>
                            </div>
                            <div className="details-quantity">
                                <input
                                    class="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p class="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p class="discount__total">1 620₴</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="cart__promo">
                    <h5 className="cart__promo-title">
                        Безкоштовна доставка при покупці від 2000 грн.
                    </h5>
                    <p className="cart__promo-text">
                        Вам лишилося 200 грн. Бажаєте продовжити?
                    </p>
                    <div>
                        <img src={temp1} alt="" />
                    </div>
                </div>
                <div className="cart__submit">
                    <div className="cart__submit-descr">
                        <div className="cart__submit-discount">
                            <p className="submit-discount__text">Знижка:</p>
                            <p className="submit-discount__amount">-420₴</p>
                        </div>
                        <div className="cart__submit-total">
                            <p className="submit-total__text">Знижка:</p>
                            <p className="submit-total__amount">-420₴</p>
                        </div>
                    </div>
                    <div className="cart__submit-btns">
                        <button className="btn">Продовжити покупки</button>
                        <button className="btn">Оформити замовлення</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;