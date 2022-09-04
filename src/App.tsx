import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Twilio from './Twilio/Twilio/Twilio';
import Button from '@mui/material/Button';

function App() {
  const [currentComponent, setCurrentComponent] = useState('home');
  const handleTwilioClick = () => {
    setCurrentComponent('twilio');
  };
  const handleHomeClick = () => {
    setCurrentComponent('home');
  };
  switch (currentComponent) {
    case 'home':
      return (
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>Welcome to BilalSattar.com</p>
            <Button variant='contained' onClick={handleTwilioClick}>
              Twilio
            </Button>
          </header>
        </div>
      );
    case 'twilio':
      return <Twilio homeClick={handleHomeClick}></Twilio>;
    default:
      return <button onClick={handleTwilioClick}>Twilio</button>;
  }
}

export default App;
