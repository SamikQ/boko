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
import Catalogue from "../catalogue/Catalogue";
import Faq from "../faq/Faq";
import CustomersContent from "../customers-content/CustomersContent";
import WeekLooks from "../week-looks/WeekLooks";

const App = () => {
    return (
        <div className="App container">
            <Header />
            {/* <WelcomeBanner /> */}
            {/* <NewArrivals /> */}
            {/* <Categories /> */}
            {/* <Featured /> */}
            {/* <LookDay /> */}
            {/* <AboutCreators /> */}
            {/* <CustomersContent /> */}
            {/* <ShopLocations /> */}
            {/* <Cart /> */}
            {/* <Catalogue /> */}
            {/* <ProductInfo /> */}
            {/* <MegaMenu /> */}
            {/* <Filter /> */}
            {/* <AboutUs /> */}
            {/* <Faq /> */}
            {/* <Swiper /> */}
            {/* <Error404Component /> */}
            {/* <ContactUs /> */}
            {/* <AboutUs /> */}
            <WeekLooks />
            <Footer />
        </div>
    );
};

export default App;
