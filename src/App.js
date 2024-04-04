import Header from "./components/header/Header";
import "./App.css";
import Title from "./components/title/Title";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <Title />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
