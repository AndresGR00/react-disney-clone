import PropTypes from "prop-types";

const NavButton = ({ icon, name }) => {
  return (
    <button className="dark:bg-gray-900 dark:hover:bg-gray-800 bg-slate-400 hover:bg-slate-500 rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-semibold">
      <span className="mr-[10px]">
        <img src={icon} alt={name} className="max-w-[25px]"/>
      </span>
      {name}
    </button>
  );
};

NavButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default NavButton;
