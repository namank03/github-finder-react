import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ name, avatarUrl }) {
  return (
    <div className="shadow p-2 hover:shadow-lg ">
      <div className="flex flex-col ">
        <img src={avatarUrl} alt="text" className="w-20 h-20 rounded-full mx-auto" />
        <h2 className="capitalize text-green-900 font-bold my-2 mx-auto">{name}</h2>
        <Link
          to={`/user/${name}`}
          className="border-2 rounded-2xl border-gray-700 px-4 m-auto hover:bg-gray-700 hover:text-gray-100">
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
