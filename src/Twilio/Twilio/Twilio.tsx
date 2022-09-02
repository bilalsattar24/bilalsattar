import React, { FC } from 'react';
import styles from './Twilio.module.css';

interface TwilioProps {}

const Twilio: FC<TwilioProps> = () => (
  <div className={styles.Twilio} data-testid="Twilio">
    Twilio Component
  </div>
);

export default Twilio;
