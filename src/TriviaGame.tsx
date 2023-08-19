import React, { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';

interface Question {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
}

const questions: Question[] = [
  {
    questionText: 'When did the Sattar family move here?',
    options: ['2001', '2011', '2008', '2014'],
    correctOptionIndex: 2,
  },
  {
    questionText: 'Which city did Maymah grow up in?',
    options: ['Culver City', 'Torrance', 'Hawthorne', 'Marina Del Rey'],
    correctOptionIndex: 0,
  },
];
const localCurrentIndex = parseFloat(localStorage.getItem('currentQuestionIndex') ?? '0');
const localScore = parseFloat(localStorage.getItem('score') ?? '0');
const localGameOver = localStorage.getItem('gameOver') === 'true';
localStorage.getItem('currentQuestionIndex');
const TriviaGame: React.FC = () => {
  console.log(localCurrentIndex);
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
      localStorage.setItem('score', `${score + 1}`);
      console.log('correct answer');
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      localStorage.setItem('currentQuestionIndex', `${currentQuestionIndex + 1}`);
    } else {
      // Game over
      setGameOver(true);
      localStorage.setItem('gameOver', 'true');
    }
  };

  if (gameOver) {
    return (
      <div className='App'>
        <h1>Summer With the Sattars!</h1>
        <h2>Final Score: {score}</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='App'>
      <h1>Summer With the Sattars!</h1>
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
