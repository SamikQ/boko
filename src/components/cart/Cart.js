import cancel from "../../resources/img/client-icons/reset-btn.svg";
import close from "../../resources/img/control-icons/cancel-icon.svg";

import temp from "../../resources/img/temp/cart-item.png";

const Cart = () => {
    return (
        <section className="cart-page">
            <div className="cart">
                <div className="cart__header">
                    <h4 className="cart__header-title">
                        Ваша корзина
                        <span className="cart__header-counter"> (3)</span>
                    </h4>
                    <picture alt="значок скасування">
                        <img src={close} alt="cancel icon" />
                    </picture>
                </div>
                <div className="cart__order">
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-title">
                                <h5 className="details-title-text">
                                    Костюм базовий двійка з жакетом та довгими
                                    брюками
                                </h5>
                            </div>
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
                                <button className="details-quantity-button"></button>
                                <input
                                    className="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                                <button className="details-quantity-button"></button>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p className="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p className="discount__total">1 620₴</p>
                            </div>
                        </div>
                    </article>
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-title">
                                <h5 className="details-title-text">
                                    Костюм базовий двійка з жакетом та довгими
                                    брюками
                                </h5>
                            </div>
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
                                <button className="details-quantity-button"></button>
                                <input
                                    className="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                                <button className="details-quantity-button"></button>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p className="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p className="discount__total">1 620₴</p>
                            </div>
                        </div>
                    </article>
                    <article className="cart__order-item">
                        <div className="cart__order-item__preview">
                            <img src={temp} alt="product item preview" />
                        </div>
                        <div className="cart__order-item__details details">
                            <div className="details-title">
                                <h5 className="details-title-text">
                                    Костюм базовий двійка з жакетом та довгими
                                    брюками
                                </h5>
                            </div>
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
                                <button className="details-quantity-button"></button>
                                <input
                                    className="details-quantity-change"
                                    type="number"
                                    value="1"></input>
                                <button className="details-quantity-button"></button>
                            </div>
                        </div>
                        <div className="cart__order-item__total">
                            <picture
                                className="cart__order-item-remove"
                                alt="значок скасування">
                                <img src={cancel} alt="cancel icon" />
                            </picture>
                            <div className="cart__order-item__sum">
                                <p className="sum__total">1 420₴</p>
                            </div>
                            <div className="cart__order-item__discount">
                                <p className="discount__total">1 620₴</p>
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
                </div>
                <div className="cart__submit">
                    <div className="cart__submit-descr">
                        <div className="cart__submit-discount">
                            <p className="submit-discount__text">Знижка:</p>
                            <p className="submit-discount__amount">-420₴</p>
                        </div>
                        <div className="cart__submit-total">
                            <p className="submit-total__text">До сплати:</p>
                            <p className="submit-total__amount">2200₴</p>
                        </div>
                    </div>
                    <div className="cart__submit-btns">
                        <button className="btn submit-order__btn btn-black">
                            Оформити замовлення
                        </button>
                        <button className="btn continue-order__btn">
                            Продовжити покупки
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
