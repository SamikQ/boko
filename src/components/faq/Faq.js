import Banner from "../banner/Banner";

import bg from "../../resources/img/backgrounds/banners/bg-faq.webp";
import { useEffect, useState } from "react";

const page = {
    title: "Поширені запитання",
    description: null,
    bg: bg,
    bgAlt: "faq background",
};

const Faq = () => {
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const hidden = ScreenWidth < 768 ? { display: "none" } : null;

    return (
        <section className="faq-page">
            <Banner page={page} />
            <div className="wrapper">
                <div className="accordion__items">
                    <div className="section__header">
                        <h3 className="section__header-title">
                            Поширені запитання
                        </h3>
                        <p className="section__header-text" style={hidden}>
                            you are our inspiration
                        </p>
                    </div>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Де можна приміряти товар?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            Our winery produces craft wine. Bulk orders are
                            possible, but lots cannot be large.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Як можна повернути річ, якщо не підійшов розмір?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            Yes, we ship your orders to any state and city in
                            the United States, as well as abroad.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Чи є міжнародна доставка?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            Our winery offers wine-lovers more than 10 different
                            varieties of wines with different aging periods.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Чи можу я забронювати одяг?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            Yes. Our winery experts will tell you more about the
                            varieties and help you choose the best option for
                            you.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Речі такі ж як на фото?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            We are located in the Napa Valley, America's most
                            famous wine region.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Як обрати потрібний розмір?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            We are located in the Napa Valley, America's most
                            famous wine region.
                        </p>
                    </details>
                    <details className="accordion__item">
                        <summary className="accordion__title">
                            <h5 className="accordion__title-text">
                                Чи використовуємо ми натуральну шкіру?
                            </h5>
                            <div className="accordion"></div>
                        </summary>
                        <p className="accordion__body">
                            We are located in the Napa Valley, America's most
                            famous wine region.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;
