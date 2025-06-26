import styles from "../styles";
import GetLife from "./GetLife";

// Framer Motion imports & animations
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.div
      className={`bg-primary xs:bg-cat_landing bg-no-repeat bg-center 
        xs:h-[400px] sm:h-[600px] md:h-[700px] lg:h-[750px] 
        bg-cover max-w-screen-xl min-h-screen  w-full ${styles.paddingY} ${styles.paddingX} flex flex-col items-center justify-center`}
      initial="hidden"
      whileInView="show"
      variants={fadeInUp}
    >
      <GetLife />
      <div className="flex flex-col items-center space-y-5 font-poppins font-normal text-4xl sm:text-6xl md:text-7xl leading-[60px]">
        <div className="flex flex-col xs:flex-row items-center xs:space-x-4">
          <h1 className="text-white">
            The Next
          </h1>
          <h1 className="text-white">
            Generation
          </h1>
        </div>
        <h1 className="text-btnColor">
          Of Cats
        </h1>
      </div>
    </motion.div>
  );
};

export default Hero;
