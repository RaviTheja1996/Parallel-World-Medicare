import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isAuth: false,
    token: "",
  });

  function login(token) {
    setAuthDetails({
      isAuth: true,
      token: token,
    });
  }

  function logout() {
    setAuthDetails({
      isAuth: false,
      token: "",
    });
  }

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
