import Button from "./Button";
// import TypingEffect from "./TypingEffect";

// Framer Motion imports & animations
import { motion } from "framer-motion";

const SubHero = () => {
  return (
    <div className="max-w-screen-xl w-full flex flex-col items-center text-center">
      <motion.p
        className="font-poppins font-normal text-xl sm:text-3xl w-1/2 h-full my-2 text-black"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Welcome to the ultimate cat lovers haven! Our site is your go-to source for discovering different cat breeds and enjoying delightful, hilarious cat images. Explore the feline world with us!
      </motion.p>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Button />
      </motion.div>
    </div>
  )
}

export default SubHero