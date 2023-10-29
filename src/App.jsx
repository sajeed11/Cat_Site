import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Contact from "./components/Contact"
import Images from "./components/Images"
import LearnAboutCats from "./components/LearnAboutCats"


const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/images" element={<Images />} />
                <Route path="/cats" element={<LearnAboutCats />} />
            </Routes>
        </div>
    )
}

export default App