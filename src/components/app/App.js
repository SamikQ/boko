import Footer from "../footer/Footer";
import Header from "../header/Header";
import AboutCreators from "../about-creators/AboutCreators";
import ShopLocations from "../shop-locations/ShopLocations";
import Error404Component from "../error404/404NotFound";
import WelcomeBanner from "../welcome-banner/WelcomeBanner";
import NewArrivals from "../new-arrivals/NewArrivals";
import Categories from "../categories/Categories";
import Swiper from "../slider/Slider";

function App() {
    return (
        <div className="App container">
            <Header />
            <Swiper />
            {/* <NewArrivals /> */}
            {/* <Error404Component /> */}
            {/* <WelcomeBanner /> */}
            {/* <Categories /> */}
            {/* <ShopLocations /> */}
            {/* <AboutCreators /> */}
            <Footer />
        </div>
    );
}

export default App;
