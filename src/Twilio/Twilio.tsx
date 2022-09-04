import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { FC } from 'react';
import styles from './Twilio.module.css';

interface TwilioProps {
  homeClick: () => void;
}

const Twilio: FC<TwilioProps> = (props) => (
  <div className={styles.Twilio} data-testid='Twilio'>
    <Button onClick={props.homeClick}>Home</Button>
    <div>
      <FormControl>
        <InputLabel htmlFor='my-input'>Email address</InputLabel>
        <Input id='my-input' aria-describedby='my-helper-text' />
        <FormHelperText id='my-helper-text'>form's helper</FormHelperText>
      </FormControl>
    </div>
  </div>
);

export default Twilio;
