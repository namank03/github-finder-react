import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Search({ searchUser, clearUsers, users, setAlert, setFound }) {
  const [searchTerm, setSearchTerm] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length) {
      searchUser(searchTerm);
    } else {
      clearUsers();
      setFound(true);
      setAlert("Please enter a search term");
    }
  };
  return (
    <form
      className="flex flex-row justify-center items-center m-2 "
      onSubmit={(e) => formSubmit(e)}>
      <input
        type="text"
        placeholder="User Name"
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm border-0 shadow outline-none focus:outline-none focus:shadow-lg mr-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="border-2 rounded py-1 text-red-700 border-red-700 px-6 hover:bg-red-700 hover:text-gray-100 mr-3">
        Search
      </button>

      {users.length > 0 && (
        <button
          type="button"
          className="border-2 rounded py-1 text-green-700 border-green-700 px-6 hover:bg-green-700 hover:text-gray-100"
          onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  searchUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  setFound: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
