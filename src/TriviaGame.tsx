import React, { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';
import { rayanBirthdayQuestions } from './questions';

// randize the order of rayanBirthdayQuestions and set to questions
const questions = [...rayanBirthdayQuestions];
const localCurrentIndex = parseFloat(localStorage.getItem('rayan-currentQuestionIndex') ?? '0');
const localScore = parseFloat(localStorage.getItem('rayan-score') ?? '0');
const localGameOver = localStorage.getItem('rayan-gameOver') === 'true';
localStorage.getItem('rayan-currentQuestionIndex');

const resetLocalValues = () => {
  localStorage.removeItem('rayan-currentQuestionIndex');
  localStorage.removeItem('rayan-score');
  localStorage.removeItem('rayan-gameOver');
  window.location.reload();
};

const TriviaGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(localCurrentIndex);
  const [score, setScore] = useState(localScore);
  const [gameOver, setGameOver] = useState(localGameOver);

  const handleOptionClick = (selectedOptionIndex: number) => {
    if (gameOver) {
      return; // Don't allow clicking options after the game is over
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctOptionIndex === selectedOptionIndex) {
      setScore(score + 1);
      localStorage.setItem('rayan-score', `${score + 1}`);
      console.log('correct answer');
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      localStorage.setItem('rayan-currentQuestionIndex', `${currentQuestionIndex + 1}`);
    } else {
      // Game over
      setGameOver(true);
      localStorage.setItem('rayan-gameOver', 'true');
    }
  };

  if (gameOver) {
    return (
      <div className='App'>
        <h1 onDoubleClick={resetLocalValues}>Rayan Trivia</h1>
        <h2>Final Score: {score}</h2>
        <h3>
          Show this to Bilal or Maymah to get your {score} ticket{score > 1 ? 's' : ''}!
        </h3>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='App'>
      <h1>Rayan Trivia</h1>
      <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      <p>Score: {score}</p>
      <h2>{currentQuestion.questionText}</h2>
      <div className='options'>
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(index)}
            fullWidth
            variant='contained'
            style={{ marginBottom: '10px' }}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TriviaGame;
