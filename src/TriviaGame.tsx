// TriviaGame.tsx
import React, { useState } from 'react';
import { triviaQuestions } from './constants';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const TriviaGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < triviaQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
  const isFinished: boolean = currentQuestionIndex === triviaQuestions.length - 1;

  return (
    <div>
      {!isFinished ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.question}</p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>{triviaQuestions.length - currentQuestionIndex - 1} questions left</p>
        </div>
      ) : (
        <div>
          <h2>Trivia Game Completed!</h2>
          <p>Your Final Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
