import { Link, NavLink } from "react-router-dom";
// import { ImCancelCircle } from "react-icons/im";
import PropTypes from "prop-types";

const Sidebar = ({ Siderbarvisible, setSiderbar }) => {
  return (
    <div
      className={`siderbar flex flex-col gap-[20px] md:hidden bg-black transition-left  duration-1000 text-2xl fixed top-0 min-h-screen w-screen ${
        Siderbarvisible ? "left-[0%] z-50" : "left-[-110%]"
      }`}
    >
      <div className="px-4 py-3 flex justify-center items-center">
        <div className="flex justify-between items-center w-full border-b border-[#dadada] pb-4">
          <h1 className="text-slate-50 text-4xl font-semibold">Yuvraj</h1>
          <p
            className="text-3xl text-red-600 border border-[#dadada] rounded p-1"
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 15.61L19.59 17l-5.01-5l5.01-5L21 8.39L17.44 12zM3 6h13v2H3zm0 7v-2h10v2zm0 5v-2h13v2z"
              ></path>
            </svg>
          </p>
        </div>
      </div>
      <ul className="flex px-[1.2rem] w-full min-h-[300px] flex-col text-slate-50 justify-between items-start text-lg sm:grid sm:grid-cols-3 sm:min-h-[150px]">
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
            to="/Experiences"
            className={(e) => {
              return e.isActive ? "text-red-600" : " ";
            }}
            onClick={() => setSiderbar(!Siderbarvisible)}
          >
            Experiences
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

Sidebar.propTypes = {
  Siderbarvisible: PropTypes.bool.isRequired,
  setSiderbar: PropTypes.func.isRequired,
};

export default Sidebar;
