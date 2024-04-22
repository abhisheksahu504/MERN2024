import { createContext, useContext, useState } from "react";
//context provider consumer
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
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
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser }}>
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
