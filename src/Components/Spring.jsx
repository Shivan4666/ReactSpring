import React from "react";
import "./Style.css";
import { useSprings, animated } from "react-spring";

const Data = [
  {
    id: 1,
    from: {
      backgroundColor: " #D81F10",
      width: "150px",
    },
    to: {
      backgroundColor: "#10BFD8",
      width: "350px",
    },
    config: {
      mass: 10,
      tension: 10,
    },
    delay: "1000",
  },
  {
    id: 2,
    from: {
      backgroundColor: "#EB109B",
      width: "250px",
    },
    to: {
      backgroundColor: "#39EB10",
      width: "600px",
    },
    config: {
      friction: 40,
      tension: 10,
      mass: 10,
    },
  },
  {
    id: 3,
    from: {
      backgroundColor: " #866322 ",
      width: "30px",
    },
    to: {
      backgroundColor: "#EBDA10",
      width: "200px",
    },
    config: {
      mass: 40,
    },
  },
];

const Spring = () => {
  const spring = useSprings(
    Data.length,
    Data.map(({ id, ...config }) => config)
  );
  return (
    <div className="springbody">
      {spring.map((spring, index) => (
        <animated.div
          key={Data[index].id}
          style={{ ...spring, height: "50px", margin: "10px" }}
        ></animated.div>
      ))}
    </div>
  );
};
export default Spring;
