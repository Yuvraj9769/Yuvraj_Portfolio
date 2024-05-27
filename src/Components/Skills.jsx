import React from "react";
import { skilldataInfo } from "./Skillsdata";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="my-3 px-3 py-2 bg-black w-full h-auto flex flex-col gap-4">
      <p className="text-red-600  relative text-xl text-center before:absolute xl:text-2xl before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 xl:after:h-[2px] xl:before:h-[2px]">
        Skills
      </p>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6 xl:gap-8 2xl:gap-10 items-center md:justify-center py-3 px-2 ">
        {skilldataInfo.map((e) => (
          <div
            className="px-4 py-3 rounded-lg shadow-md shadow-gray-700 flex flex-col items-center justify-between  border hover:cursor-pointer hover:scale-95 duration-500 w-[280px] h-[465px] xl:gap-5 border-[#dadada] lg:py-4 lg:h-[460px]"
            key={e.id}
          >
            <img
              src={e.url}
              alt=""
              className="rounded-lg h-[180px] xl:h-[130px]"
            />
            <h3 className="text-slate-50 text-2xl font-semibold">{e.name}</h3>
            <p className="text-base scrnone text-slate-50 xl:text-lg lg:h-[170px] lg:text-ellipsis overflow-scroll">
              {e.description}
            </p>
            <button className="bg-slate-50 text-black px-5  py-1 border-none rounded-lg hover:bg-slate-100">
              <Link to={`/Skills/${e.id}`}>Read More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
