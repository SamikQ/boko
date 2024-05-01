import Banner from "../banner/Banner";

import bg from "../../resources/img/backgrounds/banners/bg-about-us.webp";
import aboutImgTop from "../../resources/img/about-us/about-us-creator-top.webp";
import aboutImg from "../../resources/img/about-us/about-us-creator.webp";
import aboutImgBottom from "../../resources/img/about-us/about-us-creator-bottom.webp";

const page = {
    title: "BOKO’ KYIV",
    description: `Це український бренд заснований в 2010 році Анною Бец та сестрою Анастасією Дзюбою.
    Натхненний ідеєю створення формату якісного локального
    шопінгу, бренд став першим таким що для створив українським
    масмаркетом.
'`,
    bg: bg,
    bgAlt: "boko founder",
};

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <Banner page={page} />
                <div className="wrapper">
                    <div className="about-us__information-left">
                        <p className="description__text">
                            MustHave це український бренд заснований в 2010 році
                            Анною Бец та Анастасією Дзюбою. Натхненний ідеєю
                            створення формату якісного локального шопінгу, бренд
                            став першим українським масмаркетом. Від базового
                            одягу до вишуканих елементів, асортимент MustHave
                            покликаний задовольнити всі потреби сучасного
                            жіночого гардероба.
                            <br />
                            <br />
                            Бренд має власну лінійку взуття та аксесуарів та
                            регулярно випускає унісекс-колекціі. В реалізації
                            дизайнів MustHave використовуються високоякісні
                            тканини і матеріали, включаючи вовну, шкіру, сатин,
                            льон і кашемір.
                        </p>
                        <div className="about-us__infromation-img">
                            <img
                                src={aboutImgTop}
                                alt="the founder"
                                className="information__picture"
                            />
                        </div>
                    </div>
                    <div className="about-us__information-right">
                        <p className="description__text">
                            Сьогодні MustHave має власне виробництво площею
                            1500м2, 13 магазинів у Києві, Львові, Вінниці та
                            Івано-Франківську, 180 талановитих спеціалістів і
                            тисячі лояльних клієнтів в Україні та світі.
                            Перегляньте сторінку з нашими магазинами, щоб знайти
                            найзручнішу локацію для вас.
                            <br />
                            <br />В реалізації дизайнів MustHave
                            використовуються високоякісні тканини і матеріали,
                            включаючи вовну, шкіру, сатин, льон і кашемір. В
                            реалізації дизайнів MustHave використовуються
                            високоякісні тканини і матеріали, включаючи вовну,
                            шкіру, сатин, льон і кашемір.
                        </p>
                        <div className="about-us__infromation-img">
                            <img
                                src={aboutImg}
                                alt="BOKO founder"
                                className="information__picture"
                            />
                        </div>
                    </div>
                    <div className="about-us__information-left">
                        <p className="description__text">
                            <span className="description__text-decorated">
                                "Раніше на ринку просто не було доступного одягу
                                made in UA і звички купувати своє. Коли виникла
                                ідея MustHave, нам було по 23 роки: самі
                                одягалися в мас-маркеті і часто натрапляли на
                                дисбаланс ціна-якість, брак моделей і низький
                                рівень сервісу",
                            </span>
                            <br />
                            <br />
                            співзасновниці бренду Анна Бец і Анастасія Дзюба.
                            <br />
                            <br />
                            MustHave використовуються високоякісні тканини і
                            матеріали, включаючи вовну, шкіру, сатин, льон і
                            кашемір. В реалізації дизайнів MustHave
                            використовуються високоякісні тканини і матеріали,
                            включаючи вовну, шкіру, сатин, льон і кашемір.
                        </p>
                        <div className="about-us__infromation-img">
                            <img
                                src={aboutImgBottom}
                                alt="the founder"
                                className="information__picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
