import logoW from "../../resources/img/boko-logo-w.png"

const Footer = () => {
    return (
        <footer>
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-list-item">Про нас</li>
                    <li className="footer__nav-list-item">Каталог</li>
                    <li className="footer__nav-list-item">Коллекції</li>
                </ul>
            </nav>
            <div className="footer__description">
                <div className="footer__description-logo">
                    <img src={logoW} alt="boko logo white" className="footer__description-logo-img"/>
                </div>
                <p className="footer__description-text">
                    BOKO is your destination for designer and comfortable clothes for any occasion. We use only natural fabrics and pay great attention to details.
                </p>
            </div>
            <div className="footer__social">
                <h3 className="footer__social-title">Соціальні мережі</h3>
                <nav className="footer__social-nav">
                    <ul className="footer__social-list">
                        <li className="footer__social-list-item">Instagram</li>
                        <li className="footer__social-list-item">Facebook</li>
                        <li className="footer__social-list-item">Twitter</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;