import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black w-screen h-auto px-4 py-1 mt-2  border-b border-b-[#dadada]  flex flex-col gap-3 xl:gap-7 items-center">
      <div className="w-full h-auto px-4 py-1 mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:flex lg:flex-row lg:justify-around lg:items-center">
        <div className="first text-slate-50">
          <p className=" cursor-pointer hover:text-green-600 duration-500 font-semibold text-2xl m-3">
            Useful Links
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
          <p className=" cursor-pointer hover:text-red-600 duration-500 m-3">
            Marketing
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
          <p className=" cursor-pointer hover:text-green-600 duration-500 m-3">
            Get App
          </p>
          <img
            className="m-3 hover:cursor-pointer"
            src="https://porichiti.vercel.app/img/play-store.png"
            alt=""
          />
          <img
            className="m-3 hover:cursor-pointer"
            src="https://porichiti.vercel.app/img/app-store.png"
            alt=""
          />
        </div>
      </div>
      <button
        className="fixed bottom-10 z-40 animate-bounce text-4xl md:text-3xl h-10 w-10 rounded-full duration-0"
        onClick={scrollOnTop}
      >
        <FaArrowAltCircleUp className="text-slate-50" />
      </button>

      <p className="text-slate-50 text-xl font-semibold text-center">
        Copyright &copy; Yuvraj Salte 2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
