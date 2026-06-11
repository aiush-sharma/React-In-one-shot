import { useEffect, useState } from "react";
import React from "react";
// import Counter from "./lessons/Day1";
// import TicTacToe from "./components/TicTacToe";
import Day2 from "./lessons/Day2";
import Day3 from "./lessons/Day3";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [otherCount, setOtherCount] = useState(0);

  // useEffect(() => {
  //   document.title = `${otherCount} is 2 clicked`;
  // }, [otherCount]);

  // function increment() {
  //   setCount((count) => count + 1);
  // }
  // function increment2() {
  //   setOtherCount((prev) => prev + 1);
  // }
  return (
    <>
      {/* <p>{count} is clicked</p>
      <button onClick={increment}>Click me</button>
      <button onClick={increment2}>Click me</button> */}
      {/* <Day2></Day2> */}
      <Day3></Day3>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="*"
          element={
            <h1 className="text-red-600 text-4xl font-bold">
              404 page not found
            </h1>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
