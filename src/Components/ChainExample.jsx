import React from "react";
import { animated, useSpring } from "@react-spring/web";
import "./Style.css";

function ChainExample() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "#EB1034" },
  });
  // ...
  return (
    <animated.div style={{ fontSize: 30, ...styles }}>
      <div className="para">
        React-spring is a spring-physics based animation library that should
        cover most of your UI related animation needs. It gives you tools
        flexible enough to confidently cast your ideas into moving interfaces.
        ... It inherits animated's powerful interpolations and performance, as
        well as react-motion's ease of use.
      </div>
    </animated.div>
  );
}
export default ChainExample;
