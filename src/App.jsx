import styles from "./styles"

import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"


const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>

            <div className={`  ${styles.flexStart} bg-cat_landing bg-cover top-0 bottom-0 max-w-screen-xl;`}>
                <div className={`${styles.boxWidth} `}>
                    <Hero />
                </div>
            </div>

            <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats /> <Business />
                </div>
            </div>
        </div>
    )
}

export default App