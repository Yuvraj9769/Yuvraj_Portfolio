import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.set(".sctrigger  > *", {
      scale: 0,
      opacity: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sctrigger",
          scroller: "body",
          toggleActions: "restart none restart none",
        },
      })
      .to(".sctrigger  > *", {
        opacity: 1,
        scale: 1,
        stagger: 0.5,
      });
  }, []);

  return (
    <div className="px-4 py-2 w-full h-auto flex flex-col gap-3 my-3 xl:gap-7">
      <p className="text-slate-50 relative text-xl text-center before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0 xl:after:h-[2px] xl:before:h-[2px]  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 xl:text-2xl">
        Contact
      </p>
      <div className="w-full sctrigger  h-auto flex flex-col gap-5 pt-2 pb-1 justify-between lg:flex-row flex-wrap items-center xl:grid xl:grid-cols-2 md:gap-7 2xl:flex 2xl:flex-row 2xl:justify-around">
        <h1 className="contacth1 text-3xl text-slate-50 font-semibold md:w-[30vw] md:text-5xl text-center xl:text-start">
          Let's Get in touch!
        </h1>
        <form className="w-full flex flex-col items-center gap-5 md:w-[65%] max-w-[600px] border border-[#dadada] px-4 py-3 rounded-lg lg:mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 bg-black border-b border-b-[#dadada] rounded outline-none focus:border-b-2 focus:border-b-red-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 bg-black border-b border-b-[#dadada] rounded outline-none focus:border-b-2 focus:border-b-red-600"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-2 bg-black border-b border-b-[#dadada] rounded outline-none focus:border-b-2 focus:border-b-red-600"
          />
          <input
            type="text"
            placeholder="Subject Of request"
            className="w-full p-2 bg-black border-b border-b-[#dadada] rounded outline-none focus:border-b-2 focus:border-b-red-600"
          />
          <textarea
            cols="8"
            rows="4"
            placeholder="Message"
            className="w-full p-2 bg-black border-b border-b-[#dadada] rounded outline-none focus:border-b-2 focus:border-b-red-600"
          ></textarea>
          <button className="border bg-stone-900 hover:bg-stone-700 border-[#dadada] rounded-lg p-2 duration-700 text-slate-50 text-xl w-[50%]">
            Submit
          </button>
        </form>

        <div className="px-3 py-1 text-slate-50 text-4xl flex items-center gap-7 lg:mx-0">
          <button className="hover:text-red-600 duration-300">
            <Link to="https://github.com/Yuvraj9769">
              <BsGithub />
            </Link>
          </button>
          <button className="hover:text-red-600 duration-300">
            <Link to="https://www.linkedin.com/in/yuvraj-salte-1b0a96270/">
              <FaLinkedin />
            </Link>
          </button>
          <button className="hover:text-red-600 duration-300">
            <MdEmail />
          </button>
          <button className="hover:text-red-600 duration-300">
            <Link to="https://instagram.com/mr_yuvi005">
              <FaInstagramSquare />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
