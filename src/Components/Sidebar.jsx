import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = ({ Siderbarvisible, setSiderbar }) => {
  return (
    <div
      className={`siderbar flex flex-col gap-[35px] md:hidden bg-black transition-left  duration-1000 text-2xl fixed top-0 h-screen w-screen ${
        Siderbarvisible ? "left-[0%] z-50" : "left-[-110%]"
      }`}
    >
      <div className="px-4 py-3 flex justify-center items-center">
        <div className="flex justify-between items-center w-full border-b border-[#dadada] pb-6">
          <h1 className="text-slate-50 text-4xl font-semibold">Yuvraj</h1>
          <p
            className="text-3xl text-red-600"
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            <ImCancelCircle />
          </p>
        </div>
      </div>
      <ul className="flex px-[1.2rem] sm:flex-row w-full min-h-[300px] flex-col text-slate-50 justify-between items-start text-lg">
        <li>
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Aboutme"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Project"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Skills"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            Skills
          </NavLink>
        </li>
        <button
          onClick={() => setSiderbar(!Siderbarvisible)}
          className="border border-[#dadada] rounded px-4 py-2 transition-all hover:bg-slate-50 hover:text-red-600 duration-700"
        >
          <Link to="https://drive.google.com/file/d/1GeKEjpZGwUxFrhPKSRxxTloUCRkdUdJf/view?usp=sharing">
            Resume/CV
          </Link>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
