import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MoreAbout from "./components/MoreAbout";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Projects />
        <About />
        {/* <MoreAbout /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
