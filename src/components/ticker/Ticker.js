const Ticker = () => {
    return (
        <div className="container">
            <marquee className="ticker">
                <ul className="ticker__list">
                    <li className="ticker__list-item">Basic</li>
                    <li className="ticker__list-item">Sport</li>
                    <li className="ticker__list-item">Limited</li>
                </ul>
            </marquee>
        </div>
    );
};

export default Ticker;
