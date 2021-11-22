require('dotenv').config(); //this allows us to stash "artificial env variables" in a file
const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'client_side/build')));

server.get('/api', (req, res) => {
  res.json({ message: 'more testing' });
});
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client_side/build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
