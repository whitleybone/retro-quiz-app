import React, { useState } from "react";

interface QuestionProps {
  data: { question: string; options: string[]; answer: string };
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const Question: React.FC<QuestionProps> = ({ data, onAnswer, onNext }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Load the sound file
  const clickSound = new Audio("/src/assets/coin.wav");

  const handleOptionClick = (option: string) => {
    setSelected(option);

    // Play the sound
    clickSound.play();

    const isCorrect = option === data.answer;
    setFeedback(isCorrect ? "Correct!" : "Wrong!");
    onAnswer(isCorrect);
  };

  const handleNextClick = () => {
    setSelected(null);
    setFeedback(null);
    onNext();
  };

  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option) => (
          <button
            key={option}
            className={`option ${
              selected === option ? (option === data.answer ? "correct" : "wrong") : ""
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={!!selected}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
      {selected && (
        <button className="next-btn" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );
};

export default Question;