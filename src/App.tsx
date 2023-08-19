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

  const getCurrentComponent = () => {
    switch (currentComponent) {
      case 'home':
        return <TriviaGame />;
      /* return (
          <Container>
            <div className='App'>
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Welcome to BilalSattar.com</p>
                <Button variant='contained' onClick={handleTwilioClick}>
                  Twilio
                </Button>
              </header>
            </div>
          </Container>
        );*/
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
