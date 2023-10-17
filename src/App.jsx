import styles from "./styles"

import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            <div className={`  ${styles.flexStart} `}>
                <div className={`${styles.boxWidth} bg-cat_landing bg-cover`}>
                    <Hero />
                </div>
            </div>
        </div>
    )
}

export default App