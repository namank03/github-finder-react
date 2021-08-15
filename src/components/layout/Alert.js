import PropTypes from "prop-types";
import React from "react";

export default function Alert({ alert }) {
  return (
    <h1 className="border-t-4 border-red-400 p-16 m-4 text-center text-bold text-red-700 text-xl">
      {alert}
    </h1>
  );
}

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
};
