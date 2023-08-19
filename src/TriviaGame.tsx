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
  const [userAnswer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | 'none'>('none');

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
    let status: 'correct' | 'incorrect' = 'incorrect';

    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1);
      status = 'correct';
    }

    setAnswerStatus(status);
    setUserAnswer(selectedAnswer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < triviaQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerStatus('none');
      setUserAnswer('');
    }
  };

  const currentQuestion: Question = triviaQuestions[currentQuestionIndex];
  const remainingQuestions: number = triviaQuestions.length - currentQuestionIndex - 1;
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
          <p>Questions remaining: {remainingQuestions}</p>
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
