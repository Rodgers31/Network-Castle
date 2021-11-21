const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`<h1>Running app</>`);
});

server.get('/api', (req, res) => {
  res.json({ message: 'more testing' });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
