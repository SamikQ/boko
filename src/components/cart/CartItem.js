import { useDispatch } from "react-redux";
import cancel from "../../resources/img/client-icons/reset-btn.svg";
import temp from "../../resources/img/temp/cart-item.png";
import { addItemToCart } from "./cart_slice";

const CartItem = () => {
    const dispatch = useDispatch();
    return (
        <article className="cart__order-item">
            <div className="cart__order-item__preview">
                <img src={temp} alt="product item preview" />
            </div>
            <div className="cart__order-item__details">
                <h5 className="details-title">
                    Костюм базовий двійка з жакетом та довгими брюками
                </h5>
                <p className="details-size">
                    Розмір: <span>L</span>
                </p>
                <p className="details-color">
                    Колір: <span>Блакитний</span>
                </p>
                <div className="details-quantity">
                    <button className="details-quantity-button"></button>
                    <input
                        className="details-quantity-change"
                        type="number"
                        value="1"></input>
                    <button
                        onClick={() => {
                            dispatch(addItemToCart());
                        }}
                        className="details-quantity-button"></button>
                </div>
            </div>
            <div className="cart__order-item__total">
                <picture
                    className="cart__order-item-remove"
                    alt="значок скасування">
                    <img src={cancel} alt="cancel icon" />
                </picture>
                <p className="sum__total">1 420₴</p>
                <p className="discount__total">1 620₴</p>
            </div>
        </article>
    );
};

export default CartItem;
