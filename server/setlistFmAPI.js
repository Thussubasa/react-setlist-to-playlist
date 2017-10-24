const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const API_KEY = '2ef3d64f-cee6-4a14-be9a-60b7e29c25f2';
const port = 5001;

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

});

app.post('/setlist.fm/searchSetlists', (req, res) => {

  console.log(req.body.artistName);
  axios({
    method: 'get',
    url: 'http://api.setlist.fm/rest/0.1/search/setlists.json',
    params: {
      apikey: API_KEY,
      artistName: req.body.artistName,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {

    res.send(response.data);

  }).catch((error) => {

    console.log(error);

  });

});

app.listen(port, () => {

  console.log(`Listening on http://localhost:${port}`);

});