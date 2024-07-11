import info from "../../resources/img/client-icons/information.svg";

const ProductSize = ({ props }) => {

    const onRenderSize = (arr) => {
        return (
            <ul className="product__information-size__selector">
                {arr.map((prop, index) => (
                    <li key={index} className="size__selector">
                        <p className="size__selector-text">{prop.size}</p>
                    </li>
                ))}
            </ul>
        );
    };
    const content = onRenderSize(props);

    return (
        <div className="product__information-size">
            <div className="product__information-size-title">
                <p>
                    Розмір:<span>M</span>
                </p>
                <a href="/#" className="size-title">
                    <img src={info} alt="information icon" />
                    <p>Розмірна сітка</p>
                </a>
            </div>
            {content}
        </div>
    );
};

export default ProductSize;
