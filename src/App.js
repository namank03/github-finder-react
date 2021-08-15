import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import Search from "./components/Search";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_PASSWORD}`,
      );
      setUsers(res.data);
      setLoading(false);
      setAlert(null);
      if (res.data.length) {
        setFound(true);
      } else {
        setFound(false);
      }
    };

    getData();
  }, []);

  const clearUsers = () => {
    setUsers([]);
  };

  const searchUser = async (searchTerm) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_PASSWORD}`,
    );
    setUsers(res.data?.items);
    setAlert(null);
    setLoading(false);
    if (res.data.items.length) {
      setFound(true);
    } else {
      setFound(false);
    }
  };

  return (
    <div>
      <Navbar title="Github-Finder" icon="fab fa-github-square" />
      <Search
        searchUser={searchUser}
        clearUsers={clearUsers}
        users={users}
        setAlert={setAlert}
        setFound={setFound}
      />
      {alert && (
        <h1 className="border-t-4 border-red-400 p-16 m-4 text-center text-bold text-red-700 text-xl">
          {alert}
        </h1>
      )}
      {!loading ? <Users users={users} found={found} /> : <Spinner />}
    </div>
  );
}

export default App;
