import PropTypes from "prop-types";
import { features } from "../constants";
import styles from "../styles";
import layout from "../layout";
import "../App.css";

const FeatureCard = ({ title, content, icon, index }) => (
  <div
    className={`flex flex-row p-6 rounded-xl cursor-pointer ${index !== features.length - 1 ? "mb-6" : "mb-0"
      } bg-primary hover:bg-secondary transition-all duration-300 ease-in-out shadow-lg`}
  >
    <div
      className="w-16 h-16 rounded-full flex justify-center items-center"
    >
      <img src={icon} alt="icon" className="w-3/4 h-3/4 object-cover" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-btnColor text-xl leading-6 mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-black text-base leading-6 mb-1">
        {content}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold text-base sm:text-5xl w-full text-btnColor">
          You care for the cats,
          <br className="sm:block hidden" />
          we’ll handle the rest.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          With the right tools and advice, you can ensure your cat lives a happy, healthy life — from proper nutrition to regular vet visits. But with so many products and tips out there, we’re here to guide you.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            content={feature.content}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
