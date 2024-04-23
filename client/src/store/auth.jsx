import { createContext, useContext, useEffect, useState } from "react";
//context provider consumer
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("isloggedin", isLoggedIn);
  //   tackling the logout functionality
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  //   jwt aurhentiction - to get currently logged in user data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("userdata", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("error fetching user data");
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, logoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
