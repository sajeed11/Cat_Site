import styles from "../styles"

const Button = () => {
    return (
        <button
            type="button"
            className={`py-4 px-6 bg-btnColor font-poppins font-medium text-[18px] text-primay outline-none ${styles} rounded-[20px]`}
        >
            Get Started
        </button>
    )
}

export default Button