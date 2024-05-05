import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Login = () => {
  //state
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  //handling input
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
  //handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    //connecting to login
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data", response);
      const responseData = await response.json();
      if (response.ok) {
        toast.success("Login Successful");

        // localStorage.setItem("token", responseData.token);
        storeTokenInLS(responseData.token);
        navigate("/");

        setUser({ email: "", password: "" });
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message
        );
        console.log("Invalid Credential", error);
      }
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="Fill the login form"
                  width="500 px"
                  height="500px"
                />
              </div>
              <div>
                <div className="registration-form">
                  <h1 className="main-heading mb-3">Login Form</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
