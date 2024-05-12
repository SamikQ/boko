import { useState } from "react";
import arrival1 from "../../resources/img/new-arrivals/picture1.png";
import arrival2 from "../../resources/img/new-arrivals/picture2.png";
import arrival3 from "../../resources/img/new-arrivals/picture3.png";
import arrival4 from "../../resources/img/new-arrivals/picture4.png";

import temp from "../../resources/img/temp/pagination-temp.png";

const productsData = [
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
    },
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
    },
];

const ProductList = (props) => {
    const [productList, setProductList] = useState(productsData);

    const onRenderList = (arr) => {
        const elements = arr.map((item) => {
            const { img, title, price, sale } = item;
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
        });
        return <ul className="product__list">{elements}</ul>;
    };

    const products = onRenderList(productList);

    return <>{products}</>;
};

export default ProductList;

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
