import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Images from "./components/Images";
import LearnAboutCats from "./components/LearnAboutCats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden xl:container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images" element={<Images />} />
        <Route path="/cats" element={<LearnAboutCats />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
