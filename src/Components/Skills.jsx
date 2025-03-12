import { useContext } from "react";
import ContextApi from "../store/ContextApi";

const Skills = () => {
  const { skilldataInfo } = useContext(ContextApi);
  return (
    <div className="my-3 px-3 py-2 bg-black w-full h-auto flex flex-col gap-4">
      <p className="relative text-red-600 text-xl xl:text-2xl mb-2 before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] xl:after:h-[2px] xl:before:h-[2px] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 before:hidden sm:before:block after:hidden sm:after:block text-start sm:text-center">
        Skills
      </p>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6 xl:gap-8 2xl:gap-10 items-center md:justify-center py-3 px-2 ">
        {skilldataInfo.map((e) => (
          <div
            className="px-4 py-3 rounded-lg shadow-lg shadow-slate-800 flex flex-col items-center justify-between  border hover:cursor-pointer hover:scale-95 duration-500 w-[280px] xl:gap-5 border-[#dadada] lg:py-4 h-[280px] lg:h-[250px]"
            key={e.id}
          >
            <img
              src={e.url}
              alt=""
              className="rounded-lg h-[180px] xl:h-[130px]"
            />
            <h3 className="text-slate-50 text-2xl font-semibold">{e.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
