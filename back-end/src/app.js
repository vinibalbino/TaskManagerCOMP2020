require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  // eslint-disable-next-line comma-dangle
});

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(routes);

module.exports = server;
