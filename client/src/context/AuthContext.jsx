import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("auth"));
      return stored?.user || null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("auth"));
      return stored?.token || null;
    } catch {
      return null;
    }
  });

  const saveAuth = (userData, jwt) => {
    setUser(userData);
    setToken(jwt);
    localStorage.setItem("auth", JSON.stringify({ user: userData, token: jwt }));
  };

 
  const login = async (email, password) => {
    try {
      const res = await axios.post("/user/login", {
        email,
        password
      }, {
        withCredentials: true
      });

      const data = res.data;

      if (data.status) {
        saveAuth(data.user, data.token);
        return { success: true };
      }

      return { success: false, message: data.message };

    } catch (error) {
      return { success: false, message: "Login failed" };
    }
  };


  const register = async (name, email, password) => {
    try {
      const res = await axios.post("/user/signup", {
        name,
        email,
        password
      });

      return res.data;

    } catch (error) {
      return { status: false, message: "Registration failed" };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);