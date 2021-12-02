const express = require('express');
const path = require('path');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());
const userRouter = require('./users/users-router');

server.use('/api/users', userRouter);

server.use(express.static(path.join(__dirname, '../client_side/build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client_side/build', 'index.html'));
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
