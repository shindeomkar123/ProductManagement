import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  user: "",
  login: async (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const isLoggedIn = !!token;

  const onLoginHandler = async (token) => {
    setToken(token);
    return token;
  };

  const onLogoutHandler = async () => {
    setToken(null);
  };

  const setUserNameHandler = (user) => {
    setUser(user);
  };

  const contextValue = {
    token,
    isLoggedIn,
    user,
    login: onLoginHandler,
    logout: onLogoutHandler,
    setUserNameHandler
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
