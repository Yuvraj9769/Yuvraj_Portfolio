import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { nanoid } from "nanoid";

const Navbar = () => {
  const [Siderbarvisible, setSiderbar] = useState(false);

  const navListArr = [
    { id: nanoid(), name: "Home", path: "/" },
    { id: nanoid(), name: "About Me", path: "/AboutMe" },
    { id: nanoid(), name: "Experiences", path: "/Experiences" },
    { id: nanoid(), name: "Projects", path: "/Project" },
    { id: nanoid(), name: "Skills", path: "/Skills" },
  ];

  return (
    <nav className="bg-black w-full box-border border-b z-50 border-b-[#dadada] md:px-1 py-3 pb-4 md:pb-3 flex items-center justify-between px-2 sticky top-0">
      <h1 className="navh1 text-slate-50 text-4xl font-semibold md:px-6">
        Yuvraj
      </h1>
      <ul className="ul md:flex w-[650px] text-slate-50 justify-between 2xl:w-[40%] max-w-[650px] items-center text-lg hidden md:px-6">
        {navListArr.map((e) => (
          <li key={e.id}>
            <NavLink
              to={e.path}
              className={(e) => {
                return `hover:text-red-600 duration-500 ${
                  e.isActive ? "text-red-600" : " "
                }`;
              }}
            >
              {e.name}
            </NavLink>
          </li>
        ))}
        <button className="navbtn border border-[#dadada] rounded px-4 py-2 transition-colors hover:bg-slate-50 hover:text-red-600 duration-700">
          <Link
            to="https://drive.google.com/file/d/1De1Rop8AhfgGD0bQ-QQ1v-K13H9GDYVt/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume/CV
          </Link>
        </button>
      </ul>
      <Sidebar Siderbarvisible={Siderbarvisible} setSiderbar={setSiderbar} />
      <button
        onClick={() => setSiderbar(!Siderbarvisible)}
        className="md:hidden text-red-600 text-xl border border-[#dadada] rounded px-2 py-1"
      >
        <FaBarsStaggered />
      </button>
    </nav>
  );
};

export default Navbar;
