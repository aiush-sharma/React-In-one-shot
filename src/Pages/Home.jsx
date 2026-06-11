import React from "react";
import { useContext } from "react";
import ThemeRandom from "../Hooks/ThemeContext";
const Home = () => {
  return (
    <div>
      <p>{useContext(ThemeRandom)} is the useContext value</p>
      <h1 className="text-3xl text-green-400">
        Hello, This is Home Sweet Home.
      </h1>
    </div>
  );
};

export default Home;
