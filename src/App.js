import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import About from "./components/pages/About";
import User from "./components/User";
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

  // eslint-disable-next-line no-unused-vars
  const clearUsers = (setSearchTerm) => {
    setUsers([]);
    // setSearchTerm("");
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
    <Router>
      <div>
        <Navbar title="Github-Finder" icon="fab fa-github-square" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Search
                  searchUser={searchUser}
                  clearUsers={clearUsers}
                  users={users}
                  setAlert={setAlert}
                  setFound={setFound}
                />
                {alert && <Alert alert={alert} />}
                {!loading ? <Users users={users} found={found} /> : <Spinner />}
              </>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:name" render={(props) => <User {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
