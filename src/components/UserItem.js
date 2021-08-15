import PropTypes from "prop-types";
import React from "react";

export default function UserItem({ name, avatarUrl, htmlUrl }) {
  return (
    <div className="bg-white-100 shadow p-2 hover:shadow-lg ">
      <div className="flex flex-col ">
        <img src={avatarUrl} alt="text" className="w-20 h-20 rounded-full mx-auto" />
        <h2 className="capitalize text-green-900 font-bold my-2 mx-auto">{name}</h2>
        <a
          href={htmlUrl}
          className="border-2 rounded-2xl border-gray-700 px-4 m-auto hover:bg-gray-700 hover:text-gray-100">
          More
        </a>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
