import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Hdi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Staff Warehouse at{" "}
        <span className="text-textGreen tracking-wide">
          PT Harmoni Dinamika Indonesia
        </span>
      </h3>
      <p className="text-sm m-1 font-medium text-textDark">
        Jan 2021 - Jan 2022
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Perform Pick and Pack activities according to the pick list and
          company SOP
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Perform daily count and stock-taking and quality control produtcs
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          monthly stock-taking
        </li>
      </ul>
    </motion.div>
  );
};

export default Hdi;
