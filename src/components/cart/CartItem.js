import cancel from "../../resources/img/client-icons/reset-btn.svg";
import temp from "../../resources/img/temp/cart-item.png";

const CartItem = (props) => {
    return (
        <article className="cart__order-item">
            <div className="cart__order-item__preview">
                <img src={temp} alt="product item preview" />
            </div>
            <div className="cart__order-item__details details">
                <div className="details-title">
                    <h5 className="details-title-text">
                        Костюм базовий двійка з жакетом та довгими брюками
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
    );
};

export default CartItem;
