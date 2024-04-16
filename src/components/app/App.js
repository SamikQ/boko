import Footer from "../footer/Footer";
import Header from "../header/Header";
import AboutCreators from "../about-creators/AboutCreators";
import ShopLocations from "../shop-locations/ShopLocations";

function App() {
    return (
        <div className="App container">
            <Header />
            <ShopLocations />
            {/* <AboutCreators /> */}
            <Footer />
        </div>
    );
}

export default App;
