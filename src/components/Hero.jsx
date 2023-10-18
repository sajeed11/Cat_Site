import styles from "../styles"
import Button from "./Button"
import GetLife from "./GetLife"
import TypingEffect from "./TypingEffect"

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <GetLife />
                <div className="flex flex-row justify-between items-center w-full mt-6">
                    <h1 className="mt-3 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[85px] leading-[60px]">
                        The Next Generation<br className="sm:block hidden" />{" "}
                    </h1>
                </div>
                <h1 className="mt-3 font-poppins font-semibold ss:text-[68px] text-[52px] text-btnColor ss:leading-[85.8px] leading-[60px] w-full">
                    Of Cats
                </h1>
                <TypingEffect text='Our team of experts uses a methodology to identify the credit cards most
                    likely to fit your needs. We examine annual percentage rates, annual
                    fees.' speed={30} />
                <div className="mt-6">

                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Hero