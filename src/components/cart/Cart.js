import cancel from "../../resources/img/client-icons/reset-btn.svg";
import close from "../../resources/img/control-icons/cancel-icon.svg";

import temp from "../../resources/img/temp/cart-item.png";
import CartItem from "./CartItem";

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
                    <CartItem />
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
