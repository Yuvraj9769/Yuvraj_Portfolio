import { BsGithub } from "react-icons/bs";
import { FaAngleUp, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black w-screen h-auto px-4 py-1 md:py-2 mt-2  border-b border-b-[#9e9e9e]  flex flex-col gap-3 items-center">
      <div className="w-full h-auto px-4 py-1 mt-2 flex flex-row items-center justify-center gap-4 text-xl lg:text-3xl text-slate-50">
        <button className="hover:text-red-600 duration-300">
          <Link
            to="https://github.com/Yuvraj9769"
            target="_blank"
            rel="noopener noreferre"
          >
            <BsGithub />
          </Link>
        </button>
        <button className="hover:text-red-600 duration-300">
          <Link
            to="https://www.linkedin.com/in/yuvraj-salte-1b0a96270/"
            target="_blank"
            rel="noopener noreferre"
          >
            <FaLinkedin />
          </Link>
        </button>
        <button className="hover:text-red-600 duration-300">
          <Link
            to="https://instagram.com/mr_yuvi005"
            target="_blank"
            rel="noopener noreferre"
          >
            <RiInstagramFill />
          </Link>
        </button>
      </div>

      <button
        className="fixed bottom-10 right-10 z-40 animate-bounce text-4xl md:text-3xl bg-red-600 bg-opacity-75 inline-flex items-center justify-center h-10 w-10 rounded-md"
        onClick={scrollOnTop}
      >
        <FaAngleUp className="text-slate-50" />
      </button>

      <p className="text-slate-50 text-base md:text-lg font-semibold text-center mt-5">
        Copyright &copy; Yuvraj Salte 2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
