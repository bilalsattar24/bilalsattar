import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Twilio from './Twilio/Twilio';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import TriviaGame from './TriviaGame';

function App() {
  const [currentComponent, setCurrentComponent] = useState('home');
  const handleTwilioClick = () => {
    setCurrentComponent('twilio');
  };
  const handleHomeClick = () => {
    setCurrentComponent('home');
  };
  const handleTriviaClick = () => {
    setCurrentComponent('trivia');
  };

  const getCurrentComponent = () => {
    switch (currentComponent) {
      case 'trivia':
        return <TriviaGame />;
      case 'home':
        return (
          <Container>
            <h1>Summer with the Sattars!</h1>
            <h3>How to earn raffle tickets</h3>
            <ol>
              <li>First to arrive - 4 tickets</li>
              <li>Show up! - 1 ticket</li>
              <li>Play Trivia - 1 ticket per point</li>
              <li>Eat part of a hot chip - 8 tickets</li>
              <li>Make Bilal or Maymah laugh - 2 tickets</li>
              <li>Just ask for an extra - 1 ticket</li>
              <li>Best dressed votes - 1 per 2 votes</li>
              <li>Challenge someone to something - variable</li>
              <li>Predict Fight winner - 2 per prediction</li>
            </ol>

            <Button variant='contained' onClick={handleTriviaClick}>
              Play Trivia
            </Button>
          </Container>
        );
      case 'twilio':
        return (
          <Container>
            <Twilio homeClick={handleHomeClick}></Twilio>
          </Container>
        );
      default:
        return <button onClick={handleTwilioClick}>Twilio</button>;
    }
  };
  return <Container>{getCurrentComponent()}</Container>;
}

export default App;
