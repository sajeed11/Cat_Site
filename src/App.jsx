import { Route, Routes } from "react-router-dom"

import styles from "./styles"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Images from "./components/Images"
import LearnAboutCats from "./components/LearnAboutCats"


const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary `}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>

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