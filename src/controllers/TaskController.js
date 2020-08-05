const mongoose = require('mongoose');
const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    try {
      const Tasks = await Task.find({});
      // Codigo abaixo trasnforma o timestamp em data visualizavel
      // let dateManager = Tasks[0].deliveryDate;
      // dateManager = new Date(dateManager);
      // console.log(new Date().getTime());
      // console.log(
      //   `${dateManager.getDate()}/${
      //     dateManager.getMonth() + 1
      //     // eslint-disable-next-line comma-dangle
      //   }/${dateManager.getFullYear()}`
      // );
      res.json(Tasks);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    const { name, description, deliveryDate } = req.body;

    try {
      const ObjectId = mongoose.Types.ObjectId();
      const task = new Task({
        _id: ObjectId,
        name,
        description,
        deliveryDate,
      });

      await task.save();
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async onlyTask(req, res) {
    const { _id } = req.params;
    try {
      const task = await Task.findOne({ _id });
      res.send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async modify(req, res) {
    const { _id } = req.params;
    const { name, description, deliveryDate } = req.body;

    try {
      await Task.findByIdAndUpdate(
        { _id },
        // eslint-disable-next-line comma-dangle
        { name, description, deliveryDate }
      );

      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Operation didn't happen" });
    }
  },
  async delete(req, res) {
    const { _id } = req.params;

    try {
      await Task.findByIdAndRemove({ _id });

      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Operation didn't happen" });
    }
  },
};
