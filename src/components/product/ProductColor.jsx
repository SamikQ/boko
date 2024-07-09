const ProductColor = () => {
    return (
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
    );
};

export default ProductColor;
