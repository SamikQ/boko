const Faq = () => {
    return (
        <div className="accordion__items">
            <div className="section__header">
                <h3 className="section__header-title">поширені запитання</h3>
                <p className="section__header-text">you are our inspiration</p>
            </div>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Де можна приміряти товар?
                </summary>
                <p className="accordion__body">
                    Our winery produces craft wine. Bulk orders are possible,
                    but lots cannot be large.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Як можна повернути річ, якщо не підійшов розмір?
                </summary>
                <p className="accordion__body">
                    Yes, we ship your orders to any state and city in the United
                    States, as well as abroad.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Чи є міжнародна доставка?
                </summary>
                <p className="accordion__body">
                    Our winery offers wine-lovers more than 10 different
                    varieties of wines with different aging periods.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Чи можу я забронювати одяг?
                </summary>
                <p className="accordion__body">
                    Yes. Our winery experts will tell you more about the
                    varieties and help you choose the best option for you.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Речі такі ж як на фото?
                </summary>
                <p className="accordion__body">
                    We are located in the Napa Valley, America's most famous
                    wine region.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Як обрати потрібний розмір?
                </summary>
                <p className="accordion__body">
                    We are located in the Napa Valley, America's most famous
                    wine region.
                </p>
            </details>
            <details className="accordion__item">
                <summary className="accordion__title">
                    Чи використовуємо ми натуральну шкіру?
                </summary>
                <p className="accordion__body">
                    We are located in the Napa Valley, America's most famous
                    wine region.
                </p>
            </details>
        </div>
    );
};

export default Faq;
