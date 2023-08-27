import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isAuth: false,
    token: "",
    name: "",
  });

  function login(name) {
    setAuthDetails({
      isAuth: true,
      token: "",
      name: name,
    });
  }

  function logout() {
    setAuthDetails({
      isAuth: false,
      token: "",
      name: "",
    });
  }

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
