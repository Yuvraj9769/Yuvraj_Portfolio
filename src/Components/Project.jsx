import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    gsap.set(".projul > li", {
      scale: 0,
      opacity: 0,
    });

    gsap.to(".projul li", {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projul",
        scroller: "body",
        start: "top center",
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <div className="w-full bg-black px-3 py-2 flex flex-col gap-3 md:gap-5 my-3">
      <p className="text-red-600 relative text-xl xl:text-2xl text-center before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] xl:after:h-[2px] xl:before:h-[2px] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0">
        Projects
      </p>

      <div className=" w-full h-auto flex flex-col gap-4 md:flex-row 2xl:justify-around lg:justify-between">
        <div className=" flex flex-col gap-2 lg:max-w-[65%] ">
          <h1 className="text-4xl text-slate-50 py-1 font-semibold">
            Projects : -
          </h1>
          <ul className="text-slate-50 projul ">
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Amazon_clone-using-Tailwind-CSS">
                https://github.com/Yuvraj9769/Amazon_clone-using-Tailwind-CSS
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Spotify_Clone">
                https://github.com/Yuvraj9769/Spotify_Clone
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Flipkart-Clone-Using-Html-Tailwind-css-and-Javascript/blob/main/dist/flipkart.js">
                https://github.com/Yuvraj9769/Flipkart-Clone-Using-Html-Tailwind-css-and-Javascript/blob/main/dist/flipkart.js
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Wow-clone">
                https://github.com/Yuvraj9769/Wow-clone
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Netflix-clone-reactjs">
                https://github.com/Yuvraj9769/Netflix-clone-reactjs
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Landing_page">
                https://github.com/Yuvraj9769/Landing_page
              </Link>
            </li>
            <li className="my-3 hover:text-red-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://github.com/Yuvraj9769/Portfolio">
                https://github.com/Yuvraj9769/Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-slate-50 lg:pr-4">
          <h1 className="text-4xl py-1 font-semibold">Live Projects : -</h1>
          <ul className="projul">
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://letsspotify.freewebhostmost.com/">
                https://letsspotify.freewebhostmost.com/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://yuvicalendly.netlify.app/">
                https://yuvicalendly.netlify.app/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://yuvifoodrecipe.netlify.app/">
                https://yuvifoodrecipe.netlify.app/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://flipkartshopping.netlify.app/">
                https://flipkartshopping.netlify.app/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://yuvraj9769.github.io/Wow-clone/">
                https://yuvraj9769.github.io/Wow-clone/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://yuvraj9769.github.io/Landing_page/">
                https://yuvraj9769.github.io/Landing_page/
              </Link>
            </li>
            <li className="my-3 hover:text-green-600 duration-300  cursor-pointer whitespace-normal break-words">
              <Link to="https://yuvitodo.netlify.app/">
                https://yuvitodo.netlify.app
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
