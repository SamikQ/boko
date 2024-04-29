import bg from '../../resources/img/backgrounds/bg-404.png';

const Error404Component = () => {
    return (
        <section className="error__component">
            <div  className='error__component-bg'/>
            <div className="not-found">
                <div className="not-found__menu">
                    <div className="not-found__title">
                        <h2 className="not-found__title-text">404</h2>
                    </div>
                    <p className="not-found__menu-text">
                        Ой, леле, ти либонь заблукала - такої сторінки немає на
                        нашому сайті. Давай спробуємо знову.
                    </p>
                    <div className="not-found__menu-btns">
                        <button className="home__button btn btn-black">Домашня сторінка</button>
                        <button className="all-products__button btn">Усі продукти</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404Component;
