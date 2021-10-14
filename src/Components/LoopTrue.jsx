import React from "react";
import { animated, useSpring } from "@react-spring/web";

function LoopTrue() {
  const styles = useSpring({
    // loop: true,
    loop: { reverse: true },

    from: { rotateZ: 0, x: 0 },
    to: { rotateZ: 360, x: 100 },
    // from: { x: 0 },
    // to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 150,
        height: 150,
        backgroundColor: "#46e891",
        borderRadius: 40,
        ...styles,
      }}
    />
  );
}
export default LoopTrue;
