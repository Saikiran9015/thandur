import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import BookNow from "./components/BookNow";
import Warranty from "./components/Warranty";
import BecomePartner from "./components/BecomePartner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/become-partner" element={<BecomePartner />} />
      </Routes>
    </Router>
  );
}

export default App;
