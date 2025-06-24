import styles from "../styles";
import Hero from "./Hero";
import Stats from "./Stats";
import Business from "./Business";
import SubHero from "./SubHero";

const Home = () => {
  return (
    <div>
      <section className=" min-h-screen flex flex-col justify-center">
        <Hero />
      </section>
      <section className="bg-primary min-h-screen flex flex-col justify-center">
        <SubHero />
      </section>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business />
        </div>
      </div>
    </div>
  );
};

export default Home;
