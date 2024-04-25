import Footer from "../footer/Footer";
import Header from "../header/Header";
import AboutCreators from "../about-creators/AboutCreators";
import ShopLocations from "../shop-locations/ShopLocations";
import Error404Component from "../error404/404NotFound";
import WelcomeBanner from "../welcome-banner/WelcomeBanner";
import NewArrivals from "../new-arrivals/NewArrivals";
import Categories from "../categories/Categories";
import Swiper from "../slider/Slider";
import AboutUs from "../about-us/AboutUs";
import Featured from "../featured/Featured";
import Filter from "../filter/Filter";
import MegaMenu from "../mega-menu/MegaMenu";
import ProductInfo from "../product-info/ProductInfo";
import Cart from "../cart/Cart";
import ContactUs from "../contact-us/ContactUs";
import LookDay from "../lookDay/LookDay";

const App = () => {
    return (
        <div className="App container">
            <Header />
            {/* <WelcomeBanner />
            <NewArrivals />
            <Categories />
            <Featured />
            <AboutCreators /> */}
            <LookDay />
            {/* <ContactUs /> */}
            {/* <Cart /> */}
            {/* <ProductInfo /> */}
            {/* <MegaMenu /> */}
            {/* <Filter /> */}
            {/* <AboutUs/> */}
            {/* <Swiper /> */}
            {/* <Error404Component /> */}
            {/* <ShopLocations /> */}
            {/* <Footer /> */}
            {/* <AboutUs />
            <Error404Component /> */}
        </div>
    );
};

export default App;
