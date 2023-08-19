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
  const [userAnswer, setUserAnswer] = useState('');
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
    setUserAnswer(selectedAnswer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < triviaQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(8);
      setAnswerStatus('none');
      setUserAnswer('');
    }
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      if (userAnswer === '') {
        handleAnswerClick(''); // Automatically select no answer when time is up
      }
    }
  }, [timeRemaining]);

  const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
  const isFinished: boolean = currentQuestionIndex === triviaQuestions.length - 1;
  const hasAnswered: boolean = userAnswer !== '';

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
          {hasAnswered && (
            <>
              {answerStatus === 'correct' && <p className='correct-answer'>Correct!</p>}
              {answerStatus === 'incorrect' && (
                <p className='incorrect-answer'>
                  Incorrect. The correct answer is {currentQuestion.correctAnswer}.
                </p>
              )}
              {userAnswer && <p>Your Answer: {userAnswer}</p>}
              <button onClick={handleNextQuestion}>Next Question</button>
            </>
          )}
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
