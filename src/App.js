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

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_PASSWORD}`,
      );
      setUsers(res.data);
      setLoading(false);
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
      <Search searchUser={searchUser} clearUsers={clearUsers} users={users} />
      {!loading ? <Users users={users} found={found} /> : <Spinner />}
    </div>
  );
}

export default App;
