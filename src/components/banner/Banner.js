// import bg from "../../resources/img/backgrounds/banners/bg-about-us.webp";

const Banner = ({ page }) => {
    const { title, bg, bgAlt } = page;
    return (
        <div className="banner">
            <img src={bg} alt={bgAlt} />
            <div className="banner__description">
                <h2 className="banner__title">{title}</h2>
            </div>
        </div>
    );
};

export default Banner;
