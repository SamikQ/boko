import Banner from "../banner/Banner";

import bg from "../../resources/img/backgrounds/banners/bg-faq.webp";

const page = {
    title: "Поширені запитання",
    description: null,
    bg: bg,
    bgAlt: "faq background",
};

const Faq = () => {
    return (
        <section className="faq-page">
            <Banner page={page} />
            <div className="accordion__items">
                <div className="section__header">
                    <h3 className="section__header-title">
                        поширені запитання
                    </h3>
                    <p className="section__header-text">
                        you are our inspiration
                    </p>
                </div>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Де можна приміряти товар?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        Our winery produces craft wine. Bulk orders are
                        possible, but lots cannot be large.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Як можна повернути річ, якщо не підійшов розмір?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        Yes, we ship your orders to any state and city in the
                        United States, as well as abroad.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Чи є міжнародна доставка?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        Our winery offers wine-lovers more than 10 different
                        varieties of wines with different aging periods.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Чи можу я забронювати одяг?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        Yes. Our winery experts will tell you more about the
                        varieties and help you choose the best option for you.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Речі такі ж як на фото?<div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        We are located in the Napa Valley, America's most famous
                        wine region.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Як обрати потрібний розмір?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        We are located in the Napa Valley, America's most famous
                        wine region.
                    </p>
                </details>
                <details className="accordion__item">
                    <summary className="accordion__title">
                        Чи використовуємо ми натуральну шкіру?
                        <div className="accordion"></div>
                    </summary>
                    <p className="accordion__body">
                        We are located in the Napa Valley, America's most famous
                        wine region.
                    </p>
                </details>
            </div>
        </section>
    );
};

export default Faq;
