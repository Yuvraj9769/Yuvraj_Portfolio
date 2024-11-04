import PropTypes from "prop-types";

const WrapperForProject = ({ children }) => {
  return (
    <div className="w-[95%] flex flex-col items-center gap-1  mx-auto">
      {children}
    </div>
  );
};

WrapperForProject.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperForProject;
