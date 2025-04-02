import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Story() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setTimeout(() => {
        new Typed(
          textRef.current,
          {
            strings: [
              '당신은 <span style="color: gold;">금</span>을 얻으면 뭘 할 건가요?',
            ],
            typeSpeed: 40,
            showCursor: false,
          },
          1500
        );
      });
    }
  }, []);

  const handleClick = () => {
    window.location.href = "https://cafe.naver.com/kentuckygoldenhill";
  };

  return (
    <div className="story-container" onClick={handleClick}>
      <p style={{ fontSize: "56px", fontFamily: "serif" }} ref={textRef}></p>
    </div>
  );
}

export default Story;
