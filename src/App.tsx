import React, { useState } from 'react';
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
            <h3>Ways to earn raffle tickets</h3>
            <ol>
              <li>First to arrive - 4 tickets</li>
              <li>Show up! - 1 ticket</li>
              <li>Play Trivia - 1 ticket per point</li>
              <li>Eat part of a hot chip - 8 tickets</li>
              <li>Make Bilal or Maymah laugh - 2 tickets</li>
              <li>Just ask for an extra - 1 ticket</li>
              <li>Best dressed votes - 1 per 2 votes</li>
              <li>You drive a Tesla - 3 tickets</li>
              <li>Challenge someone to something - variable</li>
              <li>Predict Fight winner - 2 per prediction</li>
              <li>You have a palm tree on your clothes - 2 tickets</li>
              <li>You have a Lakers logo on your clothes - 4 tickets</li>
              <li>You have a Dodgers logo on your clothes - 4 tickets</li>
              <li>Anything about LA on your clothes - 2 tickets</li>
            </ol>

            <Button disabled variant='contained' onClick={handleTriviaClick}>
              Play Trivia (Available after 7pm)
            </Button>
            <div>
              <h3>Prizes</h3>
              <ol>
                <li>Massage session gift card</li>
                <li>Dinner gift card</li>
                <li>3x starbucks gift cards</li>
              </ol>
            </div>
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
