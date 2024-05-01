// import bg from "../../resources/img/backgrounds/banners/bg-about-us.webp";

const Banner = ({ page }) => {
    const { title, description, bg, bgAlt } = page;
    return (
        <div className="banner">
            <img src={bg} alt={bgAlt} />
            <p className="banner__page-nav">Home / Про нас</p>
            <div className="banner__description">
                <h2 className="banner__title">{title}</h2>
                <p className="banner__description-text">{description}</p>
            </div>
        </div>
    );
};

export default Banner;
