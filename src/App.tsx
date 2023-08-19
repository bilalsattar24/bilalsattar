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
            <p>
              Get ready to have a blast at "Summer with the Sattars" tonight, starting at 6 pm! 🎉
              There will be a thrilling raffle with fantastic prizes waiting for you as the night
              winds down. But hey, that's not all – your chances to score those awesome raffle
              tickets are practically endless!{' '}
              <strong>Here's the lowdown on how to stack the odds in your favor:</strong>
            </p>
            <ol>
              <li>
                <strong>Early Bird Bonus:</strong> Be the first to kick off the party – snag 4 shiny
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
                <strong>Spicy Challenger:</strong> Brave enough to munch on a piece of the fiery hot
                chip? You'll earn an impressive 8 tickets for your bold taste adventure! 🔥🌶️🎫
              </li>
              <li>
                <strong>Photo Op Pro:</strong> Snap a selfie with any of the hosts and collect 1
                ticket for your selfie spree! 📸🎫
              </li>
              <li>
                <strong>Giggle Generator:</strong> Make Bilal or Maymah laugh, and you'll be
                laughing your way to 2 extra tickets. Bring on the humor! 😂🎫
              </li>
              <li>
                <strong>Ticket Beggar:</strong> Sometimes, it's okay to ask for an extra ticket.
                We've got you covered with one ticket just for the ask! 💁‍♂️💬🎫
              </li>
              <li>
                <strong>Fashion Guru:</strong> Strut your style and gather votes for the best
                dressed! Every 2 votes earn you another snazzy ticket. Show us your fashion finesse!
                👗👔👗🎫
              </li>
              <li>
                <strong>Tesla Driver:</strong> Cruising in a Tesla? You're not just driving in style
                – you're earning 3 tickets too! 🚗🎫
              </li>
              <li>
                <strong>Challenge Commander:</strong> Challenge someone to a game or dare, and the
                ticket reward is yours to negotiate. It's time to show off your competitive spirit!
                🏆🎫
              </li>
              <li>
                <strong>Fight Predictor:</strong> Channel your inner psychic – predict a fight
                winner and pocket 2 tickets for every correct guess! 🔮🎫
              </li>
              <li>
                <strong>Tropical Touch:</strong> If you're rocking a palm tree on your outfit,
                you've earned 2 tickets that'll make your style shine even brighter! 🌴🎫
              </li>
              <li>
                <strong>Lakers Legend:</strong> A Lakers logo on your clothes earns you a slam dunk
                of 4 tickets. It's time to show your team pride! 🏀🎫
              </li>
              <li>
                <strong>Dodgers Devotee:</strong> Sporting a Dodgers logo? You've just scored 4
                tickets, hitting a home run for your raffle chances! ⚾🎫
              </li>
              <li>
                <strong>LA Enthusiast:</strong> Anything repping LA on your outfit? That's worth 2
                tickets – let your attire tell your story! 🌆🎫
              </li>
            </ol>

            <Button disabled variant='contained' onClick={handleTriviaClick}>
              Play Trivia (Available after you arrive)
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
