import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const params = useParams();
  const { authorizationToken } = useAuth();
  useEffect(() => {
    getSingleUserData();
  }, []);
  //get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users single delete ${data}`);
      setData(data);
      //   if (response.ok) {
      //     getAllUsersData();
      //   }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = () => {};
  const handleSubmit = () => {};

  return (
    <section className="section-contact">
      <div className="conatact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      <div className="container grid grid-two-cols">
        {/* form section  */}
        <div className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                id="username"
                required
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                placeholder="Enter your email"
                id="phone"
                required
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
              />
            </div>

            <br />
            <button style={{ width: 120 }} type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
