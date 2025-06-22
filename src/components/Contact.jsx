import styles from "../styles";
import TypingEffect from "./TypingEffect";
import Button from "./Button";

const Contact = () => {
  return (
    <div>
      <div
        className={`${styles.flexStart} bg-cat_landing2 bg-cover top-0 bottom-0 max-w-screen-xl`}
      >
        <div className={`${styles.boxWidth} `}>
          <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY} `}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
              <h1 className=" my-4 text-white font-poppins font-bold self-center text-5xl">
                About US
              </h1>
              <TypingEffect
                text="Welcome to the ultimate cat lovers haven! Our site is your go-to source for discovering different cat breeds and enjoying delightful, hilarious cat images. Explore the feline world with us!"
                speed={30}
              />
              <div className="mt-3">
                <Button />
              </div>
            </div>
          </section>
          npm
        </div>
      </div>
    </div>
  );
};

export default Contact;
