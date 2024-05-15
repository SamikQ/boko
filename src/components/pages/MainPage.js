import MegaMenu from "../mega-menu/MegaMenu";
import WelcomeBanner from "../welcome-banner/WelcomeBanner";
import NewArrivals from "../new-arrivals/NewArrivals";
import Categories from "../categories/Categories";
import Featured from "../featured/Featured";
import LookDay from "../lookDay/LookDay";
import AboutCreators from "../about-creators/AboutCreators";
import CustomersContent from "../customers-content/CustomersContent";
import ShopLocations from "../shop-locations/ShopLocations";

const MainPage = () => {
    return (
        <>
            {/* <MegaMenu /> */}
            <WelcomeBanner />
            <NewArrivals />
            <Categories />
            <Featured />
            <LookDay />
            <AboutCreators />
            <CustomersContent />
            <ShopLocations />
        </>
    );
};

export default MainPage;
