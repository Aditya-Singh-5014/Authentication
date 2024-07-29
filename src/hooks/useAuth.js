// src/hooks/useAuth.js

import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../redux/actions/authActions";
import { saveUser, getUser } from "../utils/localStorageUtils";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = (user) => {
    saveUser(user);
    dispatch(loginSuccess(user));
  };

  const logoutUser = () => {
    localStorage.removeItem("registeredUser");
    dispatch(logout());
  };

  return { login, logoutUser, getUser };
};
