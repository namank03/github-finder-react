import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, icon }) {
  return (
    <nav className="bg-gray-700 text-gray-100 p-4 flex flex-row justify-between">
      <Link to="/" className="text-bold text-xl cursor-pointer hover:text-yellow-100">
        <i className={`${icon} mr-2`} />
        {title}
      </Link>
      <div className="font-bold text-gray-400 capitalize">
        <Link to="/" className="mr-3 cursor-pointer hover:text-gray-100">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-gray-100">
          about
        </Link>
      </div>
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
