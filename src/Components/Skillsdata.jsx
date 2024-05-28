import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContextApi from "../store/ContextApi";

const Skillsdata = () => {
  const { ind } = useParams();
  const { skilldataInfo } = useContext(ContextApi);

  return (
    <>
      <Navbar />
      <div className="px-4 py-2 text-slate-50 my-9 bg-black w-[60%] mx-auto">
        {skilldataInfo.map((e, index) =>
          index == ind ? (
            <div key={e.id} className="flex flex-col gap-4">
              <h1 className="text-3xl text-slate-50 font-semibold xl:text-4xl">
                {e.name}
              </h1>
              <h1 className="lg:text-xl">{e.description}</h1>
              <ul className="flex flex-col items-start " key={ind}>
                <span className="text-slate-50 text-2xl">
                  Features of {e.name} : -
                </span>
                {e.features.map((elem, index) => (
                  <li className="my-4 list-decimal list-inside" key={index}>
                    {elem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </>
  );
};

export default Skillsdata;
