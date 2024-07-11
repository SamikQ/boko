import { useState, useEffect } from "react";
import Product from "./Product";

import heart from "../../resources/img/client-icons/heart.svg";
import info from "../../resources/img/client-icons/information.svg";
import Slider from "../slider/Slider";
import sizeTable from "../../resources/img/size-table.webp";

import temp from "../../resources/img/temp/cart-item.png";
import getProduct from "../../services/CrmService";
import ProductColor from "../product/ProductColor";

const ProductInfo = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const id = props.productId;

    const onLoaded = async () => {
        const item = await getProduct(id);
        setProduct(item);
        setLoading(false);
    };

    useEffect(() => {
        onLoaded();
    }, []);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth < 768) {
        return (
            <section className="product__page" title="інформація по продукту">
                <div className="wrapper">
                    <Product product={product} />
                    <div className="interested">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                Разом з цим товаром купують
                            </h3>
                        </div>
                        <div className="interested__swiper">
                            <Slider />
                        </div>
                        <div className="section__header-btn">
                            <button
                                className="btn continue-order__btn"
                                title="read about BOKO'">
                                Дивитись всі
                            </button>
                        </div>
                    </div>
                    <div className="size-table" style={{ width: "300px" }}>
                        <img
                            src={sizeTable}
                            alt="size table"
                            style={{ width: "300px" }}
                        />
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="product__page" title="інформація по продукту">
                <div className="wrapper">
                    <Product product={product} />
                    <div className="interested">
                        <div className="section__header">
                            <h3 className="section__header-title">
                                разом з цим товаром купують
                            </h3>
                            <div className="section__header-btn">
                                <button
                                    className="btn"
                                    title="read about BOKO'">
                                    Готові Boko look на кожен день
                                </button>
                            </div>
                        </div>
                        <div className="interested__swiper">
                            <Slider />
                        </div>
                    </div>
                    {/* <div className="size-table" style={{ width: "320px" }}>
                        <img
                            src={sizeTable}
                            alt="size table"
                            style={{ width: "320px" }}
                        />
                    </div> */}
                </div>
            </section>
        );
    }
};

export default ProductInfo;
