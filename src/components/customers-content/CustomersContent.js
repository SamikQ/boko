import instagramIcon from "../../resources/img/social-icons/instagram-icon.svg";
import customersLook from "../../resources/img/temp/customers-cart-slider.png";

const CustomersContent = () => {
    return (
        <section className="customers-content-page">
            <div className="container">
                <div className="wrapper">
                    <div className="customers-content__title">
                        <a
                            href="https://www.instagram.com/boko_kyiv/"
                            className="link__instagram">
                            <img src={instagramIcon} alt="instagram logo" />
                            <span>@boko_kyiv</span>
                        </a>
                        <p className="customers-content__title-text">
                            Ми обожнюємо дивитись як ви стилізуєте речі BOKO’.
                            Відмічайте @boko_kyiv на ваших фото.
                        </p>
                    </div>
                    <div className="customers-content__slider">
                        <img src={customersLook} alt="temp boundary" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomersContent;
