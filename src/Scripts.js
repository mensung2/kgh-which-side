import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import scriptData from "./scriptData";
import Story from "./Story";
import useSound from "use-sound";
import HoverSound from "./assets/sound/hover.mp3";
import ClickSound from "./assets/sound/button-click1.mp3";

function Scripts({ initialId, setShowStory }) {
  const [history, setHistory] = useState([]);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState({});
  const scriptRef = useRef();
  const typingRef = useRef(null);
  const choiceContainerRef = useRef(null);
  const isFirstRender = useRef(true);

  const [playHover] = useSound(HoverSound, { volume: 0.15 });
  const [playClick] = useSound(ClickSound, { volume: 0.4 });

  const scrollToBottom = () => {
    if (scriptRef.current) {
      scriptRef.current.scrollTop = scriptRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (history.length > 0 && history[history.length - 1].id === 125) {
      const prevChoice = selectedChoices[106];
      const nextSceneId = prevChoice === 107 ? 126 : 127;

      const nextScene = scriptData.find((line) => line.id === nextSceneId);
      if (nextScene) {
        setTimeout(() => {
          setHistory((prev) => [...prev, nextScene]);
        }, 250);
      }
    }
  }, [history, selectedChoices]);

  useEffect(() => {
    if (history.length > 0 && history[history.length - 1].id === 525) {
      const prevChoice = selectedChoices[506];
      const nextSceneId = prevChoice === 507 ? 526 : 527;

      const nextScene = scriptData.find((line) => line.id === nextSceneId);
      if (nextScene) {
        setTimeout(() => {
          setHistory((prev) => [...prev, nextScene]);
        }, 250);
      }
    }
  }, [history, selectedChoices]);

  useEffect(() => {
    if (!scriptRef.current) return;

    const observer = new MutationObserver(() => {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    });

    observer.observe(scriptRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const firstLine = scriptData.find((line) => line.id === initialId);
    if (firstLine) {
      setHistory([firstLine]);
    }
  }, [initialId]);

  useEffect(() => {
    if (isTypingDone) {
      choiceContainerRef.current.classList.add("visible");
    } else {
      choiceContainerRef.current.classList.remove("visible");
    }
  }, [isTypingDone]);

  useEffect(() => {
    if (history.length === 0) return;

    const lastText = history[history.length - 1].text;
    if (!lastText) return;

    setIsTypingDone(false);

    const options = {
      strings: [lastText],
      typeSpeed: 30,
      showCursor: false,
      onComplete: () => {
        setIsTypingDone(true);
        if (history[history.length - 1].choices?.length) {
          startChoiceTyping(history[history.length - 1].choices);
        }
      },
    };

    const startTyping = () => {
      const typed = new Typed(typingRef.current, options);
      return () => typed.destroy();
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTimeout(startTyping, 2450);
    } else {
      startTyping();
    }
  }, [history]);

  const startChoiceTyping = (choices) => {
    if (!choiceContainerRef.current) return;

    setIsTypingDone(false);

    const autoChoice = choices.find((choice) => choice.text === "x");

    if (autoChoice) {
      setTimeout(() => {
        const nextLine = scriptData.find(
          (line) => line.id === autoChoice.nextId
        );
        if (nextLine) {
          setHistory((prev) => [...prev, nextLine]);
        }
      }, 50);
      return;
    }

    const formattedChoices = choices
      .map(
        (choice) =>
          `<p class="choice ${choice.text === ". . ." ? "center" : "left"}"
    data-next-id="${choice.nextId}">
  ${choice.text}
</p>`
      )
      .join("");

    new Typed(choiceContainerRef.current, {
      strings: [formattedChoices],
      typeSpeed: 20,
      showCursor: false,
      contentType: "html",
      onComplete: () => setIsTypingDone(true),
    });
  };

  const handleHover = () => {
    if (isTypingDone) playHover();
  };
  const handleChoice = (nextId, choiceText) => {
    playClick();
    setIsTypingDone(false);

    if (choiceContainerRef.current) {
      choiceContainerRef.current.innerHTML = "";
    }

    setSelectedChoices((prev) => ({
      ...prev,
      [history[history.length - 1].id]: nextId,
    }));

    const nextLine = scriptData.find((line) => line.id === nextId);

    if (nextLine) {
      setHistory((prev) => [
        ...prev,
        ...(choiceText !== ". . ."
          ? [{ text: choiceText, choices: [], id: `choice-${nextId}` }]
          : []),
        nextLine,
      ]);

      if (nextId === 999) {
        setShowStory(true);
      }
    }
  };

  return (
    <div className="script-box">
      <div className="script" ref={scriptRef}>
        {history.map((line, index) => (
          <p key={line.id} className="script-text">
            {index === history.length - 1 ? (
              <span ref={typingRef}></span>
            ) : (
              line.text
            )}
          </p>
        ))}
        <div
          className="choices"
          ref={choiceContainerRef}
          onMouseEnter={handleHover}
          onClick={(e) => {
            if (e.target.classList.contains("choice")) {
              const nextId = parseInt(e.target.dataset.nextId, 10);
              handleChoice(nextId, e.target.innerText);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Scripts;
