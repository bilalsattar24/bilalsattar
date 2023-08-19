import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './Twilio.module.css';

interface TwilioProps {
  homeClick: () => void;
}

const Twilio: FC<TwilioProps> = (props) => (
  <div className={styles.Twilio} data-testid='Twilio'>
    <Button onClick={props.homeClick}>Home</Button>
    <div>
      account SID
      <input id='accountSID'></input>
    </div>
  </div>
);

export default Twilio;
