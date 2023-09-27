import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { housy, landtick, movies, simsPpob } from "@/public/assets";
import { AiOutlineGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-ato lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-9">
        {/* project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-9">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://landtick-ilhamstyd.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={landtick}
                  alt="landtick Web"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end xl:-ml-16 z-10 text-justify"
            >
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Landtick Web App</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                train ticket booking application that uses{" "}
                <span className="text-textGreen">midtrans</span> payment
                gateaway which uses the concept of{" "}
                <span className="text-textGreen">REST API</span> on the backend
                using the Golang programming language and for the frontend using
                React JS.
              </p>
              <ul className="text-xs md:text-sm font-titleFont flex gap-2 md:gap-4 text-textDark text-center">
                <li>React JS</li>
                <li>Javascript</li>
                <li>Golang</li>
                <li>Echo</li>
                <li>Midtrans</li>
                <li>Vercel deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/ilhamstyd/LANDTICK"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://landtick-ilhamstyd.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project two */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://housy-ilham.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={housy}
                alt="housy Web"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end z-10 text-justify"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Housy Web App</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
              property booking web such as hotel rooms, apartments, villas and
              so on, which uses <span className="text-textGreen">midtrans</span>{" "}
              payment gateaway which uses the concept of{" "}
              <span className="text-textGreen">REST API</span> on the backend
              using the Golang programming language and for the frontend using
              React JS.
            </p>
            <ul className="text-xs md:text-sm font-titleFont flex gap-2 md:gap-4 text-textDark text-center">
              <li>React JS</li>
              <li>Javascript</li>
              <li>Golang</li>
              <li>Echo</li>
              <li>Midtrans</li>
              <li>Vercel deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ilhamstyd/housy-app"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://housy-ilham.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* project three */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://movies-mania-one.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={movies}
                  alt="landtick Web"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end xl:-ml-16 z-10 text-justify"
            >
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Movies Mania Web</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                movie search website that I made using React JS and using API
                from <span className="text-textGreen">IMDB</span>, this website
                is very simple where the task is only to search for movies, and{" "}
                <span className="text-textGreen">I will still develop</span> in
                the future on the user interface and other functions, I want in
                the future this website not only to search for movies but also
                to play the movie for free!
              </p>
              <ul className="text-xs md:text-sm font-titleFont flex gap-2 md:gap-4 text-textDark text-center">
                <li>React JS</li>
                <li>Javascript</li>
                <li>Vercel deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/ilhamstyd/Movies-Mania"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://movies-mania-one.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Four */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://housy-ilham.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={simsPpob}
                alt="housy Web"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end z-10 text-justify"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Sims PPOB Web </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
              This is my experimental website that can purchase credit, data
              packages, electricity tokens and so on, for this website I only
              handle the frontend because I use someone else's API.
            </p>
            <ul className="text-xs md:text-sm font-titleFont flex gap-2 md:gap-4 text-textDark text-center">
              <li>React JS</li>
              <li>Javascript</li>
              <li>Vercel deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ilhamstyd/sims-ppob"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://sims-ppob-nine.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
