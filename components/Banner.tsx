import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
      lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ilham Setyadji Hermawan.
        <span className="text-textDark mt-2 lgl:mt-4">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "I am Fullstack Developer",
              1000,
              "I am Frontend Developer",
              1000,
              "I am Backend Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium text-justify"
      >
        I am a junior Fullstack Web Developer with less then a year of
        experience in React and Golang. I have a strong foundation in front-end
        & back-end development and am skilled in creating user-friendly and
        responsive web applications using React and its ecosystem.
        <br />
        <a href="#about">
          <span
            className="text-textGreen inline-flex relative cursor-pointer
          h-7 overflow-x-hidden group"
          >
            Learn More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1
            -translate-x-[110%] group-hover:translate-x-0 transition-transform
            duration-500"
            ></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen
      rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        <a href="#project">Check out my Project</a>
      </motion.button>
    </section>
  );
};

export default Banner;
