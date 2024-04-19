const NewArrivals = () => {
    return (
        <section className="newArrivals">
            <div className="container">
                <div className="newArrivals__header">
                    <h3 className="newArrivals__header-title">
                        нові надходження
                    </h3>
                    <div className="newArrivals__header-btn">
                        <button
                            className="link__button"
                            title="read about BOKO'">
                            переглянути всі
                        </button>
                    </div>
                </div>
                <div className="newArrivals__swiper"></div>
            </div>
        </section>
    );
};

export default NewArrivals;
