import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black w-screen h-auto px-4 py-1 mt-2 grid grid-cols-2 gap-3 border-b border-b-[#dadada] md:grid-cols-3 lg:grid-cols-4">
      <div className="first text-slate-50">
        <p className=" cursor-pointer hover:text-green-600 duration-500 font-semibold text-2xl m-3">
          Useful Links
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Marketing
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Product Design
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Web Design
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Development
        </p>
      </div>
      <div className="first text-slate-50">
        <p className=" cursor-pointer hover:text-green-600  duration-500 font-semibold text-2xl m-3">
          Company
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          IT Colsulting
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          About Us
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Latest Blogs
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Contact Us
        </p>
      </div>
      <div className="first text-slate-50">
        <p className=" cursor-pointer hover:text-green-600  duration-500 font-semibold text-2xl m-3">
          Solution
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Help
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Support
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Clients
        </p>
        <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
          Contacts
        </p>
      </div>
      <div className="first text-slate-50">
        <p className=" cursor-pointer hover:text-green-600  duration-500 m-3">
          Get App
        </p>
        <img
          className="m-3"
          src="https://porichiti.vercel.app/img/play-store.png"
          alt=""
        />
        <img
          className="m-3"
          src="https://porichiti.vercel.app/img/app-store.png"
          alt=""
        />
      </div>

      <button className="bg-slate-950 text-slate-50 fixed top-[90%] left-[50%] z-50 animate-bounce text-4xl md:text-3xl h-8 w-8 inline-flex items-center justify-center rounded-full">
        <Link onClick={scrollOnTop}>
          <FaArrowAltCircleUp />
        </Link>
      </button>
    </footer>
  );
};

export default Footer;
