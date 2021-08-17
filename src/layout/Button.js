import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";

export default function Button({ type, color, text, func }) {
  const dispatch = useDispatch();
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={() => dispatch(func())}
      className={`border-2 border-${color}-700 p-2 m-4 rounded-lg text-center hover:bg-${color}-700 hover:text-${color}-50 text-lg`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  func: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: "gray",
  text: "click me",
  type: "button",
};
