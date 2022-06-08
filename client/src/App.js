import "./App.css";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroMain from "./components/Hero/HeroMain";
import Navbar from "./components/Navbar/Navbar";
import Sidenav from "./components/Navbar/Sidenav";
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
    <div className="drawer dark:bg-slate-900">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div className="drawer-content bg-white">
        <div>
          <Navbar navs={navs} />
        </div>
        <div>
          <HeroHeader></HeroHeader>
          <HeroMain></HeroMain>
        </div>
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}

export default App;
