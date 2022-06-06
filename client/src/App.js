import "./App.css";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroMain from "./components/Hero/HeroMain";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-white">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <HeroHeader></HeroHeader>
        <HeroMain></HeroMain>
      </div>
    </div>
  );
}

export default App;
