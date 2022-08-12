import { createContext, useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  const [tokens, setTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);
  const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null);

  let navigate = useNavigate();

  const loginUser = async (formData) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    let data = await response.json();

    if (response.status === 200) {
      setTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      navigate('/');
    } else {
      alert("Wrong username or password, please try again");
    }
  };

  const logoutUser = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  }

  let contextData = { loginUser, user, tokens, logoutUser };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
