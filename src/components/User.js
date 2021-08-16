/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Button from "./layout/Button";
import CardItem from "./layout/CardItem";
import Spinner from "./layout/Spinner";

export default function User({ match }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    params: { name },
  } = match;

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${name}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_PASSWORD}`,
      );
      setUser(res.data);
      setLoading(false);
    };

    getUser();
  }, [name]);

  if (!loading && user) {
    const {
      login,
      blog,
      company,
      followers,
      following,
      hireable,
      avatar_url: avatarUrl,
      name: userName,
      html_url: htmlUrl,
    } = user;

    return (
      <>
        <div className={`container border-b-2  mx-auto my-10 shadow hover:shadow-lg `}>
          <div className="grid grid-cols-3 gap-10  p-4 ">
            <div className="col-span-1">
              <img src={avatarUrl} alt="" />
            </div>
            <div className="col-span-2 border-l-2 border-green-700 pl-4">
              <h1 className="text-4xl capitalize text-center text-gray-600 mb-2">{login}</h1>
              <CardItem value={blog} label="Blog:" />
              <CardItem value={userName} label="Name:" />
              <CardItem value={company} label="Company:" />
              <div className="flex flex-col justify-center mt-10">
                <Button htmlUrl={htmlUrl} text="Visit Github Profile" />
              </div>
            </div>
          </div>
        </div>

        <div className="container border-b-2 mx-auto my-10 p-4 shadow flex flex-row justify-center ">
          <h2 className="mr-3 text-red-700 border-2 p-2 rounded border-red-700 capitalize">
            Followers <span className="font-bold"> {followers} </span>
          </h2>
          <h2 className="text-green-700 border-2 p-2 rounded border-green-700 capitalize">
            following <span className="font-bold"> {following} </span>
          </h2>
        </div>
      </>
    );
  }
  return <Spinner />;
}

User.propTypes = {
  match: PropTypes.object.isRequired,
};
