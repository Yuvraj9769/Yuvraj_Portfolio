import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WrapperForRouting = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WrapperForRouting;
