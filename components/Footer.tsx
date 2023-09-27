import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div
      className="hidden mdl:inline-flex xl:hidden items-center justify-center
  w-full py-6 gap-4"
    >
      <a href="https://linkedin.com/in/ilham-setyadji" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
        hover:border-textGreen hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://github.com/ilhamstyd" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
        hover:border-textGreen hover:text-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <TbBrandGithub />
        </span>
      </a>
    </div>
  );
};

export default Footer;
