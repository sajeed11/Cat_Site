import { Route, Routes } from "react-router-dom"

import styles from "./styles"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Contact from "./components/Contact"


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
            </Routes>

        </div>
    )
}

export default App