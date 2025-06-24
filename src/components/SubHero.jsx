import Button from "./Button";
// import TypingEffect from "./TypingEffect";

// Framer Motion imports & animations
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function SubHero() {
  return (
    <div className={`max-w-screen-xl w-full flex flex-col items-center text-center`}>
      <motion.p
        className="font-poppins font-normal text-xl sm:text-3xl w-1/2 h-32 my-2 text-black"
        initial="hidden"
        whileInView="show"
        variants={fadeInUp}
      >
        Welcome to the ultimate cat lovers haven! Our site is your go-to source for discovering different cat breeds and enjoying delightful, hilarious cat images. Explore the feline world with us!
      </motion.p>
      <motion.div
        className="mt-3"
        initial="hidden"
        whileInView="show"
        variants={fadeInUp}
      >
        <Button />
      </motion.div>
    </div>
  )
}

export default SubHero