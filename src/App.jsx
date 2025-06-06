import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Industries from "./Components/Industries";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
