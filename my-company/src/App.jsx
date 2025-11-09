import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".Components/Home";
import About from ".Components/About";
import Services from ".Components/Services";
import Contact from ".Components/Contact";
import Navbar from ".Components/Navbar";
import Footer from ".Components/Footer"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="Components/" element={<Home />} />
          <Route path="Components/about" element={<About />} />
          <Route path="Components/services" element={<Services />} />
          <Route path="Components/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Only if you add the Footer component */}
    </BrowserRouter>
  );
}
export default App;
