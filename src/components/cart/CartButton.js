import { useDispatch } from "react-redux";
import cart from "../../resources/img/client-icons/cart.svg";
import { toggle } from "./cartButton_slice";

const CartButton = () => {
    const counter = 3;
    const dispatch = useDispatch();

    return (
        <button
            className="header__content-cart"
            aria-label="shopping cart"
            onClick={() => dispatch(toggle())}>
            <img
                src={cart}
                alt="shopping cart button"
                className="content-cart-img"
            />
            <span className="cart__count">({counter})</span>
        </button>
    );
};

export default CartButton;
