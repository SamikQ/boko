import heart from "../../resources/img/client-icons/heart.svg";

import preview1 from "../../resources/img/temp/look-temp.jpg";
import preview2 from "../../resources/img/temp/look-temp2.jpg";
import preview3 from "../../resources/img/temp/look-temp3.jpg";
import preview4 from "../../resources/img/temp/look-temp4.jpg";
import ProductColor from "../product/ProductColor";
import ProductSize from "./ProductSize";

const Product = (props) => {
    const { product } = props;

    if (!product) {
        return null;
    }
    const { name, description, thumbnail, currency, price, dimensions } =
        product;
    const { quantity, size, color } = dimensions[0];

    return (
        <div className="product__information">
            <div className="product__preview">
                <div className="product__slider">
                    <img src={thumbnail} alt={name || "Product image"} />
                </div>
                <div className="product__slider-preview">
                    <img src={preview1} alt="" />
                    <img src={preview2} alt="" />
                    <img src={preview3} alt="" />
                    <img src={preview4} alt="" />
                </div>
            </div>
            <div className="product__information-description">
                <h3 className="product__information-title">{name}</h3>
                <div className="product__information-price">
                    <p>
                        {price} {currency}
                    </p>
                    <img src={heart} alt="heart icon" />
                </div>
                <p className="product__information-delivery">
                    Можливість міжнародної доставки
                </p>
                <ProductSize props={dimensions} />
                <div className="product__information-color__selector">
                    <div className="product__information-size-title">
                        <p>
                            Колір: <span>Синій</span>
                        </p>
                    </div>
                    <ProductColor />
                </div>
                <div className="product__purchase">
                    <button className="btn btn-black submit-order__btn">
                        Додати в кошик
                    </button>
                    <p className="product__purchase-descr">
                        Цей товар присутній у фізичних магазинах. Ви також
                        можете приміряти його замовивши через накладений платіж
                        Нової Пошти. Безкоштовне повернення.
                    </p>
                </div>
                <div className="product__description">
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Опис товару
                            <div className="accordion"></div>
                        </summary>
                        <div className="product__description-text">
                            <span>{description}</span>
                        </div>
                    </details>
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Склад<div className="accordion"></div>
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                    <details className="product__description-item">
                        <summary className="product__descriptions-title">
                            Догляд<div className="accordion"></div>
                        </summary>
                        <div className="product__description-text">
                            <span>
                                чорний жакет фантастичного кольору з родзинками
                                святого одноріга
                            </span>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Product;
