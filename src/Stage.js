import React, { useState, useEffect, useRef } from "react";
import Script from "./Scripts";
import Cynthia from "./Cynthia";
import Jonathan from "./Jonathan";
import Story from "./Story";
import "./Stage.css";

function Stage({ initialId }) {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      {showStory ? (
        <Story />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5vh",
          }}
          className="script-stage"
        >
          <Script
            initialId={initialId}
            showStory={showStory}
            setShowStory={setShowStory}
          />
          <div className="people">
            {initialId === 100 && <Cynthia />}
            {initialId === 500 && <Jonathan />}
          </div>
        </div>
      )}
    </>
  );
}

export default Stage;
