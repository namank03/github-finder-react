import PropTypes from "prop-types";
import React from "react";

export default function Button({ func, color, text, type }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={() => func?.()}
      className={`bg-${color}-700 text-${color}-50 p-3 rounded mr-3`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  func: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  func: null,
  color: "gray",
  type: "button",
};
