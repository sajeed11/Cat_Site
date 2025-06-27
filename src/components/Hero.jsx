import styles from "../styles";
import GetLife from "./GetLife";

// Framer Motion imports & animations
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className={`bg-primary xs:bg-cat_landing bg-no-repeat bg-center 
        xs:h-[400px] sm:h-[600px] md:h-[700px] lg:h-[750px] 
        bg-cover max-w-screen-xl min-h-screen  w-full ${styles.paddingY} ${styles.paddingX} flex flex-col items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <GetLife />
      </motion.div>
      <div className="flex flex-col items-center space-y-5 font-poppins font-normal text-4xl sm:text-6xl md:text-7xl leading-[60px]">
        <div className="flex flex-col xs:flex-row items-center xs:space-x-4">
          <motion.h1
            className="text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            The Next
          </motion.h1>
          <motion.h1
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Generation
          </motion.h1>
        </div>
        <motion.h1
          className="text-btnColor"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          viewport={{ once: true }}
        >
          Of Cats
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
