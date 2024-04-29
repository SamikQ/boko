import bg from "../../resources/img/backgrounds/banners/bg-about-us.webp";

const Banner = () => {
    return (
        <div className="banner">
            <img src={bg} alt="boko founder" />
            <div className="banner__description">
                <p className="banner__page-nav">Home / Про нас</p>
                <h2 className="banner__title">BOKO’ KYIV</h2>
                <p className="banner__description-text">
                    Це український бренд заснований в 2010 році Анною Бец та
                    сестрою Анастасією Дзюбою.
                </p>
                <p className="banner__description-text">
                    Натхненний ідеєю створення формату якісного локального
                    шопінгу, бренд став першим таким що для створив українським
                    масмаркетом.
                </p>
            </div>
        </div>
    );
};

export default Banner;
