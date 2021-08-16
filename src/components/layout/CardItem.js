import PropTypes from "prop-types";
import React from "react";

export default function CardItem({ label, value }) {
  return (
    <div className="flex flex-row">
      <h2 className="mr-2 font-semibold uppercase ">{label}</h2>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}

CardItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

CardItem.defaultProps = {
  value: "None",
};
