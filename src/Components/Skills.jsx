import React from "react";
import { skilldataInfo } from "./Skillsdata";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="my-3 px-3 py-2 w-screen h-auto flex flex-col gap-4">
      <p className="text-slate-50 relative text-xl text-center before:absolute xl:text-2xl before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 xl:after:h-[2px] xl:before:h-[2px]">
        Skills
      </p>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6 items-center md:justify-center py-3 px-2 ">
        {skilldataInfo.map((e) => (
          <div
            className="px-4 py-3 rounded-lg shadow-md shadow-gray-400 flex flex-col items-center justify-between gap-5 border hover:cursor-pointer w-[360px] h-[474px] border-[#dadada] lg:py-1 md:w-[310px] lg:h-[380px]"
            key={e.id}
          >
            <img
              src={e.url}
              alt=""
              className="rounded-lg h-[180px] xl:h-[130px]"
            />
            <h3 className="text-slate-50 text-2xl font-semibold">{e.name}</h3>
            <p className="text-xl scrnone text-slate-50 xl:text-lg lg:h-[170px] lg:text-ellipsis overflow-scroll">
              {e.description}
            </p>
            <button className="bg-red-600 px-5  py-1 border-none rounded-lg hover:bg-red-700 text-slate-50">
              <Link to={`/Skills/${e.id}`}>Read More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
