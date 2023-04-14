import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

// colon on line 15 represents the params creating a property for the object

export default App;
