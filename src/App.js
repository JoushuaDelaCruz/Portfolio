import About from "./components/About";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks />
    </main>
  );
};

export default App;
