import React, { useState, useEffect } from "react";
import ani from "./assets/worker/animated.png";
import act from "./assets/worker/act.png";
import off from "./assets/worker/off.png";

function Jonathan() {
  const [currentImage, setCurrentImage] = useState(act);

  useEffect(() => {
    const loopAnimation = () => {
      const randomDelay = Math.floor(Math.random() * 17000) + 3000;

      setTimeout(() => {
        setCurrentImage(ani);

        setTimeout(() => {
          setCurrentImage(act);
          loopAnimation();
        }, 12000);
      }, randomDelay);
    };

    loopAnimation();

    return () => clearTimeout();
  }, []);

  return (
    <div style={{ width: "330px", height: "500px" }}>
      <img
        src={currentImage}
        alt="Jonathan"
        style={{
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      />
    </div>
  );
}

export default Jonathan;
