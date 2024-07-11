import info from "../../resources/img/client-icons/information.svg";

const ProductSize = ({ props }) => {
    console.log(props);
    const isAvailable = props.map((prop) => console.log(prop.size));

    return (
        <div className="product__information-size">
            <div className="product__information-size-title">
                <p>
                    Розмір: <span>M</span>
                </p>
                <a href="/#" className="size-title">
                    <img src={info} alt="information icon" />
                    <p>Розмірна сітка</p>
                </a>
            </div>
            <div className="product__information-size__selector">
                <ul className="size__selector-list">
                    <li className="size__selector">
                        <p className="size__selector-text">XS</p>
                    </li>
                </ul>
                <ul className="size__selector-list">
                    <li className="size__selector">
                        <p className="size__selector-text">S</p>
                    </li>
                </ul>
                <ul className="size__selector-list">
                    <li className="size__selector selected">
                        <span className="size__selector-text selected__size">
                            M
                        </span>
                    </li>
                </ul>
                <ul className="size__selector-list">
                    <li className="size__selector">
                        <p className="size__selector-text">L</p>
                    </li>
                </ul>
                <ul className="size__selector-list">
                    <li className="size__selector">
                        <p className="size__selector-text">XL</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductSize;
