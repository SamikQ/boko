import Footer from "../footer/Footer";
import Header from "../header/Header";
import AboutCreators from "../about-creators/AboutCreators";
import ShopLocations from "../shop-locations/ShopLocations";
import Error404Component from "../error404/404NotFound";

function App() {
    return (
        <div className="App container">
            <Header />
            {/* <Error404Component /> */}
            {/* <ShopLocations /> */}
            <AboutCreators />
            <Footer />
        </div>
    );
}

export default App;
