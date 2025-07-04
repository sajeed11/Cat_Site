import PropTypes from "prop-types";
import { features } from "../constants";
import styles from "../styles";
import layout from "../layout";
import Button from "./Button";
import "../App.css";

const FeatureCard = ({ title, content, icon, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1">
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
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we will handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button className="mt-4" />
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
