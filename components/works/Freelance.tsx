import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Freelance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Freelance at{" "}
        <span className="text-textGreen tracking-wide">Perwira Digital</span>
      </h3>
      <p className="text-sm m-1 font-medium text-textDark">
        September 2023 - Present
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          slicing UI/UX design into code that will produce visual elements in
          the application
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          implementing clean code
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          fix bugs that appear
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelance;
