import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const WrapperForRouting = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

WrapperForRouting.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperForRouting;
