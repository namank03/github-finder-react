import PropTypes from "prop-types";
import React from "react";

export default function Navbar({ title, icon }) {
  return (
    <nav className="bg-gray-700 text-gray-100 p-4">
      <h4 className="text-bold text-xl">
        <i className={`${icon} mr-2`} />
        {title}
      </h4>
    </nav>
  );
}

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  icon: "",
};
