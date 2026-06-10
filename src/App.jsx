import { useEffect, useState } from "react";
import React from "react";
// import Counter from "./lessons/Day1";
// import TicTacToe from "./components/TicTacToe";
import Day2 from "./lessons/Day2";
const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    document.title = `${otherCount} is 2 clicked`;
  }, [otherCount]);

  function increment() {
    setCount((count) => count + 1);
  }
  function increment2() {
    setOtherCount((prev) => prev + 1);
  }
  return (
    <>
      <p>{count} is clicked</p>
      <button onClick={increment}>Click me</button>
      <button onClick={increment2}>Click me</button>
      <Day2></Day2>
    </>
  );
};

export default App;
