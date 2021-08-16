import PropTypes from "prop-types";
import React from "react";

export default function Button({ htmlUrl, color, text }) {
  return (
    <a
      href={htmlUrl}
      className={`border-2 rounded-xl border-${color}-700 px-4 py-1 m-auto hover:bg-${color}-700 hover:text-${color}-100`}>
      {text}
    </a>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  htmlUrl: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  color: "gray",
  text: "click here",
  htmlUrl: "#",
};
