import React from "react";

const Aboutme = () => {
  return (
    <div className=" w-screen h-auto px-2 py-1 my-5 flex flex-col gap-3">
      <p className="text-slate-50 relative text-xl xl:after:h-[2px] xl:before:h-[2px] text-center xl:text-2xl before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0">
        About Me
      </p>
      <div className="w-screen h-auto text-slate-50 flex flex-col gap-4 py-2">
        <p className="font-semibold text-4xl">About Me</p>
        <p className="text-lg">
          Hi, my name is Yuvraj Sanjay Salte. I am an aspiring web developer
          with a strong passion for creating engaging and user-friendly digital
          experiences. I am eager to learn and refine my skills in coding,
          designing, and optimizing websites to deliver seamless solutions. With
          a fresh perspective and a drive to innovate, I am committed to
          researching and understanding industry trends to create captivating
          online platforms. My goal is to create dynamic and impactful websites
          that not only meet user needs but also contribute to achieving
          business objectives.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
