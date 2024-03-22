import gsap from "gsap";
import { useEffect } from "react";

const Info = () => {
  let mouseMove = (e) => {
    const circle = document.querySelector(".circle");
    const circleRect = circle.getBoundingClientRect();
    circle.style.opacity = 1;
    circle.style.scale = 1;

    const offsetX = e.clientX - circleRect.left - circleRect.width / 2;
    const offsetY = e.clientY - circleRect.top - circleRect.height / 2;

    gsap.to(".circle", {
      x: `+=${offsetX}`,
      y: `+=${offsetY}`,
      duration: 0.5,
      zIndex: 3,
    });
  };

  let MouseLeave = (e) => {
    const circle = document.querySelector(".circle");
    circle.style.opacity = 0;
    circle.style.scale = 0;
  };

  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(".infoname", {
      x: -500,
      opacity: 0,
    });

    gsap.set(".webdiv > *", {
      x: 500,
      opacity: 0,
    });

    gsap.to(".webdiv > *", {
      x: 0,
      duration: 0.7,
      stagger: 0.4,
      opacity: 1,
    });

    tl.to(".infoname", {
      x: 0,
      opacity: 1,
      duration: 1.5,
    });
  }, []);

  return (
    <div
      className="cursor-default sectdiv relative bg-black w-screen lg:h-[500px] mt-4 px-1 flex justify-center items-center box-border"
      onMouseMove={mouseMove}
      onMouseLeave={MouseLeave}
    >
      <div className="circle absolute w-10 rounded-full h-10 border border-red-600 left-0 inline-flex justify-center items-center text-[3.25rem] pb-[37px] text-red-600">
        .
      </div>
      <div className="w-screen flex-col h-full lg:h-[500px] gap-7 text-wrap md:w-[90%] flex md:flex-row items-center justify-around ">
        <div className="gap-8 w-screen px-4 py-2 flex md:gap-7 flex-col">
          <div className="webdiv  px-7 py-3 flex lg:flex-row md:gap-9 flex-col gap-4">
            <h1 className="md:text-4xl text-2xl text-nowrap text-slate-50 font-[400]">
              Web Developer
            </h1>
            <img src="https://porichiti.vercel.app/img/arrow-icon.png" alt="" />
          </div>
          <h1 className="infoname text-7xl md:text-[125px] text-slate-50 font-semibold">
            I'm Yuvraj Salte
          </h1>
        </div>
        <div className="imgdiv md:h-full relative inline-flex justify-center items-center before:content-[''] before:bg-red-600 before:rounded-sm before:h-7 before:w-7 before:absolute before:left-3 before:top-16 before:animate-spin-slow after:bg-slate-50 after:h-5 after:w-5 after:absolute after:rounded-sm after:left-7 after:top-28 after:animate-spin-slow">
          <img
            className=" rounded-xl px-2 py-2 border border-[#dadada]"
            src="./public/YuviIMG-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
