import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  //   handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      // ...user to keep previous values in the box
      ...user,
      [name]: value,
      //   []is used to declare dynamic values
    });
  };
  //Handling the form submission
  const handleSubmit = async (e) => {
    //prevent from page refresh
    e.preventDefault();
    console.log(user);
    // connecting front end to backend
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        // const res_data = await response.json();
        // console.log("res from server", res_data);
        //storing the data in local storage
        //another way localStorage.setItem("token",responseData.token)
        storeTokenInLS(responseData.token);
        toast.success("Registration successfull");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      } else {
        // console.log("error inside response ", error);
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="a girl trying to fill registration form"
                  width="500 px"
                  height="500px"
                />
              </div>
              <div>
                {/* registration form */}
                <div className="registration-form">
                  <h1 className="main-heading mb-3">Registration Form</h1>
                  <br />
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
                        value={user.username}
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
                        value={user.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>
                    <br />
                    <button type="submit">Register Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
