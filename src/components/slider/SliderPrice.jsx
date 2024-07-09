const SliderPrice = ({ price, sale, currency }) => {
    const showSalePrice = price !== sale;

    return (
        <div className="slider__description-price">
            <p className={showSalePrice ? "sale__price" : ""}>
                {price} {currency}
            </p>
            {showSalePrice && (
                <p className="sale__price-active">
                    {sale} {currency}
                </p>
            )}
        </div>
    );
};

export default SliderPrice;
