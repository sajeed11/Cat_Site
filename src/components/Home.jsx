import styles from "../styles";
import Hero from "./Hero";
import Stats from "./Stats";
import Business from "./Business";
import SubHero from "./SubHero";

const Home = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center">
        <Hero />
      </section>
      <section className="bg-primary min-h-screen flex items-center justify-center">
        <SubHero />
      </section>
      <section className="bg-secondary min-h-screen flex items-center justify-center">
        <Stats />
      </section>
      <section className={`bg-primary min-h-screen ${styles.paddingX} ${styles.flexStart}`}>
        <Business />
      </section>
    </div>
  );
};

export default Home;
