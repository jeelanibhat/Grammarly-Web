import "./App.css";
import GoodToGreat from "./components/GoodToGreat";
import Header from "./components/Header";
import SliderTop from "./components/SliderTop";
import UpLevel from "./components/UpLevel";
import CustomerReport from "./components/CustomerReport";

function App() {
  return (
    <div className="App">
      <Header />
      <SliderTop />
      <UpLevel />
      <CustomerReport />
      <GoodToGreat />
    </div>
  );
}

export default App;
