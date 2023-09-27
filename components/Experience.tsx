import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Hdi from "./works/Hdi";
import Freelance from "./works/Freelance";

const Experience = () => {
  const [workHdi, setWorkHdi] = useState(true);
  const [freelance, setFreelance] = useState(false);

  const handleWork = () => {
    setFreelance(true);
    setWorkHdi(false);
  };
  const handleWorkHdi = () => {
    setFreelance(false);
    setWorkHdi(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleWorkHdi}
            className={`${
              workHdi
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Staff Warehouse
          </li>
          <li
            onClick={handleWork}
            className={`${
              freelance
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelance
          </li>
        </ul>
        {workHdi && <Hdi />}
        {freelance && <Freelance />}
      </div>
    </section>
  );
};

export default Experience;
