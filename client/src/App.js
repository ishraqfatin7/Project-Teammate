import "./App.css";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroMain from "./components/Hero/HeroMain";
import Navbar from "./components/Navbar/Navbar";
import Sidenav from "./components/Navbar/Sidenav";
import Footer from "./components/Footer";
const navs = [
  {
    item: "Sign In",
  },
  { item: "Sign Up" },
  { item: "Create a team" },
  { item: "About Us" },
];

function App() {
  return (
    <div className="drawer dark:bg-slate-900 min-w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <div>
          <Navbar navs={navs} />
        </div>
        <div>
          <HeroHeader></HeroHeader>
          <HeroMain></HeroMain>
          <Footer />
        </div>
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}

export default App;
