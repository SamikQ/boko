import { useState } from "react";
import Product from "../product/Product";
import arrival1 from "../../resources/img/new-arrivals/picture1.png";
import arrival2 from "../../resources/img/new-arrivals/picture2.png";
import arrival3 from "../../resources/img/new-arrivals/picture3.png";
import arrival4 from "../../resources/img/new-arrivals/picture4.png";

const productsData = [
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
        currency_code: "UAH",
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
        currency_code: "UAH",
    },
    {
        img: arrival1,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival2,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
        currency_code: "UAH",
    },
    {
        img: arrival3,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: 2200,
        currency_code: "UAH",
    },
    {
        img: arrival4,
        title: "Базова майка BoKo’ з закритим коміром",
        price: 3498,
        sale: null,
        currency_code: "UAH",
    },
];

const ProductList = (props) => {
    const [productList, setProductList] = useState(productsData);

    const onRenderList = (arr) => {
        const elements = arr.map((item) => {
            const { img, title, price, sale, currency_code } = item;
            return (
                <Product
                    img={img}
                    title={title}
                    price={price}
                    sale={sale}
                    currency={currency_code}
                />
            );
        });
        return <ul className="product__list">{elements}</ul>;
    };

    const products = onRenderList(productList);

    return <>{products}</>;
};

export default ProductList;
