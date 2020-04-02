const express = require('express');
const cors = require('cors')
const { errors }= require('celebrate')
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test_user:gvdYnRixHQVeBd2B@app-estudos-zio0i.mongodb.net/test_database?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

var app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app