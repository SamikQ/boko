const Product = (props) => {
    const { img, title, price, sale } = props;
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
                        <p className="sale__price-active">{sale} ₴</p>
                    </div>
                    <div className="color-container">
                        <div className="colors">
                            <span
                                className="color active"
                                primary="#FAE7CD"
                                color="beige"
                                data-price="300"></span>

                            <span
                                className="color"
                                primary="#848282"
                                color="grey"
                                data-price="570"></span>
                            <span
                                className="color"
                                primary="#01337A"
                                color="blueBright"
                                data-price="470"></span>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
};
