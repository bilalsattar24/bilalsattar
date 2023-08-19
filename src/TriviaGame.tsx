// TriviaGame.tsx
import React, { useState, useEffect } from 'react';
import { triviaQuestions } from './constants';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const TriviaGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(8);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | 'none'>('none');

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
    let earnedScore = 0;
    let status: 'correct' | 'incorrect' = 'incorrect';

    if (currentQuestion.correctAnswer === selectedAnswer) {
      earnedScore = timeRemaining <= 8 ? 1.25 : 0.75;
      status = 'correct';
    }

    setScore(score + earnedScore);
    setAnswerStatus(status);

    if (currentQuestionIndex + 1 < triviaQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(8);
      setAnswerStatus('none');
    }
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleAnswerClick(''); // Automatically select no answer when time is up
    }
  }, [timeRemaining]);

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
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={answerStatus !== 'none'}
              >
                {option}
              </button>
            ))}
          </div>
          <p>
            Time Remaining: {timeRemaining} second{timeRemaining !== 1 ? 's' : ''}
          </p>
          <p>Score: {score}</p>
          {answerStatus === 'correct' && <p>Correct!</p>}
          {answerStatus === 'incorrect' && (
            <p>Incorrect. The correct answer is {currentQuestion.correctAnswer}.</p>
          )}
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
