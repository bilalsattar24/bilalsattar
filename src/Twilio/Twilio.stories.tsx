/* eslint-disable */
import Twilio from './Twilio';

export default {
  title: 'Twilio',
};

export const Default = () => <Twilio homeClick={console.log} />;

Default.story = {
  name: 'default',
};
