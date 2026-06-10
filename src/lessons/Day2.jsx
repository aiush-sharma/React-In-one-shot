// useEffect is used to do outside effects such as fetching data ,dom manipulations and  setTimeout
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Day2 = () => {
  const [product, setProduct] = useState([]);
  const url = "https://dummyjson.com/products";
  async function FetchData() {
    try {
      const response = await axios.get(url);
      setProduct(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    FetchData();
  }, []);
  const [time, setTime] = useState(0);
  const [button, setButton] = useState(null);
  useEffect(() => {
    //takes a callback and a dependency
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
      //setTimeout and setInterval
    }, 1000);
    //for setInterval loop we need to clear interval (unmount)
    return () => {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    console.log("hello from use Effect");
    return () => {
      console.log("the interval is cleaned");
    };
  }, [button]);
  return (
    <>
      <p>{time} in seconds</p>
      <button onClick={() => setButton(true)}>Clickme</button>
    </>
  );

  return (
    <>
      <ul className="products">
        {product.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Day2;
