import React from "react";

const WrapperForProject = ({ children }) => {
  return (
    <div className="w-[95%] flex flex-col items-center gap-1  mx-auto">
      {children}
    </div>
  );
};

export default WrapperForProject;
