import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import { Route, Routes } from "react-router-dom";
import FireflyLine from "./components/FireflyLine.jsx";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Contact />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default App;
