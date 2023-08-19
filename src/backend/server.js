const express = require('express');
const path = require('path');
const app = express();
const localPort = 4160;

// this will default the react app to be served on the root "/".
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.post('/send-text', (req, res) => {
  //get params from request
  //structure request object
  //create request
  // respond to front end once it is complete
  const messageText = 'go lakers';

  // the URL of the image that you want to attach to the text
  const imageURL = 'https://picsum.photos/seed/picsum/200/300';
  //the phone number that the message should be sent FROM
  const fromNumber = '+13109064567';

  // do not need to change below two values unless the twilio account changes
  // Find these values at https://twilio.com/user/account
  const accountSid = 'ACcc83bda9bda8afd0021290c931a329f0';
  const authToken = 'a1f006995af45929e605db00a79e4c80';
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: messageText,
      to: '+13103577238', // Text this number
      from: fromNumber,
      media_url: imageURL, // From a valid Twilio number
    })
    .then((message) => console.log('message sent'));

  res.send('send-text response');
});

app.listen(process.env.PORT || localPort, () => {
  console.log(`bilalsattar backend running locally at http://localhost:${localPort}`);
});
