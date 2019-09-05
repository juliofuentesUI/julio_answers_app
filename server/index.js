const express = require('express');

//Require app express here.
//get basic server running locally.
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});

