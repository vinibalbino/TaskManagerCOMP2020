const Task = require('../models/Task');
const mongoose = require('mongoose');

module.exports = {

  async index(req, res){

    try{
      const Tasks = await Task.find({});
      var dateManager = Tasks[1].deliveryDate
      var dateManager = new Date(dateManager);
      console.log(new Date().getTime())
      console.log(dateManager.getDate() + '/' + (dateManager.getMonth()+1) + '/' + dateManager.getFullYear())
      res.json(Tasks);

    }catch ( err){
      res.status(500);
    }
  },
  async create(req, res){
    const {name, description, deliveryDate } = req.body;
    
    try {
      
      let ObjectId = mongoose.Types.ObjectId();
      let task = new Task({
        _id: ObjectId,
        name,
        description,
        deliveryDate,
      });

      await task.save()
      res.status(204).send();

    } catch (error) {
      console.log(error)

      res.status(500).send(500);
    }
  },
  async onlyTask(req, res){
    const { _id } = req.params;
    try{
      const task = await Task.findOne({ _id: _id });
      res.send(task);

    }catch(err){

      console.log(err);
      res.send(500);
    }
  },
  async delete(req, res){
    const { _id } = req.params;

    try{
      await Task.findByIdAndRemove({ _id });

      res.status(204).send();
    }catch(err){

      response.status(500).json({ error: "Operation didn't happen"});
    }
  }

}