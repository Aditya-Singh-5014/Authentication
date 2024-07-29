// src/utils/localStorageUtils.js

export const saveUser = (user) => {
  localStorage.setItem("registeredUser", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("registeredUser");
  return user ? JSON.parse(user) : null;
};
