const express = require('express');

const routes = express.Router();

const TaskController = require('./controllers/TaskController');

routes.get('/tasks', TaskController.index);

routes.post('/new/task', TaskController.create);

routes.get('/task/:_id', TaskController.onlyTask);

routes.put('/task/:_id/edit', TaskController.modify);

routes.delete('/task/:_id', TaskController.delete);

module.exports = routes;
