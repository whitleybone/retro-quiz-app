import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  { question: "What year was Super Mario Bros. released?", options: ["1983", "1985", "1987", "1990"], answer: "1985" },
  { question: "Who is the main antagonist in Donkey Kong?", options: ["Mario", "Bowser", "King K. Rool", "Donkey Kong"], answer: "Mario" },
  { question: "Which console was Sonic the Hedgehog first released on?", options: ["NES", "Genesis", "SNES", "Game Boy"], answer: "Genesis" },
  { question: "What color is Pac-Man?", options: ["Red", "Yellow", "Blue", "Green"], answer: "Yellow" },
  { question: "What game popularized the Konami Code?", options: ["Contra", "Street Fighter", "Mario Kart", "Mega Man"], answer: "Contra" },
  { question: "What is the first Pokémon ever designed?", options: ["Pikachu", "Bulbasaur", "Rhydon", "Charmander"], answer: "Rhydon" },
  { question: "What game is famous for the phrase 'Finish Him'?", options: ["Street Fighter", "Tekken", "Mortal Kombat", "Soulcalibur"], answer: "Mortal Kombat" },
  { question: "Which character is known for the phrase 'It's-a me, Mario!'?", options: ["Luigi", "Wario", "Yoshi", "Mario"], answer: "Mario" },
  { question: "What is the name of the princess in The Legend of Zelda?", options: ["Zelda", "Peach", "Daisy", "Samus"], answer: "Zelda" },
  { question: "What was the first home video game console?", options: ["Atari 2600", "Magnavox Odyssey", "NES", "ColecoVision"], answer: "Magnavox Odyssey" },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsFinished(false);
  };

  return isFinished ? (
    <Result score={score} total={questions.length} onRestart={restartQuiz} />
  ) : (
    <Question
      data={questions[currentQuestion]}
      onAnswer={handleAnswer}
      onNext={nextQuestion}
    />
  );
};

export default Quiz;