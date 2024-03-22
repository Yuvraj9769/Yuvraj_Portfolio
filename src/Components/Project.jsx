import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    gsap.set("ul > li", {
      scale: 0,
      opacity: 0,
    });

    tl.to("ul li", {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "li",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="bg-black px-3 py-2 flex flex-col gap-3 md:gap-5 my-3">
      <p className="text-slate-50 relative text-xl xl:text-2xl text-center before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] xl:after:h-[2px] xl:before:h-[2px] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0">
        Projects
      </p>

      <div className=" w-full h-auto flex flex-col gap-3 md:flex-row">
        <div className=" flex flex-col gap-2">
          <h1 className="text-4xl text-slate-50 py-1 font-semibold">
            Projects : -
          </h1>
          <ul className="text-slate-50">
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Amazon_clone-using-Tailwind-CSS
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Spotify_Clone
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Flipkart-Clone-Using-Html-Tailwind-css-and-Javascript/blob/main/dist/flipkart.js
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Wow-clone
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Netflix-clone-reactjs
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Landing_page
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer">
              https://github.com/Yuvraj9769/Portfolio
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-slate-50">
          <h1 className="text-4xl py-1 font-semibold">Live Projects : -</h1>
          <ul>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer">
              https://letsspotify.freewebhostmost.com/
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer">
              https://flipkartshopping.netlify.app/
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer">
              https://yuvraj9769.github.io/Wow-clone/
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer">
              https://yuvraj9769.github.io/Landing_page/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
