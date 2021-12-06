const express = require('express');
const path = require('path');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());
const session = require('express-session');
const store = require('connect-session-knex')(session);

server.use(
  session({
    name: process.env.NAME, // the name of the cookie the server will place on client (session if)
    secret: process.env.SECREATE, //put this in an environment, not sessios
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: true, // in production, it should be true. https!!!
    },
    httpOnly: true, // don't let JS acces cookies. Browser extensions
    resave: false,
    saveUninitialized: false,

    store: new store({
      knex: require('./data/db-config'), // configured instance of knex
      tablename: 'sessions', // table that will store sessions inside the db, name it anything you want
      sidfieldname: 'sid', // column that will hold the session id, name it anything you want
      createtable: true, // if the table does not exist, it will create it automatically
      clearInterval: 1000 * 60 * 60, // time it takes to check for old sessions and remove them from the database to keep it clean and performant
    }),
  })
);

const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

server.use(express.static(path.join(__dirname, '../client_side/build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client_side/build', 'index.html'));
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
