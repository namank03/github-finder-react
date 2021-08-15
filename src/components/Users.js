import PropTypes from "prop-types";
import React from "react";
import UserItem from "./UserItem";

export default function Users({ users, found }) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-10">
        {found ? (
          users?.map((user) => (
            <UserItem
              key={user.id}
              avatarUrl={user.avatar_url}
              name={user.login}
              htmlUrl={user.html_url}
            />
          ))
        ) : (
          <h1 className="bg-gray-300 col-span-3 text-center text-gray-700 p-2 rounded-lg">
            No users Found!!
          </h1>
        )}
      </div>
    </div>
  );
}

Users.propTypes = {
  found: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
