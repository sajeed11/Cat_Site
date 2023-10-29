import styles from "../styles"
import Hero from "./Hero"
import Stats from "./Stats"
import Business from "./Business"
import NavBar from "./NavBar"
const Home = () => {
    return (
        <div>
            <div className={`flex-col bg-cat_landing bg-cover top-0 bottom-0 max-w-screen-xl`}>
                <div className={`${styles.paddingX} ${styles.flexCenter} backdrop-blur-xl`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
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

export default Home