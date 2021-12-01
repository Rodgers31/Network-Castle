const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());

server.use(express.static(path.join(__dirname, '../client_side/build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client_side/build', 'index.html'));
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
