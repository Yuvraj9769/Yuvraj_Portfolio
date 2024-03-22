import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(["nav h1", "nav .ul li", "nav .ul button"], {
      y: -80,
    });

    tl.to(["nav h1", "nav .ul li", "nav .ul button"], {
      y: 0,
      delay: 0.5,
      stagger: 0.4,
    });
  }, []);

  const [Siderbarvisible, setSiderbar] = useState(false);

  return (
    <nav className="bg-black w-screen box-border sticky top-0 border-b z-50 border-b-[#dadada] md:px-1 py-3 pb-8 md:pb-3 flex md:justify-around items-center justify-between px-2">
      <h1 className="text-slate-50 text-4xl font-semibold">Yuvraj</h1>
      <ul className="ul md:flex w-[600px] text-slate-50 justify-between items-center text-lg hidden">
        <li>
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
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
          >
            Skills
          </NavLink>
        </li>
        <button className="border border-[#dadada] rounded px-4 py-2 transition-all hover:bg-slate-50 hover:text-red-600 duration-700">
          <Link to="./public/Yuvraj Salte (1) - Copy.pdf">Resume/CV</Link>
        </button>
      </ul>
      <Sidebar Siderbarvisible={Siderbarvisible} setSiderbar={setSiderbar} />
      <button
        onClick={() => setSiderbar(!Siderbarvisible)}
        className="md:hidden text-red-600 text-2xl border border-[#dadada] rounded px-2 py-1"
      >
        <FaBarsStaggered />
      </button>
    </nav>
  );
};

export default Navbar;
