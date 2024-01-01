import React, { useState } from 'react';
import './App.css';
import Twilio from './Twilio/Twilio';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import TriviaGame from './TriviaGame';

function App() {
  const [currentComponent, setCurrentComponent] = useState('rayan');
  const isPastGameTime = new Date() < new Date('2023-12-30T12:30:00');
  const handleTwilioClick = () => {
    setCurrentComponent('twilio');
  };
  const handleHomeClick = () => {
    setCurrentComponent('rayan');
  };
  const handleTriviaClick = () => {
    setCurrentComponent('trivia');
  };

  const getCurrentComponent = () => {
    switch (currentComponent) {
      case 'trivia':
        return <TriviaGame />;
      case 'rayan':
        return (
          <Container>
            <h1>Rayan's 2nd birthday party</h1>
            <p>
              Welcome to the enchanting world of Rayan's 2nd Birthday Bash, starting at 12 pm on
              12/29! 🎈🎂 Prepare for a day filled with joy, games, and delightful surprises. Plus,
              we have an exciting raffle with amazing prizes for everyone. Here's how you can
              increase your chances to win:
            </p>
            <p>
              <strong>Location:</strong>{' '}
              <a href='https://maps.app.goo.gl/hQ6N3mMdHKUwKaLV7' target='blank'>
                Chevron Park
              </a>
            </p>
            <Button
              variant='contained'
              onClick={handleTriviaClick}
              disabled={isPastGameTime}
              style={{ height: '60px', width: '100%', marginBottom: '20px' }}
            >
              Play Trivia {isPastGameTime ? '(Opens at 12:30)' : ''}
            </Button>
            <p>
              <strong>Here's your guide to winning those coveted raffle tickets:</strong>
            </p>
            <ol>
              <li>
                <strong>Early Bird Bonus:</strong> Be the first to kick off the party - snag 3 shiny
                tickets right at the start! 🕓🎫
              </li>
              <li>
                <strong>Party Starter:</strong> Just by showing up, you're earning a cool ticket.
                Your presence matters, and so does your ticket count! 🎉🎫
              </li>
              <li>
                <strong>Trivia Whiz:</strong> Prove your brainpower in our thrilling trivia. Each
                correct answer means another ticket to add to your growing stash! Play trivia
                below🧠🎫
              </li>
              <li>
                <strong>Photo Op Pro:</strong> Snap a selfie with any of the hosts and collect 1
                ticket for your selfie spree! 📸🎫
              </li>
              <li>
                <strong>Tesla Driver:</strong> Did you arrive here in a Tesla? You're not just
                driving in style - you're earning 2 tickets too! 🚗🎫
              </li>
              <li>
                <strong>Autograph Ace:</strong> Sign a special baseball for Rayan. Your signature
                earns you a ticket as a token of appreciation for adding a personal touch to Rayan's
                birthday keepsake! ⚾🖊️🎫
              </li>
              <li>
                <strong>Ping Pong Splash</strong> Toss a ping pong ball into a cup with flair and
                discover your ticket treasure! 🥤🏓🎫 (3 attempts, one cup max)
              </li>
              <li>
                <strong>Birthday Message</strong> Record a video birthday message on Bilal or
                Maymah's phone and earn two tickets 🎙️🤳🏽🎫
              </li>
              <li>
                <strong>Laugh Leader</strong> Make Rayan laugh for 2 tickets 😆🎫
              </li>
              <li>
                <strong>Urdu Laughter Challenge</strong> Share a hilarious joke in Urdu with Yousaf,
                Shahid, Anita, or Samina and earn your giggle-worthy ticket if they burst into
                laughter! 😄🎫"
              </li>
            </ol>
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
