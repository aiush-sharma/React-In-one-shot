import { useContext } from "react";
import ThemeContext from "../Hooks/ThemeContext";
import React from "react";
import Home from "../Pages/Home";
const useContext = () => {
  const number = 5;
  return (
    <div>
      <ThemeContext.Provider value={number}>
        <Home></Home>
      </ThemeContext.Provider>
    </div>
  );
};

export default useContext;
