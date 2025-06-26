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
    <motion.div
      className="max-w-screen-xl w-full flex flex-col items-center text-center"
      initial="hidden"
      whileInView="show"
      variants={fadeInUp}
    >
      <p className="font-poppins font-normal text-xl sm:text-3xl w-1/2 h-full my-2 text-black">
        Welcome to the ultimate cat lovers haven! Our site is your go-to source for discovering different cat breeds and enjoying delightful, hilarious cat images. Explore the feline world with us!
      </p>
      <div className="mt-4">
        <Button />
      </div>
    </motion.div>
  )
}

export default SubHero