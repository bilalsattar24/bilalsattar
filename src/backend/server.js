const express = require('express');
const path = require('path');
const app = express();
const localPort = 4160;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || localPort, () => {
  console.log(`bilalsattar backend running locally at http://localhost:${localPort}`);
});
