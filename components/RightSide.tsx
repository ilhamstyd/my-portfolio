import React from "react";

const RightSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-6
  text-textLight"
    >
      <a href="mailto:ilhamsetyadjih@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          ilhamsetyadjih@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex mt-14"></span>
    </div>
  );
};

export default RightSide;
