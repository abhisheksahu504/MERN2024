import { createContext, useContext, useEffect, useState } from "react";
//context provider consumer
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;
  const storeTokenInLS = (serverToken) => {
    //no need to refesh after a login
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("isloggedin", isLoggedIn);
  //   tackling the logout functionality
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  //   jwt authentiction - to get currently logged in user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("userdata", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("Errror fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("error fetching user data");
    }
  };
  // to fetch the servies data from the database
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const responses = await response.json();
        // console.log(responses.data);
        setServices(responses.data);
      }
      console.log("service", response);
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        logoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
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
