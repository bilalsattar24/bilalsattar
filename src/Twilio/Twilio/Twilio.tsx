import { Button } from '@mui/material';
import React, { FC } from 'react';
import styles from './Twilio.module.css';

interface TwilioProps {
  homeClick: () => void;
}

const Twilio: FC<TwilioProps> = (props) => (
  <div className={styles.Twilio} data-testid='Twilio'>
    Twilio Component
    <Button onClick={props.homeClick}>Home</Button>
  </div>
);

export default Twilio;
