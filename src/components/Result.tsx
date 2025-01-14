import React from "react";

interface ResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, onRestart }) => {
  return (
    <div className="result">
      <h2>Quiz Complete!</h2>
      {/* Embed the GIF */}
      <img
        src="https://gifdb.com/images/high/nintendo-super-mario-characters-waving-hello-7vco5qbk1b6t186u.gif"
        alt="Super Mario Characters"
        style={{
          width: "100%",
          maxWidth: "350px",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      />
      <p>
        You scored {score} out of {total}.
      </p>
      <button className="restart-btn" onClick={onRestart}>
        Start Again
      </button>
    </div>
  );
};

export default Result;