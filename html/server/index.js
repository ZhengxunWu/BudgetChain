const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/route1', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/route1.html`));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
