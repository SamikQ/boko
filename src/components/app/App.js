import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import {
    MainPage,
    CataloguePage,
    AboutUsPage,
    ContactUsPage,
    LookOfTheDayPage,
    FaqPage,
    NotFoundPage,
    TempPage,
} from "../pages";
import Cart from "../cart/Cart";
import MegaMenu from "../mega-menu/MegaMenu";

const App = () => {
    return (
        <Router>
            <div className="App container">
                <Header />
                <Cart />
                <MegaMenu />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route
                            path="/catalogue"
                            element={<CataloguePage />}></Route>
                        <Route
                            path="/about-us"
                            element={<AboutUsPage />}></Route>
                        <Route
                            path="/contacts"
                            element={<ContactUsPage />}></Route>
                        <Route
                            path="/day-look"
                            element={<LookOfTheDayPage />}></Route>
                        <Route path="/faq" element={<FaqPage />}></Route>
                        <Route path="*" element={<NotFoundPage />}></Route>
                        <Route path="/temp" element={<TempPage />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
