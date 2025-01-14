import React, { useState, useEffect, useRef } from "react";
import Quiz from "./components/Quiz";
import "./styles.css";

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Use useRef to persist the audio object across renders
  const backgroundMusicRef = useRef(new Audio("/retro-quiz-app/theme.mp3")); // Update path for GitHub Pages

  useEffect(() => {
    const backgroundMusic = backgroundMusicRef.current;
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.5;

    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0; // Cleanup on unmount
    };
  }, []);

  const handleStartQuiz = () => {
    const backgroundMusic = backgroundMusicRef.current;
    if (!isMuted) {
      backgroundMusic.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsStarted(true);
  };

  const toggleMute = () => {
    const backgroundMusic = backgroundMusicRef.current;
    setIsMuted(!isMuted);
    backgroundMusic.muted = !backgroundMusic.muted; // Toggle mute state directly on the audio object
  };

  return (
    <div style={{ color: "lime", textAlign: "center", marginTop: "20px" }}>
      {!isStarted ? (
        <div className="welcome">
          <h1>Welcome to the Retro Quiz Game!</h1>
          <p>Test your retro gaming knowledge!</p>
          <button
            onClick={handleStartQuiz}
            style={{
              backgroundColor: "lime",
              color: "black",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "lime",
              color: "black",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <Quiz />
        </>
      )}
    </div>
  );
};

export default App;