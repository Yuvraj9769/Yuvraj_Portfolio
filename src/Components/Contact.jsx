import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import gsap from "gsap";

const Contact = () => {
  const navigate = useNavigate();

  let gotoWeb = (url) => {
    navigate(url);
  };

  useEffect(() => {
    gsap.set(".contacth1", {
      x: 500,
      opacity: 0,
    });

    gsap.set("form", {
      opacity: 0,
      scale: 0,
    });

    let tl = gsap.timeline();

    tl.to(".contacth1", {
      x: 0,
      opacity: 1,
      delay: 1.5,
      duration: 0.8,
    });

    tl.to("form", {
      opacity: 1,
      scale: 1,
      delay: 0.5,
      stagger: 0.4,
      duration: 0.8,
    });
  }, []);

  return (
    <div className="px-4 py-2 w-screen h-auto flex flex-col gap-3 my-3">
      <p className="text-slate-50 relative text-xl text-center before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0 xl:after:h-[2px] xl:before:h-[2px]  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 xl:text-2xl">
        Contact
      </p>
      <div className="w-full h-auto flex flex-col gap-4 pt-2 pb-1 lg:flex-row flex-wrap md:justify-around md:items-center xl:grid xl:grid-cols-2">
        <h1 className="contacth1 text-3xl text-slate-50 font-semibold md:w-[33vw] md:text-5xl text-center ">
          Let's Get in touch!
        </h1>
        <form className="w-full flex flex-col items-center gap-5 md:w-[65%] max-w-[600px]">
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
          <button className="border border-[#dadada] rounded-lg p-2 hover:bg-teal-800 duration-700 text-slate-50 text-xl w-[50%]">
            Submit
          </button>
        </form>

        <div className="px-3 py-1 text-slate-50 text-4xl flex items-center gap-7 mx-auto">
          <button
            onClick={() => gotoWeb("https://github.com/Yuvraj9769")}
            className="hover:text-red-600 duration-300"
          >
            <BsGithub />
          </button>
          <button
            className="hover:text-red-600 duration-300"
            onClick={() =>
              gotoWeb("https://www.linkedin.com/in/yuvraj-salte-1b0a96270/")
            }
          >
            <FaLinkedin />
          </button>
          <button
            onClick={() => gotoWeb("yuvisalte1@gmail.com")}
            className="hover:text-red-600 duration-300"
          >
            <MdEmail />
          </button>
          <button
            onClick={() => gotoWeb("mr_yuvi005")}
            className="hover:text-red-600 duration-300"
          >
            <FaInstagramSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
