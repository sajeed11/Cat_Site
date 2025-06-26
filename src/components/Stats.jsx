import { stats } from "../constants";

// Framer Motion imports & animations
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {stats.map((stat) => (
        <div
          className="flex-1 flex flex-row justify-center items-center m-3"
          key={stat.id}
        >
          <motion.h4
            className="font-poppins font-semibold xs:text-6xl text-[30px] xs:leading-[53px] leading-[43px] text-white"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {stat.value}
          </motion.h4>
          <motion.p
            className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {stat.title}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
