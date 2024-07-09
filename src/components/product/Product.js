import ProductColor from "./ProductColor";

const Product = (props) => {
    const { img, title, price, sale, currency } = props;
    const isSale =
        sale !== null ? (
            <p className="sale__price-active">
                {sale} {currency}
            </p>
        ) : null;
    return (
        <li className="product__list-item">
            <article className="product">
                <div className="product__img">
                    <img src={img} alt="product" key={img} />
                </div>
                <div className="product__details">
                    <h5 className="product__title">{title}</h5>
                    <div className="product__price">
                        <p className="sale__price">{price} ₴</p>
                        {isSale}
                    </div>
                    <ProductColor />
                </div>
            </article>
        </li>
    );
};

export default Product;
